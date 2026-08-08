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

[Features](#-key-features) • [How to Run](#-how-to-run) • [Customization](#-how-to-add-custom-tracks) • [Keyboard Shortcuts](#-keyboard-shortcuts) • [What We Learned](#-what-we-learned) • [Author](#-author)

</div>


```markdown
# 🎵 MECO Music Player using Web Technologies

A professional, modern **Web-Based Music Player** developed using **HTML5**, **CSS3**, and **Vanilla JavaScript**. This music player provides an interactive desktop-class audio experience with glassmorphism UI, a spinning vinyl record animation, real-time track search, and keyboard shortcuts.

---

## 📌 Project Overview

This project showcases frontend web development concepts by building a responsive, lightweight, and framework-free audio player interface. The player features a translucent glassmorphic design, floating ambient lighting, custom audio controls, and an interactive vinyl disc that slides and rotates during playback.

This project was developed as a hands-on project to master web audio APIs and modern UI/UX design.

---

## ✨ Features

- 💎 **Glassmorphic UI Design**: Translucent player card with real-time backdrop blur and glowing borders.
- 💿 **Interactive Vinyl Disc**: Animated vinyl record that slides out and spins during audio playback.
- 🌈 **Ambient Background Glow**: Keyframe-animated floating color blobs creating a studio atmosphere.
- 🔍 **Real-time Track Search**: Filter your playlist instantly by song title or artist name.
- ⚡ **Enhanced Audio Controls**:
  - Variable Playback Speed Switcher (`0.5x`, `1.0x`, `1.25x`, `1.5x`, `2.0x`).
  - Repeat Single Track, Repeat Playlist, and Shuffle modes.
  - Interactive scrub bar and volume slider with quick mute toggle.
- ⌨️ **Keyboard Shortcuts**: Complete hands-free playback navigation using your keyboard.
- 📱 **Fully Responsive Layout**: Fits seamlessly across mobile, tablet, and desktop screens.

---

## 📁 Project Structure


```

MECO-MUSIC-PLAYER/
│
├── index.html        # Main DOM layout and audio player structure
├── style.css         # Glassmorphism styling, animations, & CSS variables
├── script.js         # Audio API logic, keyboard handlers, & playlist filter
├── README.md         # Project documentation
│
└── assets/
├── audio/        # Local MP3 track files
└── covers/       # Album cover artwork images

```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document structure and native `<audio>` element integration.
- **CSS3**: CSS Variables, Flexbox, Keyframe Animations, Glassmorphism (`backdrop-filter`).
- **JavaScript (Vanilla ES6+)**: Audio API event handling, DOM manipulation, and keyboard listeners.
- **FontAwesome 6**: Modern vector control icons.
- **VS Code**: Primary Code Editor.

---

## 📦 Installation & Setup

### Prerequisites

No Node.js, npm, build tools, or external server dependencies are required! You only need a modern web browser.

### Clone the Repository

```bash
git clone [https://github.com/your-username/MECO-MUSIC-PLAYER.git](https://github.com/your-username/MECO-MUSIC-PLAYER.git)

```

### Open the Project

```bash
cd MECO-MUSIC-PLAYER

```

---

## 🚀 How to Run

### Option 1: Direct File Launch

Double-click the `index.html` file in your file explorer to open it directly in Chrome, Firefox, Edge, or Safari.

### Option 2: VS Code Live Server (Recommended)

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| Space | Play / Pause audio |
| ← | Seek backward (5 seconds) |
| → | Seek forward (5 seconds) |
| ↑ | Increase volume (+10%) |
| ↓ | Decrease volume (-10%) |
| M | Toggle Mute / Unmute |

---

## ⚙️ How to Add Custom Tracks

To load your own music playlist, open `script.js` and edit the `songs` array at the top of the file:

```javascript
const songs = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    src: "assets/audio/your-song.mp3",
    cover: "assets/covers/your-cover.jpg"
  },
  {
    title: "Second Track",
    artist: "Another Artist",
    src: "assets/audio/song2.mp3",
    cover: "assets/covers/cover2.jpg"
  }
];

```

---

## 💬 Sample Usage & Interactions

```
1. Search Bar:
   Type "Sidhu" or "Darkhaast" → Live playlist updates instantly.

2. Playback Control:
   Click "Play" → Vinyl record slides out and spins at 360deg.

3. Speed Selector:
   Click "1.0x" button → Cycles through 1.25x, 1.5x, 2.0x, 0.5x speeds.

4. Keyboard Navigation:
   Press "Spacebar" → Instantly toggles play/pause state without mouse.

```

---

## 📸 Screenshots

Add screenshots of your music player here after setting up the project repository.

Example:

* Player Main Screen
* Vinyl Record Spinning Animation
* Real-time Playlist Search
* Mobile Responsive View

---

## 💡 What We Learned

Through this project, I learned:

* Working with the JavaScript `HTMLAudioElement` and its event lifecycle (`timeupdate`, `ended`, `play`, `pause`).
* Advanced CSS animations using `@keyframes`, hardware-accelerated transforms, and CSS variables (`:root`).
* Applying modern Glassmorphism design principles using `backdrop-filter: blur()`.
* Building interactive search filters and keyboard shortcuts using Vanilla JavaScript.
* Managing project structure, documentation, and version control using Git & GitHub.

---

## 🚀 Future Improvements

* 📊 **Web Audio API Visualizer**: Real-time frequency visualizer using HTML5 Canvas or WebGL.
* 📜 **Synced Lyrics View**: Dynamic `.lrc` file parsing to show scrolling text aligned with audio timestamps.
* 📁 **Drag-and-Drop Uploader**: Allow users to drop local `.mp3` files directly onto the browser window.
* 💾 **LocalStorage Persistence**: Save user preferences (last played track, volume, and playback time).
* 🌓 **Dark / Light Glass Themes**: Toggle option between neon dark and frost light glassmorphism styles.

---

## 👨‍💻 Author

**Harsh Chauhan**

Web Developer & Student

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

## 📜 License

This project is open-source and intended for educational and learning purposes.

```

```
