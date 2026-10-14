document.querySelector(".name-input-shit").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  alert("שלום, " + name);
});

function openDrawer() {
  document.getElementById("drawer").classList.add("open");
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
}
