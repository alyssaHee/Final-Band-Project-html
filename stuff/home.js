document.getElementsByClassName("img-fluid");

// All functions to change page

function tapepress() {
  var x = document.getElementById("tape");
  x.disabled = true;
  x.classList.add("off");

  window.location.href = "stuff/stereo.html";
}

function cdpress() {
  var x = document.getElementById("cd");
  x.disabled = true;
  x.classList.add("off");

  window.location.href = "stuff/dvdplayer.html";
}

function framepress() {
  var x = document.getElementById("frame");
  x.disabled = true;
  x.classList.add("off");

  window.location.href = "stuff/faveperformance.html";
}
