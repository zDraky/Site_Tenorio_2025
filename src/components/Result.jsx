export function Result() {
  const SofaAntes =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg";
  const SofaDepois =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg";
  const TapeteAntes =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg";
  const TapeteDepois =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200";
  const PoltronaAntes =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg";
  const PoltronaDepois =
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg";
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
                <img src={TapeteAntes} alt="Tapete antes da limpeza" />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img src={TapeteDepois} alt="Tapete depois da limpeza" />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Tapete</h3>
          </div>

          {/* Poltrona */}
          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img src={PoltronaAntes} alt="Poltrona antes da limpeza" />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img src={PoltronaDepois} alt="Poltrona depois da limpeza" />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Poltrona</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
