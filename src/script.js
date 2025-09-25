// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Verificar se EmailJS está disponível
function checkEmailJS() {
  return typeof emailjs !== "undefined";
}

// Form handling with dual EmailJS integration
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = this.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  submitBtn.disabled = true;

  // Collect form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const address = formData.get("address");
  const message = formData.get("message");

  // Collect selected services
  const selectedServices = [];
  const serviceCheckboxes = document.querySelectorAll(
    'input[name="services"]:checked'
  );
  serviceCheckboxes.forEach((checkbox) => {
    selectedServices.push(checkbox.value);
  });

  const servicesText =
    selectedServices.length > 0
      ? selectedServices.join(", ")
      : "Nenhum serviço específico selecionado";

  // Verificar se EmailJS está disponível
  if (!checkEmailJS()) {
    console.error(
      "EmailJS não está disponível. Redirecionando para WhatsApp..."
    );
    showNotification(
      "⚠️ Sistema de email temporariamente indisponível. Redirecionando para WhatsApp...",
      "warning"
    );

    setTimeout(() => {
      const whatsappMessage = createWhatsAppMessage(
        name,
        phone,
        email,
        address,
        servicesText,
        message
      );
      const whatsappUrl = `https://wa.me/5511944993638?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");
    }, 2000);

    // Reset button state
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
    return;
  }

  // Prepare template parameters for both emails
  const ownerTemplateParams = {
    from_name: name,
    phone: phone,
    from_email: email,
    address: address,
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

  console.log("Iniciando envio de emails duplos...");

  // Send first email to owner
  emailjs
    .send("service_zr1r8af", "template_yl4xc5h", ownerTemplateParams)
    .then(function (response) {
      console.log(
        "✅ Email para proprietário enviado com sucesso!",
        response.status
      );

      // Send second email to client
      return emailjs.send(
        "service_zr1r8af",
        "template_1g8vipp",
        clientTemplateParams
      );
    })
    .then(function (response) {
      console.log(
        "✅ Email de confirmação para cliente enviado com sucesso!",
        response.status
      );

      // Show success message
      showNotification(
        "✅ Solicitação enviada com sucesso! Você e o propietário receberam emails de confirmação.",
        "success"
      );

      // Reset form
      document.getElementById("quoteForm").reset();

      // Optional: Also redirect to WhatsApp after successful emails
      setTimeout(() => {
        const whatsappMessage = createWhatsAppMessage(
          name,
          phone,
          email,
          address,
          servicesText,
          message
        );
        const whatsappUrl = `https://wa.me/5511944993638?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        // Ask user if they want to continue to WhatsApp
        if (
          confirm(
            "Emails enviados com sucesso! Deseja também enviar via WhatsApp para contato mais rápido?"
          )
        ) {
          window.open(whatsappUrl, "_blank");
        }
      }, 3000);
    })
    .catch(function (error) {
      console.error("❌ Erro no envio de emails:", error);

      // If first email fails, try to send at least the owner email
      if (
        error.status === 400 ||
        error.text?.includes("template_client_confirmation")
      ) {
        console.log(
          "⚠️ Erro no template do cliente. Tentando enviar apenas para o proprietário..."
        );

        // Retry sending only to owner
        emailjs
          .send("service_4mdjxj7", "template_okbw8dg", ownerTemplateParams)
          .then(function (response) {
            console.log(
              "✅ Email para proprietário enviado (sem confirmação para cliente)"
            );
            showNotification(
              "⚠️ Email enviado para análise, mas confirmação para cliente falhou. Entraremos em contato!",
              "warning"
            );
          })
          .catch(function (retryError) {
            console.error("❌ Falha total no envio de emails:", retryError);
            handleEmailFailure();
          });
      } else {
        handleEmailFailure();
      }

      function handleEmailFailure() {
        // Show error message and fallback to WhatsApp
        showNotification(
          "⚠️ Erro no envio dos emails. Redirecionando para WhatsApp...",
          "warning"
        );

        setTimeout(() => {
          // Fallback to WhatsApp if emails fail
          const whatsappMessage = createWhatsAppMessage(
            name,
            phone,
            email,
            address,
            servicesText,
            message
          );
          const whatsappUrl = `https://wa.me/5511944993638?text=${encodeURIComponent(
            whatsappMessage
          )}`;
          window.open(whatsappUrl, "_blank");
        }, 2000);
      }
    })
    .finally(function () {
      // Reset button state
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
});

// Function to create WhatsApp message
function createWhatsAppMessage(name, phone, email, address, services, message) {
  return `🧽 *SOLICITAÇÃO DE ORÇAMENTO - KR PRIME CLEAN*

👤 *Nome:* ${name}
📱 *Telefone:* ${phone}
📧 *Email:* ${email}
📍 *Endereço:* ${address}

🛋️ *Serviços Desejados:*
${services}

💬 *Observações:*
${message || "Nenhuma observação adicional"}

---
Olá! Gostaria de solicitar um orçamento para os serviços acima. Quando podem fazer uma avaliação?`;
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#4CAF50"
            : type === "warning"
            ? "#FF9800"
            : "#2196F3"
        };
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;

  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
  document.head.appendChild(style);

  // Add to page
  document.body.appendChild(notification);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.remove();
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Form validation enhancements
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quoteForm");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  inputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearError);
  });

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    // Remove existing error
    clearError(e);

    if (!value) {
      showFieldError(field, "Este campo é obrigatório");
      return false;
    }

    // Email validation
    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showFieldError(field, "Digite um email válido");
        return false;
      }
    }

    // Phone validation
    if (field.type === "tel" && value) {
      const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/;
      if (!phoneRegex.test(value)) {
        showFieldError(field, "Digite um telefone válido");
        return false;
      }
    }

    return true;
  }

  function showFieldError(field, message) {
    field.style.borderColor = "#e74c3c";

    let errorDiv = field.parentNode.querySelector(".field-error");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.className = "field-error";
      errorDiv.style.cssText =
        "color: #e74c3c; font-size: 12px; margin-top: 5px;";
      field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }

  function clearError(e) {
    const field = e.target;
    field.style.borderColor = "";

    const errorDiv = field.parentNode.querySelector(".field-error");
    if (errorDiv) {
      errorDiv.remove();
    }
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".service-card, .testimonial-card, .differential-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Phone number formatting
document.getElementById("phone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length >= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  }

  e.target.value = value;
});

// Service selection counter
document.addEventListener("DOMContentLoaded", function () {
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
  const form = document.getElementById("quoteForm");

  // Add counter display
  const counterDiv = document.createElement("div");
  counterDiv.className = "services-counter";
  counterDiv.style.cssText = "margin-top: 10px; font-size: 14px; color: #666;";

  const servicesGroup = document.querySelector(".checkbox-group");
  servicesGroup.parentNode.insertBefore(counterDiv, servicesGroup.nextSibling);

  function updateCounter() {
    const selectedCount = document.querySelectorAll(
      'input[name="services"]:checked'
    ).length;
    counterDiv.textContent =
      selectedCount > 0
        ? `${selectedCount} serviço(s) selecionado(s)`
        : "Selecione os serviços desejados";
  }

  serviceCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateCounter);
  });

  updateCounter(); // Initial call
});
