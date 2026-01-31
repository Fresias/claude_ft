"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface HeroIslandProps {
  headline: string;
  subheadline: string;
}

export function HeroIsland({ headline, subheadline }: HeroIslandProps) {
  const containerRef = useRef<HTMLElement>(null);

  // useGSAP with `scope` ensures all selectors are scoped to this island.
  // Cleanup is automatic — no manual killTweensOf needed.
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-headline", {
        y: 60,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-subheadline",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        className="hero-headline"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", margin: 0 }}
      >
        {headline}
      </h1>

      <p
        className="hero-subheadline"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
          maxWidth: 600,
          marginTop: "1rem",
          opacity: 0.85,
        }}
      >
        {subheadline}
      </p>

      <button
        className="hero-cta"
        style={{
          marginTop: "2rem",
          padding: "0.875rem 2rem",
          fontSize: "1.125rem",
          border: "2px solid #f5f5f5",
          borderRadius: 8,
          background: "transparent",
          color: "#f5f5f5",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}
