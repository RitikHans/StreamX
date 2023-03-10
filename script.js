// -----------------logic for menu icon on left side ----------------

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


// --------------Alert for Notification---------------------

alert("You Received 5 notifications,Click on Notification bell icon from top-right-most side to see Notifications");

// ------------Logic for Notication bell icon-------------------

var box = document.getElementById('box');
var down = false;

function toggleNotifi() {
    if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
    } else {
        box.style.height = '510px';
        box.style.opacity = 1;
        down = true;
    }
}