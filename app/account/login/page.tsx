import { buildMetadata } from "@/lib/seo/metadata";
import { LoginShell } from "@/components/account/LoginShell";

export const metadata = buildMetadata({
  title: "Log in",
  description: "Big Switch account login shell — authentication coming soon.",
  path: "/account/login",
  noIndex: true,
});

export default function LoginPage() {
  return <LoginShell />;
}
