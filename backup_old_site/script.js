function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("email-link").addEventListener("click", function (e) {
  e.preventDefault();
  const user = "me";
  const domain = "adityaramesh.net";
  window.location.href = `mailto:${user}@${domain}`;
});