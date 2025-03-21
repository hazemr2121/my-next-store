import { auth } from "@/auth";
import { SignIn } from "@/components/auth/signin-button";
import { SignOut } from "@/components/auth/signout-button";
export default async function Home() {
  const session = await auth();
  console.log("session", session);
  if (!session?.user) return null;

  return (
    <>
      <div>
        <img src={session.user.image} alt="User Avatar" />
      </div>

      <SignIn />
      <SignOut />
    </>
  );
}
