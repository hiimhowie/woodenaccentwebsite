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
  
  // Calculate how many items to show initially (first row)
  const calculateInitialItems = () => {
    if (window.innerWidth >= 900) return 3; // 3 items per row on large screens
    if (window.innerWidth >= 600) return 2; // 2 items per row on medium screens
    return 1; // 1 item per row on small screens
  };
  
  let initialItemsToShow = calculateInitialItems();
  
  // Hide all but the first row on page load
  if (items.length > initialItemsToShow) {
    items.slice(initialItemsToShow).forEach(el => el.classList.add('hidden'));
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }
  
  // Update on window resize
  window.addEventListener('resize', () => {
    if (!expanded) {
      const newInitialItems = calculateInitialItems();
      if (newInitialItems !== initialItemsToShow) {
        // Show all items up to the new row count
        items.forEach((el, index) => {
          if (index < newInitialItems) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        initialItemsToShow = newInitialItems;
      }
    }
  });

  // Toggle button
  btn.addEventListener('click', () => {
    if (!expanded) {
      // Show all items
      items.forEach(el => el.classList.remove('hidden'));
      btn.textContent = "Show Less";
      expanded = true;
    } else {
      // Show only first row
      items.forEach((el, index) => {
        if (index >= initialItemsToShow) {
          el.classList.add('hidden');
        }
      });
      btn.textContent = "Show More";
      expanded = false;
    }
  });
});






