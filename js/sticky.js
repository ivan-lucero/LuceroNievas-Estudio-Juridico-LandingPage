const header = document.querySelector(".header__menu");

window.addEventListener("scroll", () => {
    if(window.scrollY > 0)
        header.classList.add("sticky")
    if(window.scrollY === 0)
        header.classList.remove("sticky")
})