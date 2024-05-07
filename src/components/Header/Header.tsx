import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="pt-8">
      <Link to="/">
        <h1 className="text-2xl ml-4 mb-2 text-primary-blue">Podcaster</h1>
      </Link>
      <hr />
    </header>
  );
};
