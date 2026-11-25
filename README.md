# Warung Rush

[![make.fun bounty](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/ockirahmadi/warung-rush/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/ockirahmadi/warung-rush/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137)

A fast, replayable browser cooking game: run the busiest Indonesian street-food
stall in town. Customers arrive with orders for Nasi Goreng, Mie Goreng, Sate
Ayam, Gorengan and Es Teh. Cook each dish at the right station before it burns,
collect it to your tray, and serve the right customer before their patience runs
out. Fast correct serves build a combo up to x5; a wrong dish or a walk-away
resets it. Three levels across a 90-second round, with faster spawns, shorter
patience and two-dish orders as the rush builds.

- Live game: https://ockirahmadi.github.io/warung-rush/
- Repository: https://github.com/ockirahmadi/warung-rush
- Bounty: https://make.fun/bounty/best-cooking-game-20261125-0137

## What I did

I built Warung Rush from scratch as plain static files — no library, no build
step, no network requests. The game is split into three files with one job
each: `game/index.html` (markup), `game/styles.css` (all presentation) and
`game/main.js` (all game logic: orders, cooking timers, burn rules, tray,
serving, combo, levels and scoring). All food and characters are drawn with
inline SVG, and all sound effects are synthesized with WebAudio, so the game
plays fully offline in a desktop browser. I play-tested it with Playwright in
headless Chromium (start screen, cooking, serving, burn, pause, game over,
restart) and took its four screenshots from real renders of the game.

## How to run

Serve the `game/` folder with any static HTTP server, or just open the file:

```sh
node serve.ts        # serves game/ at http://localhost:8080
```

or open `game/index.html` directly in a desktop browser. Click
**START COOKING**, tap a station button to cook, tap a tray dish to pick it up,
then tap the matching customer to serve. Keyboard: `P` pauses, `M` mutes.

## License

MIT — see [LICENSE](LICENSE).
