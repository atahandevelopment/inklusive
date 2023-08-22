import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@/Models/User";
import { signJwtToken } from "@/lib/jwt";
import { getMe } from "@/services/auth/register";
import mongoose from "mongoose";

export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "text", placeholder: "Password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;

          mongoose.connect(process.env.MONGODB_URL);
          const user = await User.findOne({email: email})
        if (!user) {
          throw new Error("User not found");
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
          throw new Error("Invalid password");
        } else {
          const { password, ...currentUser } = user._doc;
          
          
          const { data } = await getMe(currentUser?._id)
          const accessToken = signJwtToken(currentUser, { expiresIn: "5d" });
          const refreshToken = signJwtToken(currentUser);

          return {
            ...currentUser,
            data,
            accessToken,
            refreshToken,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.data = user.data;
        token._id = user._id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.data = token.data;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }

      return session;
    },
  },
  jwt: {
    maxAge: 10,
  },
  session: {
    strategy: "jwt",
    maxAge: 720,
    cookie: {
      maxAge: 720,
    },
  },
  secret: process.env.JWT_SECRET,
};
export default NextAuth(authOptions);
