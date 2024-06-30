document.getElementsByClassName("backbtn");

function goback() {
  var x = document.getElementById("back");
  x.disabled = true;
  x.classList.add("off");

  window.location.href = "../open me.html";
}
