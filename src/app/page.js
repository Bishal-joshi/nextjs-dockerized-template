"use client";

import { healthCheck } from "@/api/healthCheck";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    healthCheck();
  }, []);

  return <div>Hello world</div>;
}
