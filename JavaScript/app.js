const menu = document.querySelector(".menu__list");
const menuItems = document.querySelectorAll(".menu__item")
const burger = document.querySelector(".menu__burger")



burger.addEventListener('click', () => {
    menu.classList.toggle("menu__mobile")
})




