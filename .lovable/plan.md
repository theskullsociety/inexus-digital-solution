
# Hero redesign — Bold Maximalist

Rebuild `src/components/HeroSection.tsx` to match the selected "Bold maximalist" direction. No other sections touched. Same Noir & Gold tokens, same Space Grotesk / Inter fonts — only the hero composition, density, and motion register change.

## What changes visually

- **Eyebrow badge** gets a pinging gold dot (animate-ping ring + solid core) instead of a single pulse dot.
- **Headline** scales up to `lg:text-[5.5rem] xl:text-[6.5rem]`, tighter tracking (`tracking-tighter`), tighter leading (`leading-[0.9]`). "Go Viral." gets the gold gradient + a soft gold drop-shadow glow.
- **Lead form** becomes a single glass capsule: input + CTA inside one rounded-2xl `bg-foreground/5 border-foreground/10 backdrop-blur-md` shell with a black drop shadow. Wired as a real `<form>` (currently scrolls to #contact; ready for Phase-2 backend later).
- **Trust strip** appears under the form: 3 stacked avatar dots + "Trusted by 500+ hyper-growth brands globally".
- **Phone mockup** restyled into a thicker bezel (`border-[8px] border-secondary`), real notch bar, gold halo shadow.
- **Floating bubbles** restyled and re-positioned with rotation + continuous `float` and `bounce-slow` keyframes (not just entrance animation).
- **New metric badge overlay** — "+428% Avg Conversion Lift" anchored to the bottom-left of the phone, gold-bordered, backdrop-blurred. This is the maximalist signature element.
- Layout switches from `flex` to a `lg:grid-cols-12` split (7 / 5) so the visual sits tighter against the copy.

## Files changed

1. **`src/components/HeroSection.tsx`** — full rewrite (single file, ~190 lines). Uses semantic tokens (`bg-primary`, `text-foreground`, `border-secondary`, `hsl(var(--glow-accent))`) — no raw hex.
2. **`tailwind.config.ts`** — add two keyframes + animations:
   - `float`: 6s ease-in-out infinite, gentle Y bob + slight rotate
   - `bounce-slow`: 5s ease-in-out infinite, larger Y bob + rotate
   Mapped to `animate-float` and `animate-bounce-slow` utilities.

## What stays the same

- All other sections (Marquee, Stats, Services, Portfolio, Testimonials, etc.)
- Navbar, Footer, logo
- Color tokens in `index.css`
- 3D HeroSphere inside the phone (desktop only, lazy-loaded — preserves current performance budget)
- Mobile fallback gradient blob (no 3D on mobile)

## Approve to implement

Switch me to build mode and I'll apply the two file edits. ~1 minute of work, zero risk to the rest of the site.
