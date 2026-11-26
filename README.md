# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Samot72/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-entry/rank.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Samot72/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-entry/reward.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for [Unsent: The Micro-Confession Sprint](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) ($2 prize, free entry).

One micro-confession in exactly two parts: a `To:` line naming who it was
meant for, and the unsent message itself, one line, exactly as it was typed —
no explanation after it. The house judge compares entries two at a time and
picks the one that feels most genuinely unsent: specific and honest, with a
felt reason it stayed in drafts.

## The entry

> To: Dad
>
> I typed 'I'm not okay' the night you asked, then deleted it — you were already working two jobs, and I didn't want to be one more thing to carry.

153 characters total (Unicode code points), message line 145 characters —
inside the gate of 1–260 characters.

## How it works

`main.ts` (Node 22, no dependencies) holds the entry text, validates it
(total 1–260 Unicode code points, exactly 2 lines: a `To:` line plus the
message line of at most 200 characters), writes it byte-exact with **no
trailing newline** to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`),
then reads it back and verifies it matches.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-u-boothlord-unsent-the-micro-confession-sprint-8c6596ba node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
