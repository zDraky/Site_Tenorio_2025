import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("129sA1ATIpeM1a5Az");

export function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceCount, setServiceCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // --- Funções de notificação (Toast) ---
  const showNotification = (message, type = "info") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  // --- Contador de serviços ---
  const handleServiceChange = () => {
    if (!formRef.current) return;
    const count = formRef.current.querySelectorAll(
      'input[name="services"]:checked'
    ).length;
    setServiceCount(count);
  };

  // --- Formatação de telefone ---
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 11)
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    else if (value.length >= 7)
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    else if (value.length >= 3)
      value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    e.target.value = value;
  };

  // --- Criar mensagem para WhatsApp ---
  const createWhatsAppMessage = (name, phone, email, address, services, message) =>
    `🧽 *SOLICITAÇÃO DE ORÇAMENTO - KR PRIME CLEAN*\n\n` +
    `👤 *Nome:* ${name}\n📱 *Telefone:* ${phone}\n📧 *Email:* ${email}\n📍 *Endereço:* ${address}\n\n` +
    `🛋️ *Serviços Desejados:*\n${services}\n\n💬 *Observações:*\n${message || "Nenhuma observação adicional"}`;

  // --- Envio do formulário ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const message = formData.get("message");

    const selectedServices = [];
    formRef.current
      .querySelectorAll('input[name="services"]:checked')
      .forEach((checkbox) => selectedServices.push(checkbox.value));
    const servicesText =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "Nenhum serviço específico selecionado";

    // Fallback para WhatsApp se EmailJS não estiver disponível
    if (!emailjs) {
      showNotification(
        "⚠️ Sistema de email temporariamente indisponível. Redirecionando para WhatsApp...",
        "warning"
      );
      const whatsappMessage = createWhatsAppMessage(
        name,
        phone,
        email,
        address,
        servicesText,
        message
      );
      setTimeout(() => {
        window.open(
          `https://wa.me/5511944993638?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
        setIsSubmitting(false);
      }, 1500);
      return;
    }

    const ownerTemplateParams = {
      from_name: name,
      phone,
      from_email: email,
      address,
      services: servicesText,
      message: message || "Nenhuma observação adicional",
      date: new Date().toLocaleString("pt-BR"),
    };

    const clientTemplateParams = {
      client_name: name,
      client_email: email,
      services: servicesText,
      company_name: "KR Prime Clean",
      company_phone: "(11) 94499-3638",
      company_email: "contato@krprimeclean.com",
      date: new Date().toLocaleString("pt-BR"),
    };

    emailjs
      .send("service_zr1r8af", "template_yl4xc5h", ownerTemplateParams)
      .then(() =>
        emailjs.send("service_zr1r8af", "template_1g8vipp", clientTemplateParams)
      )
      .then(() => {
        showNotification("✅ Solicitação enviada com sucesso!", "success");
        formRef.current.reset();
        setServiceCount(0);
      })
      .catch(() => {
        showNotification("⚠️ Falha no envio de emails. Abrindo WhatsApp...", "warning");
        const whatsappMessage = createWhatsAppMessage(
          name,
          phone,
          email,
          address,
          servicesText,
          message
        );
        window.open(
          `https://wa.me/5511944993638?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Solicite seu orçamento gratuito e agende seu serviço</p>
        </div>

        <div className="contact-content">
          {/* --- Informações de Contato --- */}
          <div className="contact-info">
            <h3>Informações de Contato</h3>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Telefone/WhatsApp</h4>
                <p>(11) 94499-3638</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>E-mail</h4>
                <p>krprimeclean@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Endereço</h4>
                <p>
                  Rua Antonio de Souza Delmundo, 276
                  <br />
                  Atendimento Domiciliar
                </p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-instagram"></i>
              <div>
                <h4>Instagram</h4>
                <p>@krprime_clean</p>
              </div>
            </div>

            <div className="contact-buttons">
              <a
                href="https://wa.me/5511944993638"
                className="btn btn-whatsapp"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i> Chamar no WhatsApp
              </a>
              <a href="mailto:krprimeclean@gmail.com" className="btn btn-email">
                <i className="fas fa-envelope"></i> Enviar E-mail
              </a>
            </div>
          </div>

          {/* --- Formulário --- */}
          <div className="contact-form">
            <h3>Solicitar Orçamento</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Rua, número, bairro, cidade"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              {/* Serviços */}
              <div className="form-group">
                <label htmlFor="services">Serviços Desejados</label>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Limpeza de Sofás"
                      onChange={handleServiceChange}
                    />
                    <span>Limpeza de Sofás</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Limpeza de Tapetes"
                      onChange={handleServiceChange}
                    />
                    <span>Limpeza de Tapetes</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Higienização de Colchões"
                      onChange={handleServiceChange}
                    />
                    <span>Higienização de Colchões</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Impermeabilização"
                      onChange={handleServiceChange}
                    />
                    <span>Impermeabilização</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Carrinho de Bebê"
                      onChange={handleServiceChange}
                    />
                    <span>Carrinho de Bebê</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="services"
                      value="Cortinas e Persianas"
                      onChange={handleServiceChange}
                    />
                    <span>Cortinas e Persianas</span>
                  </label>
                </div>
                <div className="services-counter">
                  {serviceCount > 0
                    ? `${serviceCount} serviço(s) selecionado(s)`
                    : "Selecione os serviços desejados"}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Observações</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Descreva detalhes sobre o serviço desejado..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Solicitar Orçamento Gratuito"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- Toasts --- */}
      <div className="notification-container" style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`notification notification-${n.type}`}
            style={{
              background:
                n.type === "success"
                  ? "#4CAF50"
                  : n.type === "warning"
                  ? "#FF9800"
                  : "#2196F3",
              color: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              marginBottom: "10px",
              maxWidth: "400px",
              animation: "slideIn 0.3s ease-out",
            }}
          >
            {n.message}
          </div>
        ))}
      </div>
    </section>
  );
}
