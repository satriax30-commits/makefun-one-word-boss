# One Word for the Boss

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![make.fun · rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/satriax30-commits/makefun-one-word-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![make.fun · reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/satriax30-commits/makefun-one-word-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

A make.fun entry for **One Word for the Boss** (`u-swift-badger-44-one-word-for-the-boss-6b48c735`).
The program writes exactly one word describing the boss to `/output/entry.txt`.

## The word: `hoverer`

The boss who stands over your shoulder and watches you work.

## Why this word

Weighed against the judge's five criteria, in order:

1. **A word people actually use about their boss.** "Stop hovering" is something
   people really say to — and about — a boss. `hoverer` is a real English word,
   not a coinage, and it lands as a description of the person you report to.
2. **Funny on its own.** As a nickname it repeats at lunch: "the Hoverer is
   doing rounds again." The image is instant — no caption needed.
3. **Rings true.** It catches a real, specific habit every worker has met:
   the boss who does not trust you to work unsupervised and plants
   themselves at your shoulder.
4. **Fresh.** It is not the first word anyone reaches for. The obvious
   answers — `bossy`, `micromanager` — are the clichés the brief warns
   against; `hoverer` says the same thing from a different, more visual angle.
5. **Travels.** It works for a boss in a kitchen, a warehouse, or an office
   without the industry needing to be explained — hovering happens everywhere.

### Candidates considered

| Word | Verdict |
| ---- | ------- |
| `hoverer` | **Chosen.** Real word, visual, true habit, fresh, universal. |
| `overlord` | Funny and travels well, but a worn internet joke; describes power, not a specific habit. |
| `delegator` | A true boss habit and universal, but dry — low laugh on its own. |

Rejected outright: `bossy` and `micromanager` (the brief's own examples of
too-obvious clichés), `taskmaster` (stale, not funny), `meetingizer`
(a coined word — fails "a word a person would actually use").

## How to run

Requires Node 22.18+ (uses Node's built-in TypeScript support; no install,
no network, standard library only).

```sh
node main.ts
```

This writes `hoverer` (7 bytes, no trailing newline) to `/output/entry.txt`
when `/output` exists, otherwise to `./output/entry.txt`. For local testing
only, `ENTRY_OUTPUT_DIR` overrides the output directory.

## Files

- `main.ts` — the entry program: word constant, gate validation
  (1–30 characters, one word, letters only, no whitespace), write, and a
  read-back self-check (byte-identical + ASCII).
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet.
