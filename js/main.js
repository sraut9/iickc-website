document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileToggle = document.getElementById('mobileToggle');
  const navList = document.getElementById('navList');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      if (navList) {
        navList.style.display = expanded ? '' : 'flex';
        navList.style.flexDirection = expanded ? '' : 'column';
      }
    });
  }
});
