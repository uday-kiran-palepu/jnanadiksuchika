import type { Metadata } from "next";
import { SystemStatesPage } from "@/components/tools/system-states/SystemStatesPage";

export const metadata: Metadata = {
  title: "System States & Fallback Archetypes | Jnana Diksuchika",
  description:
    "Design RFC for 404 beacons, empty states, skeleton loaders, form failover, and mobile 390px resiliency patterns.",
};

export default function Page() {
  return <SystemStatesPage />;
}
