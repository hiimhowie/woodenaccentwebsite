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
  const items = gallery ? Array.from(gallery.querySelectorAll('.insta-item')) : [];
  const btn = document.getElementById('show-more-btn');
  let expanded = false;

  // 👇 Hide all but the first 3 on page load
  if (items.length > 3) {
    items.slice(3).forEach(el => el.classList.add('hidden'));
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }

  // Toggle button
  btn.addEventListener('click', () => {
    if (!expanded) {
      items.slice(3).forEach(el => el.classList.remove('hidden'));
      btn.textContent = "Hide";
      expanded = true;
    } else {
      items.slice(3).forEach(el => el.classList.add('hidden'));
      btn.textContent = "Show More";
      expanded = false;
    }
  });
});





