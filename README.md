# Sadman Fahmid Raj — Personal Portfolio

A skeuomorphic portfolio website inspired by [jackiezhang.co.za](https://jackiezhang.co.za), crafted for **Sadman Fahmid Raj**.

## ✨ Design & Visual Features

- **Skeuomorphic Leather Journal**: Gold foil embossed typography, stitched edges, silk ribbon bookmark, and location badge (`Dhaka • GMT +6:00`).
- **Tactile Paper Notebook**: Grid paper aesthetic with washi tape, binder rings, and 3 Core Belief cards with authentic doodle stickers (lucky cat, noodles, flower, hornbill, aeropress, juicebox).
- **Green Self-Healing Cutting Mat**: Metric centimeter rulers, grid texture, and **interactive, draggable, tiltable Polaroids** with washi tape.
- **Physical Case Studies (Work Page)**:
  - **Bash**: Apparel clothing tag with hanging string, barcode, and metrics.
  - **Pulse**: Athlete POV streaming with telemetry map.
  - **Heygo**: Perforated admission ticket with barcode and notches.
  - **Dotslash**: Retro CRT terminal with scanline overlay.
  - **Side Quests**: Spiral bound notebook cards with realistic metal coils.
- **Story & Sticky Notes (About Page)**: 3 pinned sticky notes (*What fuels my soul*, *Stuff I nerd out on*, *What gives me energy*).
- **Interactive Checklist**: Clickable checklist on lined notepad.
- **Audio Synthesizer**: Web Audio API synthesis playing the acoustic melody of *"Take Me Home, Country Roads"* with animated visualizer bar.
- **Continuous Marquee Ticker**: Infinite running ticker tape along the page border.
- **Film Frame Rulers**: Retro 35mm film perforations and frame numbers along desktop margins.
- **Connect Postcard Modal**: Airmail postcard dialog with quick copy-to-clipboard button and toast alert.

---

## 🚀 How to Run Locally

You can run this project with zero dependencies:

### Option 1: Directly in Browser
Simply double-click `index.html` in file explorer to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Using Python Simple Server
```bash
cd "C:\Users\Sadman\.gemini\antigravity\scratch\sadman-portfolio"
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Using Node / Vite / npx serve
```bash
npx serve .
```

---

## 📁 Project Structure

```
sadman-portfolio/
├── index.html           # Home page
├── work.html            # Work case studies page
├── about.html           # About & personal notes page
├── README.md            # Documentation & deployment guide
├── assets/
│   ├── css/
│   │   └── style.css    # Full tactile skeuomorphic stylesheet
│   ├── js/
│   │   └── main.js      # Drag & drop, Web Audio synth, modal & toggles
│   └── images/          # Local high-res textures, stickers & polaroids
```
