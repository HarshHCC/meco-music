<div align="center">

<!-- HEADER BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6c5ce7,100:00cec9&height=220&section=header&text=MUCO%20MUSIC%20PLAYER&fontSize=48&fontColor=ffffff&fontAlignY=42&desc=Sleek%20%E2%80%A2%20Glassmorphic%20%E2%80%A2%20Interactive%20Web%20Audio%20Experience&descAlignY=66&descScale=18" width="100%" alt="MUCO Banner" />

<br/>

<!-- BADGES -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-00cec9.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A lightweight, responsive web music player featuring a modern glassmorphism UI, interactive vinyl record animations, real-time track searching, and dynamic ambient lighting.
</p>

[Features](#-key-features) • [Installation](#-getting-started) • [Customization Guide](#-how-to-add-custom-tracks) • [Keyboard Shortcuts](#-keyboard-shortcuts) • [Troubleshooting](#-troubleshooting)

</div>

---

## 📖 About The Project

**MUCO Music Player** is a modern, zero-dependency audio interface designed to provide a rich desktop-class music playback experience directly inside any browser. Built entirely with raw **HTML5**, **CSS3**, and **Vanilla JavaScript**, it eliminates external library dependencies (like React or jQuery) while maintaining high performance and smooth keyframe animations.

### Why MUCO?
* **Zero Dependencies:** Pure web standards keep load times under 100ms.
* **Modern Aesthetic:** Deep dark mode base layered with translucent glassmorphic components and blurred ambient background blobs.
* **Vinyl Disc Animation Engine:** Pure CSS `transform` and `animation` pipeline that slides and rotates a vinyl disc during playback.

---

## ✨ Key Features

### 💎 UI & Aesthetics
* **Glassmorphism Design:** Semi-transparent cards with real-time `backdrop-filter: blur()`, glowing borders, and drop shadows.
* **Interactive Vinyl Record:** Album artwork paired with a vinyl disc that slides out and spins when audio is playing, then retracts on pause.
* **Ambient Lighting:** Floating keyframe-animated gradient blobs (`#6c5ce7` and `#00cec9`) that create a glowing studio environment.

### 🎧 Playback & Audio Controls
* **Real-time Progress Scrubbing:** Custom duration slider showing live elapsed time and remaining track time.
* **Volume Slider & Mute Toggle:** Smooth linear audio adjustment with dynamic icon states (High, Low, Muted).
* **Playback Rate Selector:** Switch speed modes on the fly (`0.5x`, `1.0x`, `1.25x`, `1.5x`, `2.0x`).
* **Repeat & Shuffle Logic:** Toggle between **Repeat Playlist**, **Repeat Single Track**, and **Randomized Shuffle**.
* **Instant Search Filter:** Real-time search input that filters the playlist array by track title or artist name instantly.

---

## ⌨️ Keyboard Shortcuts

Control playback hands-free using your keyboard:

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Play / Pause audio |
| <kbd>←</kbd> | Seek backward 5 seconds |
| <kbd>→</kbd> | Seek forward 5 seconds |
| <kbd>↑</kbd> | Increase volume (+10%) |
| <kbd>↓</kbd> | Decrease volume (-10%) |
| <kbd>M</kbd> | Toggle Mute / Unmute |

---

## 📁 Project Architecture & File Hierarchy

```text
music-player/
│
├── index.html        # DOM markup, control containers, and layout
├── style.css         # Glassmorphic CSS, keyframes, variables, & responsive styles
├── script.js         # Audio API state machine, DOM event listeners, & search logic
└── README.md         # Documentation file

---

## 🚀 How to Run

### Prerequisites
You do *not* need Node.js, npm, or any external package managers to run this project. All you need is a modern web browser.

### Option 1: Quick Local Run
1. *Clone the repository:*
   ```bash
   git clone [https://github.com/your-username/music-player.git](https://github.com/your-username/music-player.git)
## AUTHOR
HARSH CHAUHAN
