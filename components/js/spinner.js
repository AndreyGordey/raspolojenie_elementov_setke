document.getElementById('loadButton').addEventListener('click', function() {
    const loadingIndicator = document.getElementById('loading');
    
    // Показать индикатор загрузки
    loadingIndicator.classList.remove('hidden');

    // Имитация загрузки данных (например, через AJAX)
    setTimeout(() => {
        // Скрыть индикатор загрузки после завершения "загрузки"
        loadingIndicator.classList.add('hidden');
        alert('Данные загружены!');
    }, 3000); // Задержка в 3 секунды
});
