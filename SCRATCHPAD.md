# Sticky Scroll Showcase — Progress Tracker

## Phase 1: Infrastructure
- [x] Migrate `app/` and `components/` into `src/`
- [x] Update tsconfig `@/*` alias to `./src/*`
- [x] Create `src/lib/gsap.ts` (centralized plugin registry)
- [x] Update `HeroIsland.tsx` to import from `@/lib/gsap`

## Phase 2: CoffeeShowcase Island
- [ ] Create `src/components/islands/CoffeeShowcase.tsx`
- [ ] Implement ScrollTrigger pinning (image stays fixed, text panels scroll)
- [ ] Add staggered text panel animations (Origen, Tostado, Perfil)
- [ ] Apply Groovory-inspired dark palette and typography
- [ ] Anti-FOUC: match CSS initial state with GSAP frame-0

## Phase 3: Integration & Polish
- [ ] Wire `CoffeeShowcase` into `src/app/page.tsx`
- [ ] Verify no hydration mismatches in dev
- [ ] Test scroll behavior across viewports
