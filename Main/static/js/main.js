

const navToggle = document.querySelector(".nav-toggle");


navToggle.addEventListener("click", changeMenuState);

function changeMenuState() {
  

    const sidebar = document.querySelector(".sidenav");

    sidebar.classList.toggle("show");

}