# SVG Liquid Wave Text Loader Animation 🌊

A smooth, open-source SVG liquid wave text loading animation built with pure **HTML, CSS, and Vanilla JavaScript**.

This project creates a dynamic water wave filling effect inside logo text (or any SVG text element) synchronized with a percentage counter. Perfect for preloaders, splash screens, or brand intros!

---

## ✨ Features

- 🌊 **Realistic Liquid Wave Effect:** Uses SVG `<clipPath>` and dynamic sine wave rendering.
- ⚡ **Lightweight & Fast:** Pure HTML, CSS, and Vanilla JS — zero external dependencies.
- 📱 **Responsive Design:** Automatically scales and adjusts layout for mobile devices.
- 🎯 **Easy Integration:** Simple `setProgress(percentage)` API to connect with real website asset loading.
- 🎨 **Fully Customizable:** Easily change text, colors, font sizes, wave speed, amplitude, and frequency.

---

## 🚀 Quick Start

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/your-username/svg-loader.git
   ```
2. **Open `index.html`** directly in any web browser to see the live demo animation.

---

## ⚠️ Important Note: Demo Code vs Real Production Use

> **Note:** The included `startDemoLoading()` function in `main.js` is **DEMO CODE** designed to simulate a loading process from `0%` to `100%` using `setInterval()`.

### How to use this on your actual website:

When using this loader in a real production environment, you should **remove or comment out `startDemoLoading()`** and update the progress dynamically based on your actual site asset loading (e.g., images, APIs, fonts, or scripts).

#### Example Integration:

```javascript
// 1. Initialize loader at 0%
setProgress(0);

// 2. Start wave animation loop
requestAnimationFrame(animate);

// 3. DO NOT call startDemoLoading()!
// Instead, update progress dynamically as assets load:
function updateWebsiteLoadingProgress(loadedItems, totalItems) {
    const percentage = (loadedItems / totalItems) * 100;
    
    // Call setProgress with your real loading percentage (0 to 100)
    setProgress(percentage);

    if (percentage >= 100) {
        // Hide or fade out your loader container when loading completes
        document.querySelector(".loader").style.display = "none";
    }
}
```

---

## 🛠️ How to Customize

### 1. Change Text & Logo
In `index.html`, replace `"NeoLeaf"` with your own brand name or text in both SVG `<text>` elements (the base gray background text and the clipped white fill text):

```html
<!-- Base text background -->
<text class="logo-text logo-text--gray" x="500" y="215" text-anchor="middle">
    YOUR LOGO
</text>

<!-- Clipped text (liquid wave fill) -->
<text class="logo-text logo-text--white" x="500" y="215" text-anchor="middle" clip-path="url(#wave-clip)">
    YOUR LOGO
</text>
```

### 2. Customize Colors & Fonts
Modify `style.css` to match your brand theme:

```css
/* Change background color */
body {
    background: #111111;
}

/* Base text color (empty state) */
.logo-text--gray {
    fill: #444444;
}

/* Liquid fill color */
.logo-text--white {
    fill: #00e5ff; /* e.g., Cyan liquid fill */
}
```

### 3. Adjust Wave Settings & Boundaries
In `main.js`, you can adjust the constants at the top to customize the wave behavior and align with your text height:

```javascript
// Text vertical bounds inside the SVG viewBox (adjust according to font height & y position)
const TEXT_TOP = 60;
const TEXT_BOTTOM = 215;

// Wave Animation Controls
const WAVE_AMPLITUDE = 10;   // Height of the wave peaks
const WAVE_STEP = 10;        // Smoothness/resolution of the wave path
const WAVE_FREQUENCY = 0.025; // Frequency/tightness of the wave curves
const WAVE_SPEED = 0.065;     // Horizontal speed of wave movement
```

---

## 📂 Project Structure

```
svg-loader/
├── index.html   # Main HTML structure with SVG clip path & loader markup
├── style.css    # Styling, layout, and responsive breakpoints
├── main.js      # Sine wave math, clip path rendering & animation loop
└── README.md    # Documentation
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and integrate it into your personal or commercial projects! 🌟
