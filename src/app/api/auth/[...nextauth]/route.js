// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { handlers } from "@/auth";
export const { GET, POST } = handlers;
