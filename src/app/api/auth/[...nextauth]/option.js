import GoogleProvider from "next-auth/providers/google";

export const Options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        // console.log("Profile Google:", Profile);
        let userRole = "owner"
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization : {
        params : {
          scope : "https://www.googleapis.com/auth/youtube.upload email profile"
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
  }
} 
