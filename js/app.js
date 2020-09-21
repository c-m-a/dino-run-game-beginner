const dino = document.querySelector('.dino');
const captus = document.querySelector('.captus');

const checkDead = setInterval(() => {
  const dinoTop = parseInt(window
    .getComputedStyle(dino)
    .getPropertyValue('top'));

  const captusLeft = parseInt(window
    .getComputedStyle(captus)
    .getPropertyValue('left'));

  if (captusLeft > 0 && captusLeft < 20 && dinoTop > 120) {
    captus.style.animation = 'none';
    captus.style.display = 'none';
    alert('Game over');
  }
});

function jump() {
  if (dino.classList !== 'animate-jump')
    dino.classList.add('animate-jump');

  document.body.addEventListener('click', (e) => {
    e.preventDefault();
  });

  setTimeout(() => {
    dino.classList.remove('animate-jump');
    document.body.removeEventListener('click', (e) => {});
  }, 800);
}
