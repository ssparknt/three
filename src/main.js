function listOneClicked() {
  document.getElementById("list").style.display = "block";
}

function itemClicked(key) {
  const textInside = key.getElementsByTagName("p")[0].innerHTML;
  document.getElementById("Gendertitle").innerHTML = textInside;
  document.getElementById("list").style.display = "none";
}

function listTwoClicked() {
  document.getElementById("list2").style.display = "block";
}

function itemClicked2(key) {
  const textInside = key.getElementsByTagName("p")[0].innerHTML;
  document.getElementById("ClassTitle").innerHTML = textInside;
  document.getElementById("list2").style.display = "none";
}
