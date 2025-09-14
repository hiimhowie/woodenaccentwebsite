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



btn.addEventListener('click', () => {
  if (!expanded) {
    // Reveal all hidden posts
    items.slice(3).forEach(el => {
      el.classList.remove('hidden');
      el.classList.add('fade-in');
    });

    // 🔑 Force Instagram to re-render them
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

    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
});


