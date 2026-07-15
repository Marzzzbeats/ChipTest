const navbar = document.querySelector(".navbar");

document.addEventListener("mousemove", (e) => {
    if (e.clientY < 40) {
        navbar.classList.add("show");
    } else if (!navbar.matches(":hover")) {
        navbar.classList.remove("show");
    }
});