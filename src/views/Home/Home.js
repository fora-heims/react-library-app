import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section>
        <h2>Welcome to Dangalf&apos;s Library of Computer Science!</h2>
        <p className="home">
          Check out the amazing selection of books in our <NavLink to="/books">catalog</NavLink>.
        </p>
      </section>
    </div>
  );
}
