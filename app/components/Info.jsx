'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Info() {
  return (
    <>
      <h1>Hello World !</h1>
      <p>
        My name is Marcus and I&apos;m a{' '}
        <span>
          <Typewriter words={['Developer', 'Designer']} loop />{' '}
        </span>
      </p>
    </>
  );
}
