var span = document.querySelector(" .heading button");

var list = document.querySelector(".list");

span.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
