function increaseProgress(progressId, increment) {
    const progressElement = document.getElementById(progressId);
    let currentWidth = parseInt(progressElement.style.width) || 0; // Текущая ширина

    // Увеличиваем ширину прогресса, но не больше 100%
    currentWidth = Math.min(currentWidth + increment, 100);
    
    progressElement.style.width = currentWidth + '%'; // Обновляем ширину
}
