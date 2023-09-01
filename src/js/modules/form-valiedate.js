

function validateForm() {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageTextarea = document.getElementById('message');
  const submitButton = document.getElementById('submit');

  form.addEventListener('submit', function (e) {
    e.preventDefault()
      // Сброс предыдущих классов с красной рамкой
      nameInput.classList.remove('form-error');
      emailInput.classList.remove('form-error');
      messageTextarea.classList.remove('form-error');

      // Проверка введенных данных
      let isValid = true;

      if (nameInput.value.trim() === '') {
          nameInput.classList.add('form-error');
          isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
          emailInput.classList.add('form-error');
          isValid = false;
      }

      if (messageTextarea.value.trim() === '') {
          messageTextarea.classList.add('form-error');
          isValid = false;
      }

      // Если валидация успешна, вывести данные в консоль
      if (isValid) {
        nameInput.value = '',
        emailInput.value='',
        messageTextarea.value =''
        
          console.log('Имя:', nameInput.value);
          console.log('Email:', emailInput.value);
          console.log('Сообщение:', messageTextarea.value);
      }
  });
  
}
export default validateForm;