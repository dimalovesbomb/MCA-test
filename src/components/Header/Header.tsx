import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BackButton } from '../BackButton';
import { cn } from '../../helpers';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldRenderBackButton = location.pathname !== '/';
  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <header className="pt-8">
      <div className="flex items-center mb-2">
        <BackButton
          onClick={onBackButtonClick}
          fillColor="#252659"
          className={cn({ invisible: !shouldRenderBackButton }, 'ml-2')}
        />
        <Link to="/" className="ml-6">
          <h1 className="text-2xl text-primary-blue">Podcaster</h1>
        </Link>
      </div>
      <hr />
    </header>
  );
};
