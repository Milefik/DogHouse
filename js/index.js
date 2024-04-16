let bg = document.querySelector('.bg1');
window.addEventListener('mousemove', function(e) {
  let x = e.pageX / window.innerWidth;
  let y = e.pageY / window.innerHeight;  
  bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 130 + 'px)';
});