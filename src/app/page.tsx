import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data.session?.user;
  return (
    <main>
      {user ? (
        <div className="flex flex-col gap-2">
          <span>welcome back {user.email}</span>
        </div>
      ) : (
        <Link href="/auth">
          <Button>Login</Button>
        </Link>
      )}
    </main>
  );
}
