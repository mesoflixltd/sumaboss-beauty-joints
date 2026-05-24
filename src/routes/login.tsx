import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, AuthField } from "@/components/AuthShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Sumaboss" },
      { name: "description", content: "Sign in to your Sumaboss ritual." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthShell
      title="Welcome back."
      subtitle="Pick up your ritual where you left off."
      cta="Sign in"
      altText="New to Sumaboss?"
      altLink="/signup"
      altLabel="Create an account"
    >
      <AuthField label="Email" type="email" placeholder="you@radiant.com" />
      <AuthField label="Password" type="password" placeholder="••••••••" />
      <div className="flex justify-end -mt-1">
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition">Forgot password?</a>
      </div>
    </AuthShell>
  );
}
