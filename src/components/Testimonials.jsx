export function Testimonials() {
  // variáveis com os links
  const mariaImg =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200";
  const anaImg =
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200";
  const joaoImg =
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200";

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>O que Nossos Clientes Dizem</h2>
          <p>Depoimentos reais de quem confia na KR PRIME CLEAN</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "A experiência foi incrível! O agendamento foi rápido, a equipe
                chegou no horário combinado e realizou a limpeza de forma muito
                cuidadosa. Além de eliminar manchas antigas, ainda aplicaram a
                impermeabilização que protege o tecido."
              </p>
            </div>
            <div className="testimonial-author">
              <img src={mariaImg} alt="Cliente satisfeita" />
              <div>
                <h4>Maria Silva</h4>
                <span>Cliente Residencial</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "Achei que teria que trocar meu sofá por conta das manchas e do
                cheiro, mas a equipe conseguiu recuperar totalmente. Além de
                muito profissionais, foram atenciosos em cada detalhe. Estou
                muito satisfeita e com certeza voltarei a contratar."
              </p>
            </div>
            <div className="testimonial-author">
              <img src={anaImg} alt="Cliente satisfeita" />
              <div>
                <h4>Ana Costa</h4>
                <span>Cliente Residencial</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "Contratei a impermeabilização para meu sofá e poltronas, e
                fiquei impressionado com a qualidade. A equipe foi muito
                atenciosa, explicou todo o processo e o resultado é visível.
                Agora tenho mais tranquilidade no dia a dia."
              </p>
            </div>
            <div className="testimonial-author">
              <img src={joaoImg} alt="Cliente satisfeito" />
              <div>
                <h4>João Ramos</h4>
                <span>Cliente Comercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
