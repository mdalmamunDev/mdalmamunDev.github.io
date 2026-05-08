(function () {
  var btn = document.getElementById('navHamburger');
  var drawer = document.getElementById('navDrawer');
  var backdrop = document.getElementById('navBackdrop');
  var closeBtn = document.getElementById('navClose');
  var links = drawer.querySelectorAll('.nav-drawer-link');

  function open() { drawer.classList.add('is-open'); btn.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
  function close() { drawer.classList.remove('is-open'); btn.classList.remove('is-open'); document.body.style.overflow = ''; }

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  links.forEach(function (l) { l.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();