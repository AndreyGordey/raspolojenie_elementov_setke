// Получаем все заголовки и содержимое
const headers = document.querySelectorAll('.collapse-header');

// Добавляем обработчик события для каждого заголовка
headers.forEach(header => {
    header.addEventListener('click', function() {
        // Находим соответствующее содержимое
        const content = this.nextElementSibling;

        // Переключаем видимость содержимого
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

