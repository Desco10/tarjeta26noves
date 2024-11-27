const cardContainer = document.querySelector('.card-container');
const toggleButtons = document.querySelectorAll('.toggle-button');

// Alternar entre la parte frontal y trasera
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    cardContainer.classList.toggle('flipped');
  });

  const backButton = document.querySelector('.back-button');

  // Evento para regresar a la tarjeta frontal
  backButton.addEventListener('click', () => {
    cardContainer.classList.remove('flipped'); // Remueve la clase flipped
  });
  


});

// Asegurarse de que el DOM esté cargado para manejar el video
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");

  if (!video) {
    console.error("El video no se encuentra en el DOM.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.error("Error reproduciendo el video:", err));
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5, // El video debe estar al menos al 50% visible para reproducirse
    }
  );

  observer.observe(video);
});
