import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-10">
      <RegisterForm />
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
}
