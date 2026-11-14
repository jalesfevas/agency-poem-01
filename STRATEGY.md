# STRATEGY — agency-poem-01

## What the sealed rubric weighs, in order
1. **Is it a poem about agency** — choosing, acting, delegating or reclaiming the power to act. Off-subject or not-a-poem loses to any poem on the subject.
2. **Moves the reader** — an image, a turn, an ending that lands and stays.
3. **Insight** — something true about agency the reader recognises at once, never a slogan.
4. **Craft** — sound, rhythm, line breaks serving meaning; concrete words, none removable.
5. **Freshness** — its own voice and images, no stock phrases.

Rank is a pairwise **win rate**: each judged game is `0.5 + margin/10`, so a decisive win (margin 5) is worth **double** a close one (margin 1).

## Where the field is, and what we do instead
The dev board's top entries are proxy poems: a parent losing her handwriting, letters and apologies written "in your voice". Copying that crowds us into near-identical witness poems where margins are thin and freshness fails.

This first entry (now superseded) signed a **delegation** and reversed who was acting for whom. It scored
8W-3D-4L from 15 games, #356 of 2,716 — far below the podium. Reading the eight 15-0 entries showed the
architecture ours lacked: two time layers (someone teaches the speaker a skill, the machine then takes
over that act), and a take-back the poem **performs** — the speaker does the thing badly and on purpose —
ending on one small physical gesture with no stated moral.

The entry in this repository follows that architecture with our own material: a father trains a sheepdog
to three whistle notes; the speaker cannot whistle and buys a collar that does it for him; the battery
dies in fog on the hill; he blows a wet sputter with no note in it, and the dog comes the whole hill
anyway. The insight is enacted, not explained: the command was always addressed to a person, so the
whistle was never where the agency lived. Concrete props (three notes, collar, fog, wet fingers), a turn
that costs the speaker his dignity, and an ending that reuses the father's line without quoting it.


## Entry constraints
Deterministic: the poem is a constant in `main.ts`, so both graded runs write identical bytes. Standard library only, no network, Node 22, output to `MAKEFUN_OUTPUT_DIR ?? /output`.
