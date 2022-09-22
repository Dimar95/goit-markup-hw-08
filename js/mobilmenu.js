(() => {
    const menuBtnRef = document.querySelector("[date-menu-button]");
    const mobileMenuRef = document.querySelector("[date-menu]");
    menuBtnRef.addEventListener("click", () => {
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef.classList.toggle("is-open");
    });
})();