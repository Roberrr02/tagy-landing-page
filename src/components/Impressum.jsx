import React from 'react';
import './LegalPages.css';

const Impressum = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Impressum</h1>
        
        <div className="legal-content">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            TAGY Wheels GbR<br />
            Schwertstr. 3/1<br />
            71065 Sindelfingen
          </p>
          
          <h2>Kontakt</h2>
          <p>
            Tel.: 07031 / 687 666<br />
            E-Mail: arnoldth@hotmail.com<br />
            E-Mail: tagy01@hotmail.com
          </p>
          
          <h2>Vertreten durch</h2>
          <p>
            Thomas Arnold, Geschäftsführer<br></br>
            Gökmen G. Yildiz, Geschäftsführer
          </p>
          
          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Autostadt<br />
            Registernummer: HRB 12345
          </p>
          
          <h2>Steuernummer.: </h2>
          <p>
        <br />
            DE 228342490
          </p>
          
          
          
          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          
          <div className="legal-nav">
            <a href="/" className="back-button">Zurück zur Startseite</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;