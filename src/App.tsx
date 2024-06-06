import React from 'react';
import { Outlet } from 'react-router-dom';
import { AudioPlayer } from './components/AudioPlayer';

import './globals.css';
import './styles.css';

export default function App() {
  return (
    <div className="max-w-[1100px] mx-auto relative">
      <Outlet />
      <AudioPlayer className="fixed bottom-0 left-0 w-full" />
    </div>
  );
}
