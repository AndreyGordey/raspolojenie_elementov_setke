const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Устанавливаем активные звезды
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    // Обновляем текст рейтинга
    ratingValue.textContent = index + 1;
  });
});

/* 1. HTML создает структуру компонента с пятью звездами и текстом рейтинга.

2. CSS отвечает за стилизацию звезд, включая эффекты наведения и активного состояния.

3. JavaScript добавляет интерактивность, позволяя пользователю нажимать на звезды для выбора оценки.*/ 