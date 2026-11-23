# Warning Label for Humans: One Line, Big Laugh

[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/hioraeriska/warning-label-01/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/hioraeriska/warning-label-01/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

A one-line safety warning label for humans — funny first, plausible second — built for the [make.fun bounty](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).

## The entry

> `WARNING: Opens the fridge, stares inside for 30 seconds, and closes it, having learned nothing.`

95 characters, one line.

## How it works

`main.ts` writes the line, with no trailing newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output` when the variable is unset).

```sh
MAKEFUN_OUTPUT_DIR=output npx tsx main.ts
# writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
