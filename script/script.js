const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

// abrir/fechar no botão
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// fechar ao clicar em qualquer link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const btnTop = document.getElementById("back-to-top");
const homeSection = document.getElementById("home");

window.addEventListener("scroll", () => {
    const homeBottom = homeSection.getBoundingClientRect().bottom;

    if (homeBottom <= 0) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }
});

// clicar e voltar pro topo
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});