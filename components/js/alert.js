document.getElementById('showAlert').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'flex';
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'none';
});

document.getElementById('confirmBtn').addEventListener('click', function() {
    alert("Вы подтвердили действие!");
    document.getElementById('customAlert').style.display = 'none';
});
