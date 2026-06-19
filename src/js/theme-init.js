// Runs synchronously in <head> to set the theme before paint (avoids a flash).
(function () {
  var t = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();
