import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/Admin/Login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as any;
        session.user.email = token.email as any;
        session.user.name = token.name as any;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check if any users exist
        const userCount = await prisma.user.count();

        if (userCount === 0) {
          // Create default admin user if no users exist
          const hashedPassword = await hash("Ee123456", 10);
          const defaultUser = await prisma.user.create({
            data: {
              email: "dev@enlightors.com",
              password: hashedPassword,
              name: "Default Admin",
            },
          });
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
