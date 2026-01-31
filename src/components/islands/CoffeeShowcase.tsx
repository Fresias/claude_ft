"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface CoffeePanel {
  label: string;
  title: string;
  text: string;
}

const PANELS: CoffeePanel[] = [
  {
    label: "origin",
    title: "Origen",
    text: "Cultivado a 1.800 m en las laderas de Huila, Colombia. Suelo volcánico, sombra de guamos y recolección manual cereza a cereza.",
  },
  {
    label: "roast",
    title: "Tostado",
    text: "Tueste medio en tambor de 12 kg. Primera grieta a los 9:45, desarrollo del 18 %. Notas de panela y cacao sin amargor.",
  },
  {
    label: "profile",
    title: "Perfil de Taza",
    text: "Acidez cítrica brillante, cuerpo sedoso, retrogusto prolongado a frutos rojos. SCA Score 87.",
  },
];

export function CoffeeShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Parallax: imagen se desplaza -15% a lo largo de todo el timeline
      tl.to(
        ".showcase-image",
        { yPercent: -15, duration: 3, ease: "none" },
        0
      );

      // ── Panel 1: Origen (0% → 33%) ──
      tl.addLabel("origin", 0);
      tl.fromTo(
        ".panel-origin",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.3, ease: "none" },
        "origin"
      );
      tl.to(
        ".panel-origin",
        { opacity: 1, y: 0, duration: 0.4, ease: "none" },
        "origin+=0.3"
      );
      tl.to(
        ".panel-origin",
        { opacity: 0, y: -32, duration: 0.3, ease: "none" },
        "origin+=0.7"
      );

      // ── Panel 2: Tostado (33% → 66%) ──
      tl.addLabel("roast", 1);
      tl.fromTo(
        ".panel-roast",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.3, ease: "none" },
        "roast"
      );
      tl.to(
        ".panel-roast",
        { opacity: 1, y: 0, duration: 0.4, ease: "none" },
        "roast+=0.3"
      );
      tl.to(
        ".panel-roast",
        { opacity: 0, y: -32, duration: 0.3, ease: "none" },
        "roast+=0.7"
      );

      // ── Panel 3: Perfil (66% → 100%) ──
      tl.addLabel("profile", 2);
      tl.fromTo(
        ".panel-profile",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.3, ease: "none" },
        "profile"
      );
      tl.to(
        ".panel-profile",
        { opacity: 1, y: 0, duration: 0.4, ease: "none" },
        "profile+=0.3"
      );
      tl.to(
        ".panel-profile",
        { opacity: 0, y: -32, duration: 0.3, ease: "none" },
        "profile+=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{ height: "300vh", background: "#0f0f0f" }}
    >
      <div
        className="showcase-viewport"
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "2rem",
          padding: "0 clamp(1.5rem, 5vw, 6rem)",
          overflow: "hidden",
        }}
      >
        {/* ── Lado Izquierdo: Bolsa de café ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            className="showcase-image"
            style={{
              width: "clamp(200px, 22vw, 340px)",
              height: "clamp(300px, 36vw, 520px)",
              background:
                "linear-gradient(160deg, #3a2418 0%, #1a0f08 60%, #0d0704 100%)",
              borderRadius: "16px 16px 4px 4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Etiqueta decorativa */}
            <div
              style={{
                width: "70%",
                height: "40%",
                border: "1px solid rgba(210,170,120,0.3)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(210,170,120,0.6)",
                }}
              >
                Single Origin
              </span>
              <span
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                  fontWeight: 700,
                  color: "#d2aa78",
                  fontFamily: "Georgia, serif",
                }}
              >
                Huila
              </span>
              <span
                style={{
                  fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(210,170,120,0.4)",
                }}
              >
                Colombia
              </span>
            </div>
          </div>
        </div>

        {/* ── Lado Derecho: Paneles de texto ── */}
        <div
          className="showcase-panels"
          style={{
            position: "relative",
            height: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {PANELS.map((panel) => (
            <div
              key={panel.label}
              className={`panel panel-${panel.label}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                /* Anti-FOUC: coincide con fromVars de GSAP */
                opacity: 0,
                transform: "translateY(32px)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#d2aa78",
                  marginBottom: "0.75rem",
                }}
              >
                {panel.title}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#f5f0eb",
                  margin: "0 0 1rem 0",
                  lineHeight: 1.1,
                  fontFamily: "Georgia, serif",
                }}
              >
                {panel.title}
              </h2>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                  lineHeight: 1.7,
                  color: "rgba(245,240,235,0.7)",
                  maxWidth: "480px",
                  margin: 0,
                }}
              >
                {panel.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
