import React from 'react';
import Search from '../Search';
import { useAppContext } from '../AppContext';
import './style.css';

export default function Nav() {
  const { town } = useAppContext();

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="https://edmarkey.com/">
          <img className="logo" src="https://sean-casten-supporter-photos/logo.png" alt="Sean Casten for Congress 2020 logo" />
        </a>
        {!!town && <Search small />}
      </div>
    </nav>
  );
}
