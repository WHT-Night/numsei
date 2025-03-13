// Função que aparece o coração ao tocar na tela
document.body.addEventListener('touchstart', function(event) {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    const touchX = event.touches[0].pageX;
    const touchY = event.touches[0].pageY;

    heart.style.left = `${touchX - 15}px`; // Ajuste para o coração ficar centralizado no toque
    heart.style.top = `${touchY - 15}px`;

    heartsContainer.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 2000); // Tempo para animação
});

// Remover a mensagem depois de 3 segundos
setTimeout(() => {
    document.getElementById('message').style.display = 'none';
}, 3000);
