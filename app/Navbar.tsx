import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='space-x-2'>
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
};

export default Navbar;
