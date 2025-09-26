import { useState, useEffect } from "react";
import LogoKRSimbol from "../assets/LogoKRSimbol.png"

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  const closeMenu = () => setIsActive(false);

  const handleScrollLink = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMenu(); // fecha menu ao clicar
  };

  // Efeito de scroll no header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src={LogoKRSimbol}
              alt="KR PRIME CLEAN Logo"
              className="logo-img"
            />
            <div className="logo-text">
              <h1>KR PRIME CLEAN</h1>
              <p>Excelência em Limpeza, Confiança em Cada Detalhe</p>
            </div>
          </div>

          {/* Menu */}
          <ul className={`nav-menu ${isActive ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={handleScrollLink}>
                Início
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleScrollLink}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleScrollLink}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#practice" onClick={handleScrollLink}>
                Na Prática
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleScrollLink}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScrollLink}>
                Contato
              </a>
            </li>
          </ul>

          {/* Botão hambúrguer */}
          <div
            className={`nav-toggle ${isActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
