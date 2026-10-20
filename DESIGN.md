# DESIGN SYSTEM & SPECIFICATION: Sadman Fahmid Raj Portfolio

## 1. Project Overview & Vision
- **Target User / Identity**: Sadman Fahmid Raj — CS Student, "Vibecoder", Tech Tinkerer, and Street Photographer based in Dhaka, Bangladesh (GMT +6:00).
- **Core Concept**: An interactive, expressive digital workspace combining a physical "creative desk / collage" aesthetic on desktop with a sleek, clean, modern dark card feed on mobile.
- **Key Persona Vibe**: Cyberpunk minimalism meets playful tactile stationery (torn paper notes, polaroids, stickers, chalk lines, and anime pop culture).

---

## 2. Color Palette & Theming

### Primary Theme: Modern Dark / Obsidian Charcoal with Crimson Ruby
- **Background Main (Obsidian Canvas)**: `#0d0f14`
- **Surface Elevation 1 (Card / Container)**: `#161922`
- **Surface Elevation 2 (Panel / Mat)**: `#1c202a`
- **Brand Accent (Crimson Ruby)**: `#ff3366` / `rgb(255, 51, 102)`
- **Secondary Accent (Cyber Red)**: `#e02454`
- **Torn Paper / Sticky Notes Background**: `#f4eae0` / `#fff5ea`
- **Text - Primary Headings**: `#ffffff`
- **Text - Muted / Secondary**: `#94a3b8`
- **Text - Handwritten Accent**: `#ff3366`

---

## 3. Typography Hierarchy
1. **Handwritten / Tactile**: 
   - Font: `"Gochi Hand"`, cursive, sans-serif
   - Usage: 3 Fun Facts notes, polaroid handwritten scribbles, playful annotations, stickers.
2. **Display & Headings**: 
   - Fonts: `"Awesome Serif"`, `"Averia Serif Libre"`, serif
   - Usage: Page titles, section headers, hero callouts.
3. **Body & Interface**: 
   - Font: `"Inter"`, system-ui, -apple-system, sans-serif
   - Usage: Navigation bar, metadata, body text, buttons, footer checklist items.

---

## 4. Key Interactive Components

### A. The Draggable Polaroid Portrait
- **Base Frame**: Dark charcoal polaroid mat with a crisp centered portrait headshot of Sadman.
- **Interactive Mask Overlay**:
  - Asset: Bleach Fully Hollowfied / Vasto Lorde Hollow Mask.
  - Symmetrical front-facing alignment: contoured across eyes, nose, teeth over mouth, chin covering jawline, with horns extending past the card edges.
  - Interaction: Fully draggable across the screen via mouse or touch (`drag: true, dragMomentum: false, dragSnapToOrigin: true`).
  - Physics: Inertia spring physics with smooth bounce snap-back onto the face upon release.
- **Handwritten Label**: Crimson ruby text reading *"সাদমান"* at the base of the polaroid.

### B. Interactive Role & Status Header
- **Role Title**: Animated letter-by-letter interactive component configured as **"Vibecoder"**.
- **Location Badge**: *"Dhaka • GMT +6:00"*.
- **Quick Nav**: Direct links to *Work*, *About*, and *Resume*.

### C. 3 Fun Facts (Torn Paper Sticky Notes)
- Tactile torn-edge paper cards rotated subtly on the canvas:
  1. *"enjoy messing around with tech"*
  2. *"always down to try good food"*
  3. *"I see it, I shoot it."*

### D. Photography Cutting Mat
- Dark grid pattern cutting mat with a rotating carousel/matrix of authentic street photography shots taken around Dhaka.

### E. Team Fit Checklist & Footer
- Section: *"What I look for in a team"*.
- Media: Embedded playful cat meme GIF.
- Contact Actions:
  - Email: `sadmanfahmidraj69@gmail.com`
  - GitHub: `https://github.com/sadmandied`
  - LinkedIn: `https://www.linkedin.com/in/sadmandied/`
  - Resume: Direct link to `assets/resume.pdf`

---

## 5. Responsive Behavior

### Desktop (>= 810px)
- Free-form creative desk layout with scattered physical artifacts, subtle parallax depth, and horizontal exploration room.

### Mobile (< 810px)
- **Zero Horizontal Overflow**: `max-width: 100vw; overflow-x: hidden`.
- **Streamlined Vertical Feed**:
  1. Clean top navigation & intro (Vibecoder • Dhaka).
  2. Centered interactive Polaroid card with touch-draggable Vasto Lorde mask.
  3. Stacked 3 Fun Facts cards with tight, natural margins (no empty dead space).
  4. Curated photo gallery feed.
  5. Compact footer with checklist and social contact buttons.
