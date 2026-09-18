import { buildMetadata } from "@/lib/seo/metadata";
import { ProfileShell } from "@/components/account/ProfileShell";

export const metadata = buildMetadata({
  title: "Profile",
  description: "Jnana Diksuchika profile shell — auth-backed profile coming soon.",
  path: "/account/profile",
  noIndex: true,
});

export default function ProfilePage() {
  return <ProfileShell />;
}
