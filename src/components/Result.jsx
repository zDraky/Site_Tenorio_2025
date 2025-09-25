export function Result() {

  return (
  <section className="before-after">
      <div className="container">
        <div className="section-header">
          <h2>Resultados que Impressionam</h2>
          <p>Veja a transformação que nossos serviços proporcionam</p>
        </div>

        <div className="before-after-grid">
          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img
                  src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sofá antes da limpeza"
                />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img
                  src="https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sofá depois da limpeza"
                />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Sofá</h3>
          </div>

          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img
                  src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Tapete antes da limpeza"
                />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img
                  src="https://images.pexels.com/photos/6585748/pexels-photo-6585748.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Tapete depois da limpeza"
                />
                <span className="label">DEPOIS</span>
              </div>
            </div>
            <h3>Limpeza de Tapete</h3>
          </div>

          <div className="before-after-item">
            <div className="image-comparison">
              <div className="before">
                <img
                  src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Poltrona antes da limpeza"
                />
                <span className="label">ANTES</span>
              </div>
              <div className="after">
                <img
                  src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Poltrona depois da limpeza"
                />
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
