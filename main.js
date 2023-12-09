var navLinks = document.getElementById("nav-links");

function showMenu() {
        navLinks.style.right = "0";
}

function hideMenu() {
        navLinks.style.right = "-200px";
}



var menulist = document.getElementById('menulist');

menulist.style.maxHeight = "0px";

function menutoggle(params) {
        if (menulist.style.maxHeight == "0px") {
                menulist.style.maxHeight = "80vh";
        } else {
                menulist.style.maxHeight = "0px";
        }
}