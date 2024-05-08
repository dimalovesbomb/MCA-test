import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer';

import './globals.css';
import './styles.css';

export default function App() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Header />
      <Outlet />
      <AudioPlayer className="sticky bottom-0" />
    </div>
  );
}
