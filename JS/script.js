$(document).ready(()=> {
  // Start the element blinking
  var setBlinking;
  setBlinking = setInterval(() => {
    flash('blinking', '#00cc00', 'black')
  }, 500);

  // Make select element change colors
  function flash(element, color1, color2) {
    var text = document.getElementById(element);
    text.style.color = (text.style.color == color2) ? color1 : color2;
  }

  // Print Resume

  // When the print button is clicked...
  $("#print-button").click(()=> {
    // Stop the blinking time and...
    clearInterval(setBlinking);
    // Set the text color to black...
    $("#blinking").css("color", "black");
    // Hide the scrolling text...
    $("#scroll-text").css("display", "none");
    // Display the standard text and set an appropriate margin...
    $("#scroll-text2").css({
      "display": "block",
      "margin": "0 0 0 65px"
    });
    // Display a pop-up alert stating recommended print settings...
    alert('Please make sure to enable printing "Background graphics" in "More settings" to ensure proper printing!');
    // Open the print dialog box...
    window.print();
    // Hide standard text...
    $("#scroll-text2").css("display", "none");
    // Show scrolling text...
    $("#scroll-text").css("display", "block");
    // And restart the blinking text
    clearInterval(setBlinking);
    setBlinking = setInterval(() => {
      flash('blinking', '#00cc00', 'black')
    }, 500);
  });
});