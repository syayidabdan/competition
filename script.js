const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {  // Jika sudah scroll lebih dari 50px
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
