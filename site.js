let buttonNav = document.querySelector(".nav");
buttonNav.addEventListener("click", function(e) {
    let links = document.getElementById('nav-links');
    links.style.display = 'block';
    links.style.position = 'absolute';
});