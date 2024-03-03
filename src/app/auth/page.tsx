import Link from "next/link";
import { Button } from "@/components/ui/button";

import { signIn } from "./actions/signIn";
import { signUp } from "./actions/signUp";

export default function Login({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <Link
        href="/"
        className="bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm text-foreground no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button formAction={signIn}>Sign In</Button>
        <Button
          formAction={signUp}
          variant={"outline"}
          className="border border-primary/30"
        >
          Sign Up
        </Button>
        {searchParams?.error && (
          <p className="mt-4 rounded-lg bg-destructive/20 p-4 text-center text-destructive">
            {searchParams.error}
          </p>
        )}
      </form>
    </div>
  );
}
