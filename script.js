function openMenu() {
    indexe.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

const emailInput = document.querySelector(".header__email--input");

function adjustPlaceholder() {
    const emailInput = document.querySelector(".header__email--input");
    if (window.innerWidth < 768) {
        emailInput.placeholder = "Email";
    } else {
        emailInput.placeholder = "Your E-mail Here"
    }
}

// Run on page
window.addEventListener("load", adjustPlaceholder);
window.addEventListener("resize", adjustPlaceholder);