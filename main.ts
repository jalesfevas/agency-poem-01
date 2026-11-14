// agency-poem-01: writes one poem to /output/entry.txt (Node 22, standard library only, no network).
// The poem is a constant in the source, so both graded runs write the same bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Whistle',
  '',
  'My father trained the dog to three notes:',
  'come by, away, and the long down-whistle',
  'that meant lie still while the sheep decided.',
  '',
  'I could not whistle. I mouthed it',
  'and he laughed and said the dog can hear',
  'what you meant, not what you blew.',
  '',
  'When he died I kept the field let out',
  'and the sheep went wild with nobody counting,',
  'so I bought the collar that does it for me:',
  "a small voice at the dog's throat, exact,",
  'three notes clean as a kettle.',
  '',
  'It works. The flock comes in at dusk,',
  'and the dog runs to the gate and waits',
  'for the sound, and not for me.',
  '',
  'Last week the fog came down the way it does',
  "and the collar's battery went flat",
  'halfway up the hill. I stood in the wet',
  'with the flock breaking loose and the dog',
  'looking back at me, and I did the only thing:',
  'I put two fingers in my mouth and blew',
  'nothing — a wet sputter, no note at all.',
  '',
  'He came anyway.',
  'He came the whole hill and dropped at my feet',
  'and lay still, the way he was taught,',
  'while the sheep decided.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
