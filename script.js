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



/* --- INSTAGRAM GALLERY TOGGLE --- */
  const gallery = document.getElementById('instagram-gallery');
  const items = gallery ? Array.from(gallery.querySelectorAll('.insta-item')) : [];
  const btn = document.getElementById('show-more-btn');
  const gallerySection = document.getElementById('portfolio');
  let expanded = false;

  if (items.length > 3) {
    items.slice(3).forEach(el => el.classList.add('hidden')); // hide after 3
    if (btn) btn.hidden = false;
  } else {
    if (btn) btn.hidden = true;
  }

  if (btn) {
    btn.addEventListener('click', () => {
      if (!expanded) {
        // Reveal all hidden posts
        items.slice(3).forEach(el => {
          el.classList.remove('hidden');
          el.classList.add('fade-in');
        });

        if (window.instgrm && instgrm.Embeds?.process) {
          instgrm.Embeds.process();
        }

        btn.textContent = "Hide";
        expanded = true;
      } else {
        // Hide everything after the 3rd again
        items.slice(3).forEach(el => el.classList.add('hidden'));
        btn.textContent = "Show More";
        expanded = false;

        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
});



