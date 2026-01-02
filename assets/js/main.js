
// Fulai Mata Mandir — interactions
(function(){
  const btn = document.getElementById('menuBtn');
  const drw = document.getElementById('drawer');
  if(btn && drw){
    btn.addEventListener('click', () => drw.classList.toggle('open'));
  }
  const close = document.getElementById('closeBanner');
  const bn = document.getElementById('banner');
  if(close && bn){ close.addEventListener('click', () => bn.style.display='none'); }

  // Simple time banner update example
  const aartiEl = document.getElementById('aartiTime');
  if(aartiEl){
    // Set today's aarti highlight (placeholder times)
    const times = ['06:00 AM', '12:00 PM', '06:00 PM'];
    aartiEl.textContent = 'Today's Aarti: ' + times.join(' • ');
  }
})();
