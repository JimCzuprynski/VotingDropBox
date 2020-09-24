import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="faq">
          <h3>What is a secure ballot dropbox?</h3>
          <p>
          All across the Illinois 6th Congressional District, cities and towns are installing dropboxes where voters can return their completed ballots that they received in the mail. 
          If you requested and received a mail-in ballot, returning your ballot via a dropbox in your community is a safe and secure way to make sure that your vote is counted. 
          Please make sure to first complete your ballot (vote for Sean!) and put it in the signed yellow envelope and white return envelope.
          </p>
        </div>
        <p className="footnote">
        We'll be updating this directory frequently. Please use this tool to search for the location of the ballot drop boxes in your community. 
        You can only drop off your ballot in a dropbox in your own community. Please be advised that you cannot drop off your ballot at a polling place, 
        only a secure dropbox or your local election office.
        </p>
        <p className="footnote">If you have more questions about voting, visit <a href="https://castenforcongress.com/vote-by-mail-form/">castenforcongress.com/vote</a>. 
        Voter helpdesk: vote@castenforcongress.com, 
        Voter protection hotline: (224) 555-1212
        </p>
      </div>
      <span className="disclaimer">paid for by casten for congress</span>
    </footer>
  );
}
