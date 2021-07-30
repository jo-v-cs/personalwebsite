let buttonNav = document.querySelector(".nav");
buttonNav.addEventListener("click", function(e) {
    let links = document.getElementById('nav-links');
    if (links.style.display === 'none')
    {
        links.style.display = 'block';
    }
    else
        links.style.display = 'none';
});

