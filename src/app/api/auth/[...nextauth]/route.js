import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
          scope: "https://www.googleapis.com/auth/youtube.upload"
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin"
  },
  secret: process.env.NEXTAUTH_SECRET,
  session:{
    strategy:'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn(account, profile, query){
      const role = query.role;

      if(role == "owner"){

      }
      else if(role == "editor"){

      }
      return true;
    }
  }
})

export { handler as GET, handler as POST };