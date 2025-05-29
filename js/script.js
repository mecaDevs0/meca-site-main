document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");

  let menuVisible = false;

  btnMenu.addEventListener("click", () => {
    if (!menuVisible) {
      menu.style = "transform: translateX(0px)";
      menuVisible = true;
    } else {
      menu.style = "transform: translateX(-500px)";
      menuVisible = false;
    }
  });

  const form = document.querySelector(".section-form");

  const fields = {
    fullName: document.getElementById("fullName"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    description: document.getElementById("description"),
  };

  const errors = {
    fullName: document.getElementById("error-fullName"),
    phone: document.getElementById("error-phone"),
    email: document.getElementById("error-email"),
    description: document.getElementById("error-description"),
  };

  function clearErrors() {
    Object.values(errors).forEach((el) => (el.textContent = ""));
    Object.values(fields).forEach((el) => el.classList.remove("invalid"));
  }

  function validate() {
    clearErrors();
    let isValid = true;

    const fullName = fields.fullName.value.trim();
    const phone = fields.phone.value.trim().replace(/\D/g, "");
    const email = fields.email.value.trim();
    const description = fields.description.value.trim();

    if (!fullName) {
      errors.fullName.textContent = "O nome completo é obrigatório.";
      fields.fullName.classList.add("invalid");
      isValid = false;
    }

    if (!phone || phone.length < 10) {
      errors.phone.textContent = "Telefone inválido (mínimo 10 dígitos).";
      fields.phone.classList.add("invalid");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      errors.email.textContent = "E-mail inválido.";
      fields.email.classList.add("invalid");
      isValid = false;
    }

    if (!description) {
      errors.description.textContent = "A descrição é obrigatória.";
      fields.description.classList.add("invalid");
      isValid = false;
    }

    return isValid;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validate()) return;

    setLoadingButton(true);

    const data = {
      fullName: fields.fullName.value.trim(),
      phone: fields.phone.value.trim(),
      email: fields.email.value.trim(),
      description: fields.description.value.trim(),
    };

    try {
      const response = await fetch(
        "https://apidev.megaleios.com/ApiMecaDev/api/v1/Profile/SendEmailRequestingAppHelp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar os dados.");

      setLoadingButton(false);
      showSuccessToast("Mensagem enviada com sucesso!");
      form.reset();
      clearErrors();
    } catch (error) {
      setLoadingButton(false);
      showErrorToast("Ocorreu um erro ao enviar a mensagem. " + error.message);
    }
  });

  function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(type === "success" ? "toast-success" : "toast-error");
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  function showSuccessToast(message) {
    showToast(message, "success");
  }

  function showErrorToast(message) {
    showToast(message, "error");
  }

  function setLoadingButton(isLoading) {
    const button = document.getElementById("submitBtn");
    const text = button.querySelector(".btn-text");
    const loader = button.querySelector(".btn-loader");

    if (isLoading) {
      text.textContent = "Enviando...";
      loader.hidden = false;
      button.disabled = true;
    } else {
      text.textContent = "Enviar";
      loader.hidden = true;
      button.disabled = false;
    }
  }

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
});
