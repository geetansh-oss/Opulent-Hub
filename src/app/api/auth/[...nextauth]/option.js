import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Editor from "@/models/editor";
import Owner from "@/models/owner";
import { connectToDB } from "@/utils/database";

export const Options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        // console.log("Profile Google:", Profile);
        return {
          ...profile,
          id: profile.sub,
          role: profile.role || "owner",
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "https://www.googleapis.com/auth/youtube.upload email profile"
        }
      }
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email", placeholder: "example@gmail.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          await connectToDB();
          // const editorExist = await Editor.findOne({
          //   email: credentials?.email,
          // });
          const user = { id: "4", email: 'test@gmail.com', password: 'test', role: "editor" }
          if (!user) {
            return null;
          } else if (credentials?.email === user.email && credentials?.password === user.password) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      console.log(`token: ${token}`);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      console.log(`session: ${session}`);
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        const existUser = await Owner.findOne({
          email: profile?.email
        })

        if (!existUser) {
          const newUser = await Owner.create({
            email: profile?.email,
            image: profile?.picture,
            username: profile?.name.split(" ").join("").toLowerCase()
          })
          console.log("new User Created :-", newUser);
          return true;
        }
        console.log("Existing User:-", existUser);
        return true;
      } catch (error) {
        console.error("sign in error", error);
        return false;
      }
    }
  }
} 
