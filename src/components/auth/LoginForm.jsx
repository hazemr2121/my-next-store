// src/components/auth/LoginForm.jsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError(result.error);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      setError("An error occurred during sign in");
    }
  };

  const handleOAuthSignIn = (provider) => {
    signIn(provider, {
      callbackUrl: "https://pkaisnmhwvvscymsxipg.supabase.co/auth/v1/callback",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded mb-4"
        >
          Login
        </button>
      </form>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleOAuthSignIn("google")}
          className="w-full p-2 border rounded flex items-center justify-center gap-2"
        >
          <span>Login with Google</span>
        </button>

        <button
          onClick={() => handleOAuthSignIn("facebook")}
          className="w-full p-2 border rounded flex items-center justify-center gap-2"
        >
          <span>Login with Facebook</span>
        </button>
      </div>
    </div>
  );
}
