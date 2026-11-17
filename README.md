# Daily-video-challenge
Daily AI video challenge product

A simple "Challenge of the Day" page built with **React** + **Tailwind CSS** (via Vite).

## Run it

```bash
npm install
npm run dev      # open the URL Vite prints (usually http://localhost:5173)
npm run build    # production build into dist/
```

The page lives in `src/App.jsx`. Edit the `challenge` object at the top to change the
title, goal, difficulty (`Beginner` / `Intermediate` / `Pro`) or video URL.

## Layout cheat-sheet (flex vs grid)

| Part of the page | Layout | Why |
| --- | --- | --- |
| Page wrapper | Flexbox | Children sit in a row, wrap onto the next line when there's no room, and align to the left — `flex flex-wrap justify-start`. |
| Header (title + badge) | Flexbox row | Two items on one line, pushed apart with `justify-between`. |
| Main content (video + details) | Grid | Two dimensions: 1 column on phones, 2 on desktop with one class (`md:grid-cols-2`). |
| Details (goal + button) | Flexbox column | Simple vertical stack; `mt-auto` pins the button to the bottom. |
| Video box | `aspect-video` | Keeps 16:9 at any width without a fixed height. |

**Rule of thumb:** flex = one direction (a row *or* a column); grid = rows *and* columns at once.
