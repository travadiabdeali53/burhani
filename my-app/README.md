# 🏗️ Burhani Steel & Hardware — Project Setup Guide

## ✅ Prerequisites (Install these first)

1. **Node.js** → Download from https://nodejs.org (choose LTS version)
   - After install, verify: open Terminal → type `node -v` → should show version
2. **VS Code** → Download from https://code.visualstudio.com
3. **VS Code Extensions** (recommended):
   - ESLint
   - Tailwind CSS IntelliSense
   - Prettier

---

## 🚀 Step-by-Step Setup in VS Code

### STEP 1 — Create the Project Folder

Open your Terminal in VS Code (`Ctrl + `` ` or View → Terminal) and run:

```bash
# Navigate to where you want the project (e.g., Desktop)
cd Desktop

# Create and enter the project using Vite
npm create vite@latest burhani-steel -- --template react
cd burhani-steel
```

---

### STEP 2 — Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### STEP 3 — Install All Dependencies

```bash
npm install
```

---

### STEP 4 — Copy Project Files

Now copy the files from this download into your project folder:

```
burhani-steel/
├── index.html                    ← Replace existing
├── package.json                  ← Replace existing
├── tailwind.config.js            ← Replace existing
├── postcss.config.js             ← Replace existing
├── vite.config.js                ← Replace existing
└── src/
    ├── App.jsx                   ← Replace existing
    ├── main.jsx                  ← Replace existing
    ├── index.css                 ← Replace existing
    └── components/
        ├── Navbar.jsx            ← NEW — create this folder & file
        ├── Hero.jsx
        ├── Slider.jsx
        ├── Products.jsx
        ├── Stats.jsx
        └── Footer.jsx
```

> 💡 **Tip**: In VS Code, right-click on `src` → New Folder → name it `components`, then create each .jsx file inside it.

---

### STEP 5 — Run the Development Server

```bash
npm run dev
```

You'll see something like:
```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open your browser and go to **http://localhost:5173** 🎉

---

### STEP 6 — Build for Production (Optional)

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder — upload its contents to any web host.

---

## 🎨 Adding Your Images Later

Replace placeholder divs with real images like this:

```jsx
// Instead of the placeholder div, use:
<img
  src="/images/tmt-bars.jpg"
  alt="TMT Bars"
  className="w-full h-full object-cover"
/>
```

Put your images in the `public/images/` folder of your project.

---

## 📁 Final Folder Structure

```
burhani-steel/
├── public/
│   └── images/          ← Add your images here later
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Slider.jsx
│   │   ├── Products.jsx
│   │   ├── Stats.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🆘 Common Issues

| Problem | Fix |
|---|---|
| `command not found: npm` | Install Node.js from nodejs.org |
| Tailwind not working | Make sure `index.css` has `@tailwind` directives |
| Blank screen | Check browser console (F12) for errors |
| Port already in use | Run `npm run dev -- --port 3000` |

---

Happy Building! 🔩⚙️