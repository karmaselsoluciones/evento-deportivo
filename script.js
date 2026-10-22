// ===========================
// BURGER MENU (móvil)
// ===========================
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navActions.classList.toggle('open');
    // Animar burger
    burger.classList.toggle('active');
  });
}

// ===========================
// VISOR DE GALERÍA (carrusel lateral)
// ===========================
const galeria = [
  { src: 'imagenes/eventos/4.jpg', titulo: 'Gimnasia Artística - Torneo Nacional', info: 'Medellín, Colombia | 28 Sep 2025' , posicion: 'center 20%' },
  { src: 'imagenes/eventos/5.jpg', titulo: 'Campeonato Nacional de Porristas', info: 'Bogotá, Colombia | 12 Oct 2025' },
  { src: 'imagenes/eventos/6.jpg', titulo: 'Open Cheer Challenge', info: 'Cali, Colombia | 14 Sep 2025', posicion: 'center 20%' },
  { src: 'imagenes/eventos/7.jpg', titulo: 'Copa de Gimnasia Rítmica', info: 'Bucaramanga, Colombia | 30 Ago 2025' },
];

let currentImg = 0;

const viewerImg     = document.getElementById('viewerImg');
const viewerPrev    = document.getElementById('viewerPrev');
const viewerNext    = document.getElementById('viewerNext');
const viewerCounter = document.querySelector('.viewer-counter');
const viewerCapH    = document.querySelector('.viewer-caption h4');
const viewerCapP    = document.querySelector('.viewer-caption p');

function updateViewer() {
  if (!viewerImg) return;
  const item = galeria[currentImg];
  viewerImg.src = item.src;
  viewerImg.alt = item.titulo;
  viewerImg.style.objectPosition = item.posicion || 'center center';
  if (viewerCounter) viewerCounter.textContent = `${currentImg + 1} / ${galeria.length}`;
  if (viewerCapH)    viewerCapH.textContent    = item.titulo;
  if (viewerCapP)    viewerCapP.textContent    = item.info;
}

if (viewerPrev) {
  viewerPrev.addEventListener('click', () => {
    currentImg = (currentImg - 1 + galeria.length) % galeria.length;
    updateViewer();
  });
}

if (viewerNext) {
  viewerNext.addEventListener('click', () => {
    currentImg = (currentImg + 1) % galeria.length;
    updateViewer();
  });
}

// ===========================
// NAVBAR — cambio de color al scroll
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});

// ===========================
// SMOOTH SCROLL en links del nav
// ===========================
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => e.preventDefault());
});

// ===========================
// HERO SEARCH — Enter activa botón
// ===========================
const heroInput = document.querySelector('.hero-search input');
const heroBuscar = document.querySelector('.btn-buscar');

if (heroInput && heroBuscar) {
  heroInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') heroBuscar.click();
  });

  heroBuscar.addEventListener('click', () => {
    const val = heroInput.value.trim();
    if (val) {
      // Aquí se conectaría con el backend de búsqueda
      console.log('Buscando:', val);
    }
  });
}

// ===========================
// PLANES — resaltar plan al hacer hover
// ===========================
document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.plan-card').forEach(c => {
      if (c !== card && !c.classList.contains('popular')) {
        c.style.opacity = '0.7';
      }
    });
  });
  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.plan-card').forEach(c => {
      c.style.opacity = '1';
    });
  });
});

// ===========================
// BOTÓN CORAZÓN (favorito)
// ===========================
const heartBtn = document.querySelector('.viewer-btn-icon .fa-heart')?.parentElement;
if (heartBtn) {
  let liked = false;
  heartBtn.addEventListener('click', () => {
    liked = !liked;
    const icon = heartBtn.querySelector('i');
    icon.classList.toggle('fas', liked);
    icon.classList.toggle('far', !liked);
    icon.style.color = liked ? '#f43f5e' : '';
  });
}

// ===========================
// INIT
// ===========================
updateViewer();
