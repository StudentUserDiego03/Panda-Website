const nav = document.querySelector(".nav_icon");
const close_nav = document.querySelector (".close_icon");
const nav_links = document.querySelector(".links")

nav.addEventListener("click", ()=> {
    if (!nav.classList.contains("not_active")){
        nav.classList.add("not_active");
        close_nav.classList.remove("not_active");
        nav_links.classList.remove("not_active");
    }
})


close_nav.addEventListener("click", ()=> {
    if (!close_nav.classList.contains("not_active")){
        close_nav.classList.add("not_active");
        nav.classList.remove("not_active");
        nav_links.classList.add("not_active");
    }
})