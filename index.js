let menue = document.querySelector(".menue");
let slashes = document.querySelector(".slashes");
let slash = document.querySelector(".slash");
let slash1 = document.querySelector("#slash1");
let slash2 = document.querySelector("#slash2");
let menueNav = document.getElementById("menueNav");


let trans = 0;

function expand() {
        
    menue.style.width = "70%";
    menue.style.height = "80%";
    menue.style.marginRight = "0px"

    menueNav.style.opacity = "1";
    menueNav.style.display = "block";

    slashes.style.marginRight = "100%";
    slashes.style.width = "30px";
    
    /* transform: rotate(-45deg); */
    /* position: relative;
    top: 5px; */
    slash1.style.top = "5px";
    slash1.style.transform = "rotate(-45deg)";
    slash2.style.bottom = "5px";
    slash2.style.transform = "rotate(45deg)";
    trans = 1;
}

function compress() {    
    menue.style.width = "";
    menue.style.height = "";
    menue.style.marginRight = ""

    menueNav.style.opacity = "";
    menueNav.style.display = "";

    slashes.style.marginRight = "";
    slashes.style.width = "";
    
    /* transform: rotate(-45deg); */
    /* position: relative;
    top: 5px; */
    slash1.style.top = "";
    slash1.style.transform = "";
    slash2.style.bottom = "";
    slash2.style.transform = "";
    trans = 0;
}


menue.addEventListener('mouseover', () => {
    if (window.innerWidth <= 473) {
            expand();
    } else {
            return 1;
    }
})


menue.addEventListener("mouseleave", () => {
    if (window.innerWidth <= 473 ) {

            compress();
    } else {
         return 1;
    }
});
    
function home() {
    window.location.href = "index.html";
}