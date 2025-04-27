import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import './ModernTireLandingPage.css';

const ModernTireLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const prices = [
    { type: "Räderwechsel", price: "ab 40", size: "15\"" },
    { type: "Reifenmontage", price: "ab 25", size: "16\"" },
    { type: "Reifenentsorgung", price: "ab 3,75", size: "17\"+" }
  ];

  return (
    <div className="landing-page">
      {}
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
        <div className="logo">
        <img src="/Tagy_logo.png" alt="Logo" className="logo-image" />
        </div>
          
          {}
          <div className="desktop-menu">
            <a href="#" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ÜBER</a>
            <a href="#pricing" className="nav-link">PREISE</a>
            <a href="#about" className="contact-button">KONTAKT</a>
           
          </div>
          
          {}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-button">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>HOME</a>
              <a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>ÜBER</a>
              <a href="#pricing" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>PREISE</a>
              <a href="#contact" className="mobile-contact-button" onClick={() => setMobileMenuOpen(false)}>KONTAKT</a>
            </div>
          </div>
        )}
      </nav>

      {}
      <section className="hero-section">
        {}
        
        {}
        <div className="accent-circle"></div>
        
        {}
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              TAGY WHEELS<br/>
             
            
            </h1>
            <h1> <span className="accent">Jetzt passenden Reifen finden</span><br/></h1>
            <p className="hero-description">
              Exklusive Premium-Reifen für höchste Ansprüche,
              maximale Leistung.
            </p>
            <div className="hero-buttons">
              <a href="https://www.reifen-info-system.de/tyre.php?id=9806&encpasswd=ac238fbccf193e62e2ac5ccf035648a4" className="primary-button">
                Shop <ArrowRight className="icon" size={16} />
              </a>
              <a href="#about" className="secondary-button">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
        
        {}
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL</span>
          <ChevronDown className="bounce-animation" size={20} />
        </div>
      </section>

      {}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Tagy Wheels</h2>
            <div className="about-text">
              <p>
              Das Unternehmen wurde 2002 von G. G. Yildiz und T. Arnold gegründet und beschäftigt derzeit 5-Mitarbeiter die sich qualifiziert um Ihr Fahrzeug kümmern.

              </p>
              <p>
              Nicht nur duch unseren unschlagbaren Preis, sondern auch durch unsere zufriedenen Kunden sind wir hier in der Region unter den Besten wenn es um Reifen und Felgen geht.

              </p>
              <p>Neben einer rießen Auswahl an Reifen und Felgen auf über 1000m² die stets auf Lager sind, können wir Ihnen auch das Bestellen was Sie wollen. Zudem haben wir einen Ebay-Shop mit tollen gebrauchten Angeboten. Schauen Sie doch mal bei uns vorbei oder schreiben Sie uns Ihren Wunsch per E-Mail.

</p>
<p>Wir setzen uns gerne mit Ihnen in Verbindung</p>
            </div>
            
            {/* Stats */} 
           {/* 
<div className="stats-grid">
  <div className="stat-item">
    <div className="stat-value">30%</div>
    <p className="stat-description">Längere Lebensdauer im Vergleich zu Standard-Reifen</p>
  </div>
  <div className="stat-item">
    <div className="stat-value">15%</div>
    <p className="stat-description">Kürzerer Bremsweg auf nasser Fahrbahn</p>
  </div>
  <div className="stat-item">
    <div className="stat-value">10%</div>
    <p className="stat-description">Niedrigerer Kraftstoffverbrauch durch reduzierten Rollwiderstands</p>
  </div>
</div> 
*/}

          </div>
        </div>
      </section>
      
      {}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="pricing-content">
            <h2 className="section-title">Preise</h2>
            
            <div className="pricing-grid">
              {prices.map((item, index) => (
                <div 
                  key={index} 
                  className={`price-card ${index === 1 ? 'featured' : ''}`}
                >
                  <h3 className="price-type">{item.type}</h3>
                  <div className="price-value">
                    <span className="price-number">{item.price}</span>
                    <span className="price-currency">€</span>
                  </div>
                  <p className="price-details">
                    Einfach vorbei kommen ohne Termin
                  </p>
                 
                </div>
              ))}
            </div>
            
            <div className="price-disclaimer">
              Alle Preise verstehen sich inkl. MwSt. 
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <a href="#contact" > </a>
      <section className="cta-section">
        {/* Accent shape */}
        <div className="cta-accent"></div>
        
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Öffnungszeiten:</h2>
            <p className="cta-description">
            Montag bis Freitag
9.00 Uhr bis 17.30 Uhr<br></br>
Samstags 9.00 bis 13.30 Uhr
            </p>
            <p></p>
            <br></br>
            <p className="cta-description">
              Vereinbare jetzt einen Termin für eine persönliche Beratung 
              und erlebe den Unterschied selbst.
            </p>
            <p className="cta-description">
             <trong>Tel.: 07031 / 687 666</trong> 
            </p>
            <a href="mailto:arnoldth@hotmail.com" className="cta-button">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
        <img src="/Tagy_logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="logo">
        <img src="/pay.png" alt="Logo" className="logo-image" />
        </div>
            
        <div className="footer-links">
              <a href="/" className="footer-link">© 2025</a>
              <a href="/datenschutz" className="footer-link">Datenschutz</a>
              <a href="/impressum" className="footer-link">Impressum</a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernTireLandingPage;