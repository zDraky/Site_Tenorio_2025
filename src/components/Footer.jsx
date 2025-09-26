export function Footer() {

  return (
     <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="./src/assets/LogoKR.png" alt="KR PRIME CLEAN" />
              <div>
                <h3>KR PRIME CLEAN</h3>
                <p>Excelência em Limpeza, Confiança em Cada Detalhe</p>
              </div>
            </div>
            <p>
              Especialistas em limpeza, higienização e impermeabilização de
              estofados. Atendimento domiciliar com qualidade profissional.
            </p>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#services">Limpeza de Sofás</a></li>
              <li><a href="#services">Limpeza de Tapetes</a></li>
              <li><a href="#services">Higienização de Colchões</a></li>
              <li><a href="#services">Impermeabilização</a></li>
              <li><a href="#services">Carrinho de Bebê</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li><i className="fas fa-phone"></i> (11) 94499-3638</li>
              <li><i className="fas fa-envelope"></i> krprimeclean@gmail.com</li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Rua Antonio de Souza
                Delmundo, 276
              </li>
              <li><i className="fab fa-instagram"></i> @krprime_clean</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Garantias</h4>
            <ul>
              <li>✓ Garantia de Satisfação</li>
              <li>✓ Proteção por 12 meses</li>
              <li>✓ Produtos Seguros</li>
              <li>✓ Pontualidade Garantida</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 KR PRIME CLEAN. Todos os direitos reservados.</p>
            <p>CNPJ: 55.237.233/0001-02</p>
          </div>
          <div className="footer-social">
            <a href="https://wa.me/5511944993638" target="_blank"
              ><i className="fab fa-whatsapp"></i
            ></a>
            <a href="https://instagram.com/krprime_clean" target="_blank"
              ><i className="fab fa-instagram"></i
            ></a>
            <a href="mailto:krprimeclean@gmail.com"
              ><i className="fas fa-envelope"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
