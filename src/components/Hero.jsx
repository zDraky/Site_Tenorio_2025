import LogoKRFundoBranco from "../assets/LogoKRFundoBranco.png";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Excelência em Limpeza</span>
              <br />
              Confiança em Cada Detalhe
            </h1>
            <p className="hero-subtitle">
              Especialistas em limpeza, higienização e impermeabilização de
              sofás, tapetes, colchões e estofados. Atendimento domiciliar com
              qualidade profissional.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-calendar-alt"></i>
                Agendar Serviço
              </a>
              <a
                href="https://wa.me/5511944993638"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="hero-image">
            <img
              src={LogoKRFundoBranco}
              alt="Limpeza profissional de estofados"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="hero-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-home"></i>
              <span>Atendimento Domiciliar</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt"></i>
              <span>Produtos Seguros</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-clock"></i>
              <span>Secagem Rápida</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-medal"></i>
              <span>Garantia de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
