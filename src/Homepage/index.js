import React from 'react';
import Footer from '../Footer';
import Search from '../Search';
import './style.css';

export default function Homepage() {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Ballot drop box finder</h1>
          <p className="hero-subtitle">Find a secure ballot drop box in your community to safely vote for Sean Casten and other Democrats up and down the ballot.</p>
          <Search />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
