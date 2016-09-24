function toggleMenu() {
  var menuStatus = document.getElementById("menu-icon").className;

  if (menuStatus === "closed") {
    console.log("Open!");
    document.getElementById("sidebar").style.display = "block";
    setTimeout(function(){document.getElementById("sidebar").style.right = "0px"}, 50);
    document.getElementById("menu-icon").src = "../assets/images/menu_close.png";
    document.getElementById("menu-icon").className = "open";
  } else {
    console.log("Close!");
    document.getElementById("sidebar").style.right = "-300px";
    setTimeout(function(){document.getElementById("sidebar").style.display = "none"}, 300);
    document.getElementById("menu-icon").src = "../assets/images/menu_open.png";
    document.getElementById("menu-icon").className = "closed";
  }
}
