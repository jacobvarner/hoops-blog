function toggleMenu() {
  var menuStatus = document.getElementById("menu-icon").className;

  if (menuStatus === "closed") {
    console.log("Open!");
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("menu-icon").src = "/assets/images/menu_close.png";
    document.getElementById("menu-icon").className = "open";
  } else {
    console.log("Close!");
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("menu-icon").src = "/assets/images/menu_open.png";
    document.getElementById("menu-icon").className = "closed";
  }
}
