window.onload = function() {
  var overlay1 = document.getElementById("overlay");
  var gif1 = document.getElementById("animated-gif-1");
  var i1 = 0;

  // Change the first gif source every 100ms
  var gif1Interval = setInterval(function() {
    if (i1 === 71) {
      // Change the interval to Infinity to stop the animation
      clearInterval(gif1Interval);
      return;
    }
    i1 = (i1 + 1) % 72;
    gif1.src = "吉祥物/"+i1.toString().padStart(2, '0')+".png";
  }, 50);

  // Fade out the first overlay after 4 seconds
  setTimeout(function() {
    overlay1.style.opacity = 0;
  }, 3200);

  // Remove the first overlay after 4.2 seconds
  setTimeout(function() {
    overlay1.style.display = "none";
  }, 3800);

  var overlay2 = document.getElementById("overlay-2"); // overlay-2 has been removed, so this line can be commented out
  var gif2 = document.getElementById("animated-gif-2");
  var i2 = 0;

  // Change the second gif source every 200ms
  var gif2Interval = setInterval(function() {
    if (i2 === 4) {
      // Change the interval to Infinity to stop the animation
      clearInterval(gif2Interval);
      return;
    }
    i2 = (i2 + 1) % 5;
    gif2.src = "電池/"+i2.toString().padStart(1, '0')+".png";
  }, 600);
}
