const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__toggle");
const closer = document.querySelector(".header__close");
const itemList = document.getElementsByClassName("header__item");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
})

closer.addEventListener("click", () => {
    menu.classList.toggle("active");
})

for(i=0; i < itemList.length; i++){
    itemList[i].addEventListener("click", () => {
        menu.classList.toggle("active");
    })
}
