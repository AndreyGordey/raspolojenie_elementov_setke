const button = document.getElementById('popoverButton');
const popover = document.getElementById('popover');

button.addEventListener('mouseenter', () => {
    popover.classList.remove('hidden');
});

button.addEventListener('mouseleave', () => {
    popover.classList.add('hidden');
});
