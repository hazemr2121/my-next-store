import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto py-10">
      <LoginForm />
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600">
          Register
        </Link>
      </p>
    </div>
  );
}
