import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';

function App() {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
