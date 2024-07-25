import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex justify-between w-full items-center">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-[#091512] hover:bg-[#0c6c77] text-white">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-[#091512] hover:bg-[#0c6c77] text-white"
    >
      Login
    </Link>
  );
}
