import ColchaoLimpoVideo from "../assets/PlayColchaoLimpo.mp4";
import PlayLimpandoSofaVideo from "../assets/PlayLimpandoSofa.mp4";
import PlayLimpandoTapeteVideo from "../assets/PlayLimpandoTapete.mp4";
import PrintSofaLimpo from "../assets/PrintSofaLimpo.jpeg";

export function CleanUp() {
  return (
    <section id="practice" className="before-after">
      <div className="container">
        <div className="practice-header">
          <h2>Mostrando na Prática</h2>
          <p>
            Veja nossos profissionais em ação durante os serviços de limpeza
          </p>
        </div>

        <div className="practice-content">
          <div className="practice-intro">
            <div className="intro-text">
              <h3>Transparência Total no Nosso Trabalho</h3>
              <p>
                Acreditamos que a melhor forma de demonstrar nossa qualidade é
                mostrando nosso trabalho em ação. Aqui você pode acompanhar
                nossos profissionais durante o processo de limpeza, desde a
                preparação até o resultado final.
              </p>
              <div className="intro-features">
                <div className="intro-feature">
                  <i className="fas fa-eye"></i>
                  <span>Processo Transparente</span>
                </div>
                <div className="intro-feature">
                  <i className="fas fa-tools"></i>
                  <span>Equipamentos Profissionais</span>
                </div>
                <div className="intro-feature">
                  <i className="fas fa-star"></i>
                  <span>Técnicas Especializadas</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img
                src={PrintSofaLimpo}
                alt="Profissional da KR PRIME CLEAN em ação"
              />
              <div className="image-overlay">
                <i className="fas fa-play-circle"></i>
                <span>Veja os vídeos abaixo</span>
              </div>
            </div>
          </div>

          <div className="videos-grid">
            <div className="video-card">
              <div className="video-container">
                <video controls preload="metadata" poster={PrintSofaLimpo}>
                  {" "}
                  <source src={ColchaoLimpoVideo} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
              <div className="video-info">
                <h4>Limpeza e Higienização de Colchões</h4>
                <p>
                  Veja como removemos ácaros, bactérias e manchas, deixando seu
                  colchão renovado.
                </p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-container">
                <video controls preload="metadata" poster={PrintSofaLimpo}>
                  {" "}
                  <source src={PlayLimpandoSofaVideo} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
              <div className="video-info">
                <h4>Processo de Limpeza Profunda de Sofá</h4>
                <p>
                  Acompanhe nossa técnica especializada de higienização profunda
                  de estofados.
                </p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-container">
                <video controls preload="metadata" poster={PrintSofaLimpo}>
                  {" "}
                  {/* Usando a imagem de poster */}
                  <source src={PlayLimpandoTapeteVideo} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
              <div className="video-info">
                <h4>Limpeza e Restauração de Tapetes</h4>
                <p>
                  Conheça o processo que remove sujeira e revitaliza as cores do
                  seu tapete.
                </p>
              </div>
            </div>

            {/* Exemplo de quarto vídeo (se tiver PlayLimpandoTapeteRed.mp4 ou outro)
                Você pode adicionar mais um vídeo aqui se quiser ter 4 no grid.
            <div className="video-card">
              <div className="video-container">
                <video controls preload="metadata" poster={PrintSofaLimpo}>
                  <source src={PlayLimpandoTapeteRedVideo} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
              <div className="video-info">
                <h4>Outro Serviço em Destaque</h4>
                <p>Descrição do quarto vídeo de demonstração.</p>
              </div>
            </div>
            */}
          </div>

          <div className="practice-cta">
            <div className="cta-content">
              <h3>Impressionado com Nosso Trabalho?</h3>
              <p>
                Agende agora mesmo seu serviço e tenha a mesma qualidade
                profissional em sua casa!
              </p>
              <div className="cta-buttons">
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
                  {" "}
                  <i className="fab fa-whatsapp"></i>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
