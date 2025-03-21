import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    signIn: async ({ user }) => {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          username: user.name,
          password: "admin",
        }),
      });
      if (!response.ok) {
        console.error("Failed to link OAuth with backend");
        return false;
      }
      const data = await response.json();
      user.backendToken = data.token;

      return true;
    },
  },
});
