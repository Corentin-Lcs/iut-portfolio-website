let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li");
 
console.log(links)

hamburger.addEventListener('click', ()=>{
    // Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
});