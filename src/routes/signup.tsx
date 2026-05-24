import { createFileRoute } from "@tanstack/react-router";
import { AuthShell, AuthField } from "@/components/AuthShell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Join — Sumaboss" },
      { name: "description", content: "Create your Sumaboss account and begin the ritual." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <AuthShell
      title="Begin the ritual."
      subtitle="Create an account to track your glow."
      cta="Create account"
      altText="Already a believer?"
      altLink="/login"
      altLabel="Sign in"
    >
      <div className="grid grid-cols-2 gap-4">
        <AuthField label="First name" placeholder="Léa" />
        <AuthField label="Last name" placeholder="Moreau" />
      </div>
      <AuthField label="Email" type="email" placeholder="you@radiant.com" />
      <AuthField label="Password" type="password" placeholder="At least 8 characters" />
      <p className="text-xs text-muted-foreground">By joining, you agree to our soft, gold-trimmed Terms.</p>
    </AuthShell>
  );
}
