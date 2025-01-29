function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-280px'; // Скрыть боковую панель
    } else {
        sidebar.style.left = '0px'; // Показать боковую панель
    }
}
