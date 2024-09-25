import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid https://www.googleapis.com/auth/youtube.upload profile email",
        },
      },
      profile(profile) {
        return {
          id: profile.sub, // Use the 'sub' field as the 'id'
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role, // Default role logic
        };
      },
    })
  ],
  pages: {
    signIn: "/auth/signin"
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.role = user.role || token.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async signIn(account, profile, query) {
      const role = query?.role;
      account.role = role;
      console.log(`Role passed from client: ${role}`);
      return true;
    }
  }
})

export { handler as GET, handler as POST };