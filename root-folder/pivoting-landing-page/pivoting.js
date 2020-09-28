window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 155,
    color: ['#4bacb8', '#4bacb8'],
    minDistance: 150,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 900,
        options: {
          maxParticles: 100
        }
      },
      {
        breakpoint: 600,
        options: {
          maxParticles: 0
        }
      }
    ] 
  });
};