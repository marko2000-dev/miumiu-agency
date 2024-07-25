import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col justify-center gap-20 max-w-4xl px-3">
          <main className="flex flex-col gap-24 items-center justify-center h-full">
            <h2 className="font-semibold md:font-bold text-3xl md:text-4xl text-center text-balance">
              This website will present our
              <br /> business journey and our story 💙
            </h2>

            <h3 className="font-regular md:font-medium text-xl md:text-2xl text-center">
              Happy birthday my love 🥰 🌎
            </h3>
          </main>
        </div>

        <footer className="w-full border-t border-t-[#091512] border-opacity-20 text-[#091512] p-8 flex justify-center text-center text-sm">
          <p>Powered by MiuMiuAgency</p>
        </footer>
      </div>
    </div>
  );
}
