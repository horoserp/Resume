// Print Function
function printResume() {
  alert('Please make sure to enable printing "Background graphics" in "More settings" to ensure proper printing!');
  textAnimation = document.getElementById('scroll-text');
  textAnimation.style.display = "none";
  textStop = document.getElementById('scroll-text2');
  textStop.style.display = "block";
  textStop.style.margin = "0 0 0 60px";
  window.print();
  textStop.style.display = "none";
  textAnimation.style.display = "block";
}