import connectDB from "@/config/dbConnect";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // invoked on successfull sign in
    async signIn({ profile }) {
      console.log(profile);
      // 1. connect to database
      await connectDB();
      // 2. check if user exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. if not, then add user to database
      if (!userExists) {
        // Truncate user name if tooo long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      // 4. return true to allow sign in
      return true;
    },
    // modifies the session object
    async session({ session }) {
      // 1. get user from database
      const user = await User.findOne({ email: session.user.email });
      // 2. assign the user id to the sesssion
      session.user.id = user._id.toString();
      // 3. return session
      return session;
    },
  },
};
