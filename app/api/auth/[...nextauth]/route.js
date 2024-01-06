import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connect } from "@/utils/dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        email: { label: "password" },
      },
      async authorize(credentials) {
        await connect();
        console.log(credentials);
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPassword = credentials.password === user.password;
            if (isPassword) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    // ...add more providers here
  ],
  session: {
    jwt: true,
    // Customize JWT options if needed
    // Example: Set a custom JWT duration
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
