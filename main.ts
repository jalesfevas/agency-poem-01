// agency-poem-01 entry: writes one poem to /output/entry.txt.
// Node 22, standard library only, deterministic: the poem is a constant, so both graded runs write
// the same bytes. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Two Signatures',
  '',
  'The form said: requires two signatures —',
  'mine, and the one who would carry it out.',
  'So I taught it the shape of my yes:',
  'the pressure, the small lift at the end,',
  'the way I stop before the last stroke',
  'to let the ink decide.',
  '',
  'It learned. It signed. The loan closed',
  'and the house was ours, and I stood',
  'in the kitchen hearing a machine be certain',
  'in my own handwriting.',
  '',
  'Years on, the divorce forms came.',
  'Two signatures. It signed first,',
  'then waited, pen above the line,',
  'patient as a held breath —',
  '',
  'and I saw the whole arrangement:',
  'it had never been the second one.',
  'I had.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
