import { useState } from "react";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src="./src/assets/LogoKRSimbol.png"
              alt="KR PRIME CLEAN Logo"
              className="logo-img"
            />
            <div className="logo-text">
              <h1>KR PRIME CLEAN</h1>
              <p>Excelência em Limpeza, Confiança em Cada Detalhe</p>
            </div>
          </div>

          <ul className="nav-menu">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>

          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
