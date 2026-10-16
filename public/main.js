var nameInput = document.getElementById("name");
if (nameInput) {
  nameInput.closest("form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("gallery").hidden = false;
    document.getElementById("gallery-text").hidden = false;
  });
}

function openDrawer() {
  document.getElementById("drawer").classList.add("open");
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
}
