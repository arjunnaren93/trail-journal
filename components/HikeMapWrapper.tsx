"use client";

import dynamic from "next/dynamic";
import type { HikeRoute } from "@/lib/hikes";

const HikeMap = dynamic(() => import("@/components/HikeMap"), { ssr: false });

export default function HikeMapWrapper({ route }: { route: HikeRoute }) {
  return <HikeMap route={route} />;
}
