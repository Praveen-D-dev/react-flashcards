# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Flashcards App

This is a simple flashcards application built using React. It allows users to view questions, flip to see answers, and track their progress.

## 🔗 Project Source

This project is based on the roadmap.sh challenge:
https://roadmap.sh/projects/flash-cards

---

## 🚀 Features

* Predefined flashcards (questions & answers)
* Flip card to reveal answer
* Navigate between cards (Next / Previous)
* Progress bar with percentage
* Current progress indicator (e.g., 3 of 10)
* Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript
* Bootstrap

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Praveen-D-dev/react-flashcards.git
```

Navigate into the project folder:

```bash
cd react-flashcards
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the App

Start the development server:

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173/
```

---

## 📁 Project Structure

```
react-flashcards/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
```

---

## 📌 Future Improvements

* Add card flip animation
* Add keyboard navigation
* Add shuffle mode
* Add score tracking

---

## 📷 Preview

(Add screenshot here later)

---

## 🧠 What I Learned

* React state management using useState
* Conditional rendering
* Component structuring
* Handling user interaction
* Using Bootstrap with React