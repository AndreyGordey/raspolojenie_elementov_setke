document.getElementById('showToastButton').addEventListener('click', function() {
    showToast('Это уведомление!');
});

function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    
    // Создаем элемент toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    // Добавляем toast в контейнер
    toastContainer.appendChild(toast);

    // Удаляем toast через 3 секунды
    setTimeout(() => {
        toast.classList.add('hide');
        // Удаляем элемент из DOM через 0.5 секунды после добавления класса hide
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500);
    }, 3000); // Уведомление будет отображаться 3 секунды
}
