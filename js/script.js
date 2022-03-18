///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
const menu = document.querySelector(".navigation__checkbox");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");


allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {

        const href = link.getAttribute("href");




        // Close mobile naviagtion
        if (link.classList.contains("navigation__link")) {
            e.preventDefault();
            menu.checked = false;
        }


        if (link.classList.contains("popup__close")) {
            e.preventDefault();
            popup.style.opacity = "0";
            popup.style.visibility = "hidden";
            popupContent.style.opacity = "0";
            popupContent.style.transform = "translate(-50%, -50%) scale(0.25)";
        }

        if (link.classList.contains("modal")) {
            e.preventDefault();
            popup.style.opacity = "1";
            popup.style.visibility = "visible";
            popupContent.style.opacity = "1";
            popupContent.style.transform = "translate(-50%, -50%) scale(1)";
        }

        if (href === "") {
            return;
        }

        // Scroll back to top
        if (href === "#") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            e.preventDefault();
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

    });
});