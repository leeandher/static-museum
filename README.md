# Static Museum

A public archive for my works whose existence should be recognized even if their quality greatly varies. Consider these small static sites like you would historical art pieces. Modern lenses may disagree with the artistic choices, and its intention eludes us, but we keep them around to immortalize those before us. Shows progression, in some small way. It's my own little archive.org, but with tiny plaques

These are a whole bunch of projects I've built over time, sorted by age descending. Click around, play with them, go crazy -- most of the links should be working and functionality should actually work, if I've done my job as a curator.

| Exhibit              | Description                                    | Deployed URL                         | Project     |
| -------------------- | ---------------------------------------------- | ------------------------------------ | ----------- |
| **v0**               | A joke version of my first portfolio site      | https://v0.leander.xyz               | `v0`        |
| **v1**               | The portfolio site that got me my first job    | https://v1.leander.xyz               | `v1`        |
| **catch-of-the-day** | An over-engineered fish store menu             | https://catch-of-the-day.leander.xyz | `catch`     |
| **delicious**        | Colourful little app for restaurant reviews    | https://delicious.leander.xyz        | `delicious` |
| **reduxstagram**     | Instagram clone from when instagram was simple | https://reduxstagram.leander.xyz     | `redux`     |
| **v2**               | First ground-up rewrite of my personal site    | https://v2.leander.xyz               | `v2`        |
| **conway**           | Data visualization for Conway's Game of Life   | https://conway.leander.xyz           | `conway`    |
| **space-shooter**    | A space shooter game from a Unity Tutorial     | https://space-shooter.leander.xyz    | `space`     |
| **stacker-news**     | Hacker News clone with similar data to this    | https://stacker-news.leander.xyz     | `stacker`   |
| **md-prevuer**       | Markdown Previewer built in Vue.js (get it)    | https://md-prevuer.leander.xyz       | `md`        |
| **sick-fits**        | Online store with 'dynamic' (random) pricing   | https://sick-fits.leander.xyz        | `sick`      |
| **fyi**              | Used to be a nice URL shortener                | https://fyi.leander.xyz              | `fyi`       |
| **bgcg**             | Best Grilled Cheese Sandwich                   | https://bgcg.leander.xyz             | `bgcg`      |

These projects were originally built on KhanAcademy and CodePen, so it's their first time on the internet. These precede any of the above projects

| Sub-exhibits      | Description                                 | URL                                            |
| ----------------- | ------------------------------------------- | ---------------------------------------------- |
| **concentration** | Rhythm game without the music               | https://v0.leander.xyz/portfolio/concentration |
| **rainbow**       | Reaction game with fun colours              | https://v0.leander.xyz/portfolio/rainbow       |
| **inversion**     | Alien survival game with 'graphics'         | https://v0.leander.xyz/portfolio/inversion     |
| **tribute**       | The first webpage I ever made               | https://v0.leander.xyz/portfolio/tribute       |
| **quotes**        | Quote generator styled as a dating app      | https://v1.leander.xyz/projects/quotes         |
| **wikiview**      | Stylish new interface for Wikipedia         | https://v1.leander.xyz/projects/wikiview       |
| **weather**       | A very (very) simple weather app            | https://v1.leander.xyz/projects/weather        |
| **liveontwitch**  | Streamer dashboard using the Twitch API     | https://v1.leander.xyz/projects/liveontwitch   |
| **calculator**    | Calculator that kinda works                 | https://v1.leander.xyz/projects/calculator     |
| **fuelgauge**     | Pomodoro clock that looks like a fuel gauge | https://v1.leander.xyz/projects/fuelgauge      |
| **simon**         | Simon Says but with a few fun mods          | https://v1.leander.xyz/projects/simon          |
| **tictactoe**     | Tic-tac-toe app w/ an unbeatable robot      | https://v1.leander.xyz/projects/tictactoe      |

## Development

```
make dev [project]     # Start dev server for a project
make deploy [project]  # Build and deploy to production
```

Using the `[project]` from the exhibit table (e.g. `make dev catch`, `make deploy v2`). Run `make` to see all available projects and commands as well.

The makefile uses `pnpm` commands under the hood:

- `pnpm [project]:dev` - Start project's development server
- `pnpm [project]:build` - Build the project for production
- `pnpm [project]:deploy` - Deploy to Netlify (using local CLI), defaults to production since stakes are low here.

To add a new exhibit:

- Add it to package manager workspace via `pnpm-workspace.yaml`
- Remove all the unnecessary files from the project
- Add a `_redirects` if it's a single page app, and `netlify.toml` regardless
- Add the build commands to the root `package.json`
- Append the project to the `Makefile`
- Add a plaque script import, and dock if necessary to help with navigating.

## Shared Files

Some files are shared across the project to enable the plaques and dock. The lowest common denominator for these projects is pure JS, so the easiest way to get these in each app is dropping it right in as a script tag, but how this happens varies a little per project.

- Eleventy will pick up changes in dev and build.
  - Applies to `v0`, `v1`
- For most other apps, a new `setup-shared` script: `mkdir -p [static-dir] && cp -R ../_shared [static-dir]`, and run it before `dev` and `build` commands
  - Applies with `public` dir to `catch-of-the-day`

### Troubleshooting

- `conway` project needs its packages installed manually with `yarn`. This is due to [a bug within pnpm](https://github.com/pnpm/pnpm/issues/7158) which has `antd` using the incorrect version of a `react` from this monorepo.
