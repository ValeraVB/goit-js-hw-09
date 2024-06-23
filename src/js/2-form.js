document.addEventListener('DOMContentLoaded', function () {
  const formData = {
    email: '',
    message: '',
  };

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Перевіряємо локальне сховище при завантаженні сторінки
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  // Слухаємо події input для зберігання даних в локальне сховище
  form.addEventListener('input', function (evt) {
    const { name, value } = evt.target;
    formData[name] = value.trim(); // обрізаємо пробіли з початку і кінця
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  // Обробляємо подію submit форми
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // Перевіряємо, чи заповнені обидва поля форми
    if (formData.email && formData.message) {
      console.log(formData); // Виводимо formData в консоль
      localStorage.removeItem('feedback-form-state'); // Очищаємо локальне сховище
      form.reset(); // Скидаємо значення полів форми
      formData.email = '';
      formData.message = '';
    } else {
      alert('Будь ласка, заповніть обидва поля');
    }
  });
});
