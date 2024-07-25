import { MainLogo } from "@/assets/main-logo";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AuthButton from "../components/AuthButton";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/protected");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center justify-between h-full">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="flex flex-col gap-20 w-full h-full justify-center items-center px-7 md:px-80">
        <MainLogo width="756" className="hidden md:block h-min" />
        <MainLogo width="auto" className="md:hidden h-min" />
        <div className="flex flex-col gap-4 justify-center items-center px-7 md:px-0">
          <h1 className="text-2xl text-[#091512]">Website coming soon...</h1>
          <h3 className="text-md  md:text-lg text-[#091512] text-center">
            But if you are part of the agency, go to{" "}
            <a href="/login" className="text-[#0c6c77] underline">
              Login
            </a>{" "}
            page :)
          </h3>
        </div>
      </div>

      <footer className="w-full border-t border-t-[#091512] border-opacity-20 text-[#091512] p-8 flex justify-center text-center text-sm">
        <p>Powered by MiuMiuAgency</p>
      </footer>
    </div>
  );
}
