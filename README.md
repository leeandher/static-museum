# Static Museum

A public archive for my works whose existence should be recognized even if their quality greatly varies. Consider these small static sites like you would historical art pieces, it's hard to interpret what was the intention, but we keep them around to immortalize progression. It's my own little archive.org.

These are a whole bunch of projects I've built over time, sorted by age descending. Click around, play with them, go crazy -- most of the links should be working and functionality should actually work, if I've done my job as a curator.

| Exhibit              | Description                                    | Deployed URL                         | Command Format    |
| -------------------- | ---------------------------------------------- | ------------------------------------ | ----------------- |
| **v0**               | A joke version of my first portfolio site      | https://v0.leander.xyz               | `v0:[cmd]`        |
| **v1**               | The portfolio site that got me my first job    | https://v1.leander.xyz               | `v1:[cmd]`        |
| **catch-of-the-day** | An over-engineered fish store menu             | https://catch-of-the-day.leander.xyz | `catch:[cmd]`     |
| **delicious**        | Colourful little app for restaurant reviews    | https://delicious.leander.xyz        | `delicious:[cmd]` |
| **reduxstagram**     | Instagram clone from when instagram was simple | https://reduxstagram.leander.xyz     | `redux:[cmd]`     |
| **v2**               | First ground-up rewrite of my personal site    | https://v2.leander.xyz               | `v2:[cmd]`        |
| **conway**           | Data visualization for Conway's Game of Life   | https://conway.leander.xyz           | `conway:[cmd]`    |
| **space-shooter**    | A space shooter game from a Unity Tutorial     | https://space-shooter.leander.xyz    | `space:[cmd]`     |
| **stacker-news**     | Hacker News clone with similar data to this    | https://stacker-news.leander.xyz     | `stacker:[cmd]`   |
| **md-prevuer**       | Markdown Previewer built in Vue.js (get it)    | https://md-prevuer.leander.xyz       | `md:[cmd]`        |
| **sick-fits**        | Online store with 'dynamic' (random) pricing   | https://sick-fits.leander.xyz        | `sick:[cmd]`      |
| **fyi**              | Used to be a nice URL shortener                | https://fyi.leander.xyz              | `fyi:[cmd]`       |
| **bgcg**             | Best Grilled Cheese Sandwich                   | https://bgcg.leander.xyz             | `bgcg:[cmd]`      |

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

Each project uses the following commands, though see the troubleshooting below for exceptions.

- `pnpm [project]:dev` - Start project's development server
- `pnpm [project]:build` - Build the project for production
- `pnpm [project]:deploy` - Deploy to Netlify (using local CLI), defaults to production since stakes are low here.

To add a new exhibit:

- [ ] Add it to package manager workspace via `pnpm-workspace.yaml`
- [ ] Remove all the unnecessary files from the project
- [ ] Add a `_redirects` if it's a single page app, and `netlify.toml` regardless
- [ ] Add the build commands to the root `package.json`
- [ ] Add a plaque script import, and dock if necessary to help with navigating.

### Troubleshooting

- `conway` project needs its packages installed manually with `yarn`. This is due to [a bug within pnpm](https://github.com/pnpm/pnpm/issues/7158) which has `antd` using the incorrect version of a `react` from this monorepo.
