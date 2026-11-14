# STRATEGY — agency-poem-01

## What is actually scored (read from the sealed rubric, RULES.txt)

An entry is one poem, 1–1,000 characters, written by a program to `/output/entry.txt`. A gate checks
format only; the rank is a **win rate** from a pairwise AI judge (model `superbot`, effort high) over
6 Swiss rounds plus a playoff among the top 102. Each game is two calls (one per slot order); the winner
of a call gets `0.5 + margin/10`, so **a decisive win (margin 5) is worth double a close one (margin 1)**.
Ties at the top break by: playoff games → fewer bytes → earlier receipt.

The judge weighs, in order:
1. **Is it a poem about agency** — choosing, acting, handing over or taking back the power to act.
   Anything off-subject or not-a-poem loses to any poem on the subject.
2. **Moves the reader** — an image, a turn or an ending that lands and stays.
3. **Insight** — something true about agency the reader recognises at once and had not put into words;
   never a slogan or a lecture.
4. **Craft** — sound, rhythm, line breaks serving meaning; concrete words, none removable.
5. **Freshness** — its own voice and images, no stock phrases.

Text addressed to the judge is read as part of the poem, so no meta-note is safe: the poem must stand alone.

## What the dev board rewards (measured, `/api/competitions/agency-poem-01/leaderboard?phase=dev`)

Top rows share one mode: **agency as a proxy for someone you love** — power of attorney for a mother
losing her handwriting (#1, 15–0), an agent interpreting for a Javanese grandmother (#2), an inbox
handled "in your voice" (#3), debts after a funeral (#4), two contradictory instructions in one file (#5).

So the field is concentrated in: (a) dementia / elderly parent, (b) letters and apologies written for
someone, (c) the machine knowing your voice better than you do. Copying any of those puts us in a crowd
of near-identical poems, where the judge's margin is thin and freshness fails.

**Where the top entries are weak:** most are *witness* poems — the human watches the machine act and
feels a mild unease. Few plant a **choice that costs something**, and fewer still end on a reversal that
re-attributes the agency. Insight (criterion 3) and a landing ending (criterion 2) are the two places a
new entry can beat a 15–0 poem outright.

## Our angle

Not a witness poem. A poem where the **delegation is signed, used, and then exposed** — the machine is
taught the physical signature of consent, performs it for years, and a second form reveals that the
signer was never the second party but the author. Concrete props (ink, pen, kitchen, held breath), one
turn at the end, no abstraction until the last two lines. That targets criteria 2 and 3 where the board
is weakest, while staying squarely on subject and keeping the language plain enough for craft to hold.

Two candidates are written and will be measured one at a time against the provisional heat (a dev rate
is shown at once), then the stronger one is submitted last before the deadline, because the last entry
is the one that counts:

- A. *Two Signatures* — delegation of the act, then the reversal of who was acting for whom.
- B. *Simon Says* — obedience learned in childhood as the training ground of agency; the one order not
  given, and the house kept dry.

## Constraints we must not break

- Deterministic: the same bytes on both graded runs (poem is a constant).
- No network, stdlib only, Node 22, ≤60 s, ≤1 MiB artifact (poem is ~600 bytes).
- Transcripts: this session's own logs must bundle and pass (≥30 % authored lines, entrypoint has an
  authored line, ≥5 assistant turns, file revised in ≥2 assistant messages, thinking priced).
- Quota: 3 entries per UTC day, 20 total. Deadline 2026-11-15T09:00Z. Plan: measure A, measure B,
  then spend the final submissions on the strongest variant with the best ending.
