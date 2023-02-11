$(document).ready(()=> {
  var setBlinking;
  setBlinking = setInterval(() => {
    flash('blinking', '#00cc00', 'black')
  }, 500);

  // Make select text blink
  function flash(el, c1, c2) {
    var text = document.getElementById(el);
    text.style.color = (text.style.color == c2) ? c1 : c2;
  }

  // Print Resume

  // Stop the blinking and scrolling text
  $("#print-button").click(()=> {
    clearInterval(setBlinking);
    setBlinking = setInterval(() => {
      flash('blinking', 'black', 'black')
    }, 500);
    // Hide the scrolling text
    textAnimation = document.getElementById('scroll-text');
    textAnimation.style.display = "none";
    // Display standard text
    textStop = document.getElementById('scroll-text2');
    textStop.style.display = "block";
    textStop.style.margin = "0 0 0 60px";
    // Wait for blinking to stop
    const myTimeout = setTimeout(resumePrinting, 500);
    // Display pop-up alert giving recommended print settings
    alert('Please make sure to enable printing "Background graphics" in "More settings" to ensure proper printing!');
  });

  // Open print dialog and reset blinking and scrolling text
  function resumePrinting() {
    // Open print dialog
    window.print();
    // Hide standard text and shot scrolling text again
    textStop.style.display = "none";
    textAnimation.style.display = "block";
    // Restart blinking text
    clearInterval(setBlinking);
    setBlinking = setInterval(() => {
      flash('blinking', '#00cc00', 'black')
    }, 500);
  }
});