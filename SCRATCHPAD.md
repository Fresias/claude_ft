# Sticky Scroll Showcase — Progress Tracker

## Phase 1: Infrastructure ✅
- [x] Migrate `app/` and `components/` into `src/`
- [x] Update tsconfig `@/*` alias to `./src/*`
- [x] Create `src/lib/gsap.ts` (centralized plugin registry)
- [x] Update `HeroIsland.tsx` to import from `@/lib/gsap`

## Phase 2: CoffeeShowcase Island ✅
- [x] Create `src/components/islands/CoffeeShowcase.tsx`
- [x] Implement ScrollTrigger pinning (image stays fixed, text panels scroll)
- [x] Add staggered text panel animations (Origen, Tostado, Perfil)
- [x] Apply dark palette and typography
- [x] Anti-FOUC: match inline CSS initial state with GSAP frame-0

## Phase 3: Integration & Polish ✅
- [x] Wire `CoffeeShowcase` into `src/app/page.tsx`
- [ ] Verify no hydration mismatches in dev
- [ ] Test scroll behavior across viewports
