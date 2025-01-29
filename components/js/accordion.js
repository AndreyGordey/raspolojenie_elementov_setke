// document.querySelectorAll('.accordion-header').forEach(header => {
//     header.addEventListener('click', () => {
//         const content = header.nextElementSibling;

//         // Закрываем все остальные секции
//         document.querySelectorAll('.accordion-content').forEach(item => {
//             if (item !== content) {
//                 item.style.display = 'none';
//             }
//         });

//         // Переключаем текущее содержимое
//         content.style.display = content.style.display === 'block' ? 'none' : 'block';
//     });
// });




document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Закрываем все остальные секции
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
                item.style.maxHeight = null; // Сбрасываем высоту
            }
        });

        // Переключаем текущее содержимое
        if (content.style.display === 'block') {
            content.style.display = 'none';
            content.style.maxHeight = null; // Сбрасываем высоту
        } else {
            content.style.display = 'block';
            content.style.maxHeight = content.scrollHeight + "px"; // Устанавливаем высоту для анимации
        }
    });
});
