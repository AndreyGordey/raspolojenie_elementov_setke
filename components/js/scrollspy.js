// Получаем все ссылки и секции
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Функция для обновления активной ссылки
function updateActiveLink() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60; // Отступ для фиксированной навигации
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', updateActiveLink);
