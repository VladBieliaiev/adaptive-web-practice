const menu = document.querySelector(".menu__list");
const menuItems = document.querySelectorAll(".menu__item")
const burger = document.querySelector(".menu__burger")



burger.addEventListener('click', () => {
    menu.classList.toggle("menu__mobile")
    // menu.style.transition = "all 0.3s ease 0s"
    // menuItems[].style.transition = "all 0.3s ease 0s"
    // for (let i = 0; i < menuItems.length; i++) {
    // menuItems[i].style.margin = "0.8rem 0"
    // menuItems[i].style.transition = "all 1s ease 0s";

    // }
})

console.log(menu);
console.log(burger);
console.log(menuItems[0]);
console.log("hi")



// menu__mobile__items