document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: Mobile dropdown toggle for "Services"
  const dropdownLink = document.querySelector('.hover-dropdown > a');
  const dropdownParent = document.querySelector('.hover-dropdown');

  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent jump on click
      dropdownParent.classList.toggle('active');
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('instagram-gallery');
  const items = Array.from(gallery.querySelectorAll('.insta-item'));
  const btn = document.getElementById('show-more-btn');

  // Hide everything after the first 5
  if (items.length > 5) {
    items.slice(5).forEach(el => el.classList.add('hidden'));
    if (btn) btn.hidden = false;
  } else {
    if (btn) btn.remove();
  }

  if (btn) {
    btn.addEventListener('click', () => {
      items.slice(5).forEach(el => {
        el.classList.remove('hidden');
        // trigger fade animation
        requestAnimationFrame(() => el.classList.add('fade-in'));
      });

      // IMPORTANT: re-run Instagram's embed processor so newly visible posts render
      if (window.instgrm && instgrm.Embeds && typeof instgrm.Embeds.process === 'function') {
        instgrm.Embeds.process();
      }

      btn.remove();
    });
  }
});

