document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  // Mobile navigation
  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute(
        'aria-label',
        isOpen ? 'بستن منو' : 'باز کردن منو'
      );
      toggle.textContent = isOpen ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'باز کردن منو');
        toggle.textContent = '☰';
      });
    });
  }

  // Header shadow while scrolling
  const updateHeader = () => {
    if (header) {
      header.style.boxShadow =
        window.scrollY > 20
          ? '0 5px 20px #00000020'
          : 'none';
    }
  };

  window.addEventListener('scroll', updateHeader, {
    passive: true
  });
  updateHeader();

  // Gallery image viewing
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const viewer = document.createElement('div');

      viewer.style.cssText = `
        position:fixed;
        inset:0;
        z-index:9999;
        background:#10291fee;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        cursor:zoom-out;
      `;

      const largeImage = document.createElement('img');
      largeImage.src = img.src;
      largeImage.alt = img.alt || 'تصویر کافه اکسیژن';
      largeImage.style.cssText = `
        max-width:100%;
        max-height:90vh;
        object-fit:contain;
        border:2px solid #c5a15b;
      `;

      viewer.appendChild(largeImage);
      document.body.appendChild(viewer);
      document.body.style.overflow = 'hidden';

      const closeViewer = () => {
        viewer.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeyDown);
      };

      const onKeyDown = event => {
        if (event.key === 'Escape') closeViewer();
      };

      viewer.addEventListener('click', closeViewer);
      document.addEventListener('keydown', onKeyDown);
    });
  });

  // Current year in the footer
  const year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  console.log('Cafe Oxygen is ready!');
});
