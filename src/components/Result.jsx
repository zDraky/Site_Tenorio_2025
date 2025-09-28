import ColchaoAntes from "../assets/ColchaoAntes.jpg";
import ColchaoDepois from "../assets/ColchaoDepois.jpeg";
import RackAntes from "../assets/RackAntes.jpeg";
import RackDepois from "../assets/RackDepois.jpeg";
import SofaAntes from "../assets/SofaAntes.jpeg";
import SofaDepois from "../assets/SofaDepois.jpeg";

export function Result() {
  return (
    <section className="before-after">
      <div className="container">
        <div className="section-header">
          <h2>Resultados que Impressionam</h2>
          <p>Veja a transformação que nossos serviços proporcionam</p>
        </div>

        <div className="before-after-grid">
          {/* Sofá */}
          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img src={SofaAntes} alt="Sofá antes da limpeza" />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img src={SofaDepois} alt="Sofá depois da limpeza" />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Sofá</h3>
          </div>

          {/* Tapete */}
          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img src={RackAntes} alt="Rack antes da limpeza" />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img src={RackDepois} alt="Rack depois da limpeza" />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Rack</h3>
          </div>

          {/* Colchao */}
          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img src={ColchaoAntes} alt="Colchao antes da limpeza" />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img src={ColchaoDepois} alt="Poltrona depois da limpeza" />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Colchao</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
