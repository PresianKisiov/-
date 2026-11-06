# Centered Hero & Developer Role Tagline

Transform the hero presentation of Presiyan Kisiov's personal portfolio into a full-viewport, perfectly centered typographic showcase, featuring a curated role subtitle and smooth transition into the personal story.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during interactive clarification and will guide the implementation:

- **Confirmed Decision 1**: The hero area will occupy a full-height viewport frame (`min-h-[calc(100vh-5rem)]`), centering Presiyan's name both horizontally and vertically across all devices.
- **Confirmed Decision 2**: A refined role subtitle ("Разработчик & Творец" / "Developer & Creator") will be introduced directly beneath the name, paired with an unobtrusive scroll prompt leading into the "За мен" section.

---

### 1. Overview & Core Concept

- **What It Does**: Presents a commanding, focused first impression when arriving on the website. Presiyan's name takes center stage on the screen, accompanied by an authentic professional subtitle establishing his identity as a builder and creator, without clutter or distractions.
- **Target Audience / Persona**: Collaborators, peers, teachers, and visitors looking to understand who Presiyan is and what he creates.
- **Key Value**: Replaces the former left-leaning, compact top section with a poised, intentional hero experience that feels confident, modern, and spacious.

---

### 2. User Experience & Visual Design

- **Hero Composition & Math**:
  - Full-height container (`min-h-[calc(100vh-5rem)]` on desktop, `min-h-[90vh]` on mobile) with `flex flex-col items-center justify-center text-center`.
  - Display Headline: High-impact typography with fluid sizing (`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl`), bold weight, tracking-tight, with emerald hover reflections.
  - Role Subtitle: Positioned with gentle optical spacing (`mt-4 sm:mt-6`), styled in clean unboxed typography with typographic separators (`text-zinc-400 font-medium text-sm sm:text-base tracking-widest uppercase`).
  - Subtle Scroll Anchor: A delicate, non-intrusive downward arrow or scroll indicator at the base of the hero that smoothly scrolls to the `#about` section.
- **Section Flow & Rhythm**:
  - Hero (`#home`): 100% viewport presence, centered.
  - Story (`#about`): Roomy padding, centered headline, personal text cards.
  - Connect (`#contact`): Clean 3-column interactive contact cards.
  - Footer: Philippians 4:6-7 quote and social icons.
- **Color & Atmosphere**:
  - Deep dark canvas (`#020806`) with optimized emerald ambient radial gradients.
  - Zero decorative pulsing dots or gimmicks. Strictly clean typography and smooth spring transitions.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-Height Hero vs. Dense Inline Header**:
  - *Chosen Approach*: Full-viewport hero (`min-h-[calc(100vh-5rem)]`) with centered alignment.
  - *Why*: Without the former SPASEN block, a compact hero left the top half of the screen feeling empty and asymmetric. Centering creates balance and stature.
  - *Alternatives Considered*: Retaining left-aligned text with arbitrary top padding—rejected because it caused unbalanced whitespace on modern wide screens.
- **Decision 2: Subtitle Language & Phrasing**:
  - *Chosen Approach*: "Разработчик & Творец" (with clean English sub-accent "Developer & Creator" or natural Bulgarian phrasing).
  - *Why*: Directly honors the user's "За мен" bio statement ("Обичам да правя неща. Сайтове, проекти, каквото ми дойде на ума.") while maintaining professional poise.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      Navbar.tsx                        │
│   [ Преско ]             [ Начало · За мен ]           │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                 Home.tsx - Hero Section                │
│                                                        │
│                  Пресиян Кисьов                        │
│             Разработчик & Творец                       │
│                                                        │
│                    [ ↓ Разгледай ]                     │
└───────────────────────────┬────────────────────────────┘
                            │ (smooth scroll)
                            ▼
┌────────────────────────────────────────────────────────┐
│                 Home.tsx - За мен                      │
│   Казвам се Пресиян и живея в Габрово...               │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                 Home.tsx - Контакти                    │
│        [ LinkedIn ]   [ Instagram ]   [ Имейл ]        │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                      Footer.tsx                        │
│             Филипяни 4:6-7 · Социални мрежи            │
└────────────────────────────────────────────────────────┘
```

- **Interactive Component & State Mapping**:
  - The hero scroll prompt smoothly invokes `element.scrollIntoView({ behavior: 'smooth' })` targeting `#about`.
  - Top navigation active state observer (`IntersectionObserver` or scroll listener) cleanly syncs as the user scrolls past the viewport threshold.
