export function About() {

  return (
 <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a KR PRIME CLEAN</h2>
            <p className="about-intro">
              A KR PRIME CLEAN nasceu com um propósito claro: elevar o padrão
              dos serviços de limpeza e conservação, aliando excelência,
              profissionalismo e confiança.
            </p>
            <p>
              Fundada em 2024, surgimos da união de experiência no setor de
              serviços com uma visão moderna e personalizada de atendimento.
              Desde o início, nosso foco foi oferecer soluções de limpeza
              residenciais, comerciais e pós-obra, com qualidade superior e
              equipe altamente treinada.
            </p>
            <p>
              Começamos de forma modesta, atendendo pequenos clientes locais.
              Com o passar do tempo, conquistamos a confiança de empresas,
              condomínios, clínicas, escritórios e residências, graças ao nosso
              compromisso com a pontualidade, eficiência e ética profissional.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3>2024</h3>
                <p>Ano de Fundação</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Clientes Satisfeitos</p>
              </div>
              <div className="stat-item">
                <h3>24h</h3>
                <p>Atendimento Rápido</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Equipe KR PRIME CLEAN"
            />
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-leaf"></i>
                <span>Produtos Ecológicos</span>
              </div>
              <div className="feature">
                <i className="fas fa-tools"></i>
                <span>Equipamentos Modernos</span>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <span>Equipe Qualificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
