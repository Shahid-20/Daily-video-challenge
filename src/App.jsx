import { useState } from "react";

/*
 * LAYOUT RULE OF THUMB used throughout this file:
 *
 *   Flexbox -> lay things out in ONE direction (a single row OR a single column).
 *              Great for aligning, spacing and centering items along a line.
 *
 *   Grid    -> lay things out in TWO directions (rows AND columns at the same time).
 *              Great for page sections / cards where you control the columns.
 *
 * Each layout below has a comment saying which one was picked and why.
 */

// Today's challenge. In a real app this would come from an API.
const challenge = {
  title: "Challenge of the Day",
  goal: "Record a 30-second video explaining one thing you learned this week — in a way a 10-year-old would understand.",
  difficulty: "Beginner", // "Beginner" | "Intermediate" | "Pro"
  videoUrl:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

// Each difficulty level gets its own colour so it can be read at a glance.
const difficultyStyles = {
  Beginner: "bg-green-100 text-green-800 ring-green-600/20",
  Intermediate: "bg-amber-100 text-amber-800 ring-amber-600/20",
  Pro: "bg-red-100 text-red-800 ring-red-600/20",
};

function DifficultyBadge({ level }) {
  return (
    // `inline-flex` + `items-center`: the badge is a tiny one-row flex box, which
    // vertically centers the text inside the pill. `inline` keeps it only as wide
    // as its text, instead of stretching across the whole row like a block would.
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset ${difficultyStyles[level]}`}
    >
      {level}
    </span>
  );
}

function VideoArea({ src }) {
  return (
    // `aspect-video` keeps the box at a 16:9 ratio at ANY width, so we never
    // need a fixed pixel height. The video then fills the box (`w-full h-full`).
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900">
      {src ? (
        <video src={src} controls className="h-full w-full object-cover" />
      ) : (
        // FLEXBOX: only one child (the placeholder text) that we want dead-center
        // both horizontally and vertically. `flex items-center justify-center`
        // is the shortest way to do that.
        <div className="flex h-full items-center justify-center text-slate-400">
          No video yet
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    // FLEXBOX (page wrapper): the page has a single child — the card. We just want
    // to center it in the screen, so flex with `items-center` (vertical) and
    // `justify-center` (horizontal) is the simplest tool. `min-h-screen` makes the
    // wrapper at least as tall as the window so vertical centering has room to work.
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
        {/*
          FLEXBOX (header row): title on the left, badge on the right — items in a
          single row. `justify-between` pushes them to opposite ends, `items-center`
          lines them up vertically. `flex-wrap` lets the badge drop below the title
          on very narrow screens instead of squashing it.
        */}
        <header className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {challenge.title}
          </h1>
          <DifficultyBadge level={challenge.difficulty} />
        </header>

        {/*
          GRID (main content): this is the two-dimensional part of the page.
          - On phones:   1 column  -> video on top, details underneath.
          - On desktops: 2 columns -> video left, details right (`md:grid-cols-2`).
          Grid lets us change the whole arrangement with ONE class at a breakpoint,
          and both columns automatically get equal width and equal height.
          `gap-6` adds space between cells without margins on the children.
        */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <VideoArea src={challenge.videoUrl} />

          {/*
            FLEXBOX COLUMN (details): the goal text and the button simply stack
            top-to-bottom — one direction, so flex (`flex-col`) is enough.
            Because grid makes this cell as tall as the video, `mt-auto` on the
            button pushes it to the bottom of the column, lining it up with the
            bottom of the video.
          */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Your goal
              </h2>
              <p className="mt-1 text-slate-700">{challenge.goal}</p>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={submitted}
              className="mt-auto rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-green-600"
            >
              {submitted ? "Submitted! ✅" : "Submit"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
