const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const rating = document.querySelector("input[name=rating]:checked").value;
  const review = document.getElementById("review").value;

  // Отправить данные отзыва на сервер или сохранить их локально

  alert(`Спасибо, ${name}, за ваш отзыв! Мы ценим вашу обратную связь.`);
});