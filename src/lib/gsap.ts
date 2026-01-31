import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once. Guard ScrollTrigger behind a window check
// so SSR passes (even though islands are 'use client', Next.js may
// attempt to pre-render them on the server during build).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { gsap, useGSAP, ScrollTrigger };
