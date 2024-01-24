function toggleMenu1(menuId) {
    var menu = document.getElementById(menuId);
    menu.style.width = (menu.style.width === "0px" || menu.style.width === "") ? "100px" : "0px";
}
function toggleMenu2(menuId) {
    var menu = document.getElementById(menuId);
    menu.style.width = (menu.style.width === "0px" || menu.style.width === "") ? "100px" : "0px";
}
function toggleMenu3(menuId) {
    var menu = document.getElementById(menuId);
    menu.style.width = (menu.style.width === "0px" || menu.style.width === "") ? "100px" : "0px";
}
//#region 
function fimg() {
    var image = document.getElementById("a");

  
    image.style.width = "500px";
    image.style.height = "220px";
}

function simg() {
    var image = document.getElementById("a");

  
    image.style.width = "550px";
    image.style.height = "240px";
}

function fimg1() {
    var image = document.getElementById("b");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg1() {
    var image = document.getElementById("b");

  
    image.style.width = "200px";
    image.style.height = "200px";
}

function fimg2() {
    var image = document.getElementById("c");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg2() {
    var image = document.getElementById("c");

  
    image.style.width = "200px";
    image.style.height = "200px";
}
function fimg3() {
    var image = document.getElementById("d");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg3() {
    var image = document.getElementById("d");

  
    image.style.width = "200px";
    image.style.height = "200px";
}
function fimg4() {
    var image = document.getElementById("e");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg4() {
    var image = document.getElementById("e");

  
    image.style.width = "200px";
    image.style.height = "200px";
}

function fimg5() {
    var image = document.getElementById("f");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg5() {
    var image = document.getElementById("f");

  
    image.style.width = "200px";
    image.style.height = "200px";
}
function fimg6() {
    var image = document.getElementById("g");

  
    image.style.width = "180px";
    image.style.height = "180px";
}

function simg6() {
    var image = document.getElementById("g");

  
    image.style.width = "200px";
    image.style.height = "200px";
}

//#endregion

function updateMode(mode) {
    var body = document.body;
    body.classList.remove( "dark-mode","light-mode");
    body.classList.add(mode);
    
    localStorage.setItem("mode", mode);
}
function loadMode() {
    var mode = localStorage.getItem("mode");

    if (!mode) {
        mode = "dark-mode";
    }

    updateMode(mode);
}
window.onload = loadMode;

