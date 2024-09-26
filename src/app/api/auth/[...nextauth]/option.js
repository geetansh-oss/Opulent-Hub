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
        email: { label: "email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          await connectToDB();
          // const editorExist = await Editor.findOne({
          //   email: credentials?.email,
          // });
          const user = {id:"4", email: 'test@gmail.com', password: 'test', role : "editor"}
          console.log("editor profile");
          if (!user) {
            return null;
          } else if (credentials?.email === user.email && credentials?.password === user.password) {
            console.log(user);
            return user;
          } else {
            return null;
          }
        } catch(error) {
          console.log(error);
        }
      }
    })
  ],
  // pages: {
  //   signIn: '/auth/signin'
  // },
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
    }
  }
} 
