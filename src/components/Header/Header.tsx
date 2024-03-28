import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="header-link">
        <h1 className="header-label">Podcaster</h1>
      </Link>
      <hr />
    </header>
  );
};
