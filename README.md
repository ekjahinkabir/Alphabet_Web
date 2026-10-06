# 🔤 Jahin's Alphabet World

A colorful, kid-friendly web app that helps children learn the English alphabet (A–Z) through lessons, mini games, letter tracing, and rewards. Built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no dependencies.

> 🌐 **Live Demo:** `https://<your-username>.github.io/<your-repo-name>/` *(after enabling GitHub Pages, see below)*

---

## ✨ Features

- 🔤 **Alphabet World** – Tap any letter A–Z to see a picture, example word (with Bangla translation), and a sentence like "A is for Apple".
- 🔊 **Listen Button** – Reads the letter and word aloud using the browser's Speech Synthesis.
- 🎈 **Balloon Pop** – Pop the balloon with the correct letter to earn stars.
- 🧩 **Letter Match** – Match letters with their words.
- ✏️ **Letter Tracing** – Trace letters with a mouse or finger on a canvas (touch supported).
- ⭐ **Stars & Levels** – Earn stars while learning and level up as you go.
- 🧒 **Characters** – Unlock magical friends as you collect stars.
- 🔒 **Parent Area** – Password-protected page showing total stars, level, and letters learned, with a reset-progress option.
- 💾 **Auto Save** – Progress is stored in the browser with `localStorage`.
- ⌨️ **Keyboard Shortcuts** – Use the arrow keys to move between letters in a lesson.
- 📱 **Responsive** – Works on phones, tablets, and desktops, with a bottom navigation bar for small screens.

---

## 📁 Project Structure

```
├── index.html     # Page structure and screens
├── style.css      # All styling and animations
├── script.js      # App logic, games, tracing, progress
└── README.md
```

> ⚠️ **Important – file names are case-sensitive on GitHub!**
> `index.html` loads `style.css` and `script.js` (all lowercase). Make sure your files are named exactly that when you upload them (not `Style.css` or `Script.js`), otherwise the styling and JavaScript will not load on GitHub Pages.

---

## 🚀 Getting Started

### Run locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Open `index.html` in any modern browser.

That's it — no installation needed.

### Deploy with GitHub Pages

1. Push the files to your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute, your site will be live at  
   `https://<your-username>.github.io/<your-repo-name>/`

---

## 🎮 How to Use

| Screen | What it does |
| --- | --- |
| 🏠 Home | Start learning or jump to games |
| 🔤 Learn | Pick a letter to see its picture, word, and hear it |
| 🎮 Games | Play Balloon Pop, Letter Match, or Letter Tracing |
| 🧒 Friends | See and unlock characters |
| 🔒 Parents | View progress and reset data |

### 🔐 Parent Area Password

The default password is **`1234`**. To change it, open `script.js`, find the `openParentArea()` function, and edit the password value:

```js
if (password === "1234") {
```

> Note: this is a simple child-lock, not real security, since the code is visible in the browser.

---

## 🛠️ Customization

- **Add or edit letters/words:** change the `alphabet` array at the top of `script.js` (each entry has `letter`, `word`, `bangla`, and `emoji`).
- **Change colors and theme:** edit the styles in `style.css` and the `theme-color` meta tag in `index.html`.
- **Characters:** edit the `characters` list in `script.js`.

---

## 🌍 Browser Support

Works in the latest versions of Chrome, Edge, Firefox, and Safari. The 🔊 Listen feature depends on the browser's Speech Synthesis support, and available voices vary by device.

---

## 🧰 Built With

- HTML5
- CSS3 (animations, responsive layout)
- Vanilla JavaScript (Canvas API, Web Speech API, localStorage)

---

## 🤝 Contributing

Suggestions and improvements are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. Add a `LICENSE` file (for example, [MIT](https://choosealicense.com/licenses/mit/)) to specify how others may use it.

---

Made with ❤️ for Jahin and all little learners.
