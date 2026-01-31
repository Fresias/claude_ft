import { HeroIsland } from "@/components/islands/HeroIsland";
import { CoffeeShowcase } from "@/components/islands/CoffeeShowcase";

// Server Component — zero JS shipped for this file.
// Only the island subtrees hydrate on the client.

export default function Home() {
  return (
    <main>
      {/* ── Interactive island: hydrates on client ── */}
      <HeroIsland
        headline="Islands Architecture"
        subheadline="RSC-First layout. Only this island ships JavaScript."
      />

      {/* ── Coffee Showcase island: scroll-driven animations ── */}
      <CoffeeShowcase />

      {/* ── Static RSC section: no JS at all ── */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <h2>Why Islands?</h2>
        <p>
          Everything outside an island is a React Server Component — rendered
          once on the server with zero client-side JavaScript. Interactive
          pieces like the animated hero above opt-in to hydration via the
          <code> &apos;use client&apos;</code> directive.
        </p>
      </section>
    </main>
  );
}
