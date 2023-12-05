function validateForm() {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageTextarea = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Сброс предыдущих классов с красной рамкой
    nameInput.classList.remove("form-error");
    emailInput.classList.remove("form-error");
    messageTextarea.classList.remove("form-error");

    // Проверка введенных данных
    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("form-error");
      nameInput.setAttribute('placeholder', 'Обязательное поле');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add("form-error");
      emailInput.setAttribute('placeholder', 'Обязательное поле');
      isValid = false;
    }

    if (messageTextarea.value.trim() === "") {
      messageTextarea.classList.add("form-error");
      messageTextarea.setAttribute('placeholder', 'Обязательное поле');
      isValid = false;
    }

    // Если валидация успешна, вывести данные в консоль
    if (isValid) {
      console.log("Имя:", nameInput.value);
      console.log("Email:", emailInput.value);
      console.log("Сообщение:", messageTextarea.value);
      (nameInput.value = ""),
        (emailInput.value = ""),
        (messageTextarea.value = "");
    }
  });
}
export default validateForm;
