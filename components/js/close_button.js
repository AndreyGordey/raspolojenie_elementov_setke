// Получаем элементы
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeButton");
const openModalButton = document.getElementById("openModalButton");

// Функция для открытия модального окна
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Функция для закрытия модального окна
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
