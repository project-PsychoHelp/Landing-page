// Selecciona todas las imágenes dentro de los cards
document.querySelectorAll('.evidencia-card img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = this.src;
        modal.classList.add('active');
    });
});

// Cierra el modal al hacer click en la X o fuera de la imagen
document.querySelector('.image-modal .close-modal').onclick = function() {
    document.getElementById('image-modal').classList.remove('active');
};
document.getElementById('image-modal').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
};