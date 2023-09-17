'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Info({ h1, p, words }) {
  return (
    <section>
      <h1>{h1}</h1>
      <p>
        {p}
        <span>
          <Typewriter words={words} loop />{' '}
        </span>
      </p>
    </section>
  );
}
