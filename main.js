// Utility Functions to Get Elements
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

// Get Elements from HTML
const featuresAnchor = select("#features")
const featuresDownArrow = select("#features-down-arrow")
const featuresUpArrow = select("#features-up-arrow")
const companyAnchor = select("#company")
const companyDownArrow = select("#company-down-arrow")
const companyUpArrow = select("#company-up-arrow")
const menuOpen = select("#menu-open")
const menuClose = select("#menu-close")
const backDrop = select(".backdrop")
const navItemsContainer = select(".nav-items-container")
const featuresSubMenu = select(".features-sub-menu")
const companySubMenu = select(".company-sub-menu")

// Event Listeners
featuresAnchor.addEventListener("mouseover", () => toggleArrows(featuresDownArrow, featuresUpArrow))
featuresAnchor.addEventListener("mouseout", () => toggleArrows(featuresDownArrow, featuresUpArrow))
companyAnchor.addEventListener("mouseover", () => toggleArrows(companyDownArrow, companyUpArrow))
companyAnchor.addEventListener("mouseout", () => toggleArrows(companyDownArrow, companyUpArrow))

menuOpen.addEventListener("click", function () {
    navItemsContainer.classList.add("show")
    menuOpen.style.display = "none"
    menuClose.classList.add("show")
    backDrop.classList.add("show")
})

menuClose.addEventListener("click", function () {
    menuCloseBehavior()
})

featuresAnchor.addEventListener("click", () => toggleIfMenuOpen(featuresSubMenu))
companyAnchor.addEventListener("click", () => toggleIfMenuOpen(companySubMenu))

window.addEventListener("orientationchange", function () {
    menuCloseBehavior()
})

// Functions
function toggleArrows(downArrow, upArrow) {
    downArrow.classList.toggle("show")
    upArrow.classList.toggle("show")
}

function toggleIfMenuOpen(subMenu) {
    if (menuClose.classList.contains("show")) {
        subMenu.classList.toggle("show")
    }
}

function menuCloseBehavior() {
    backDrop.classList.remove("show")
    menuClose.classList.remove("show")
    navItemsContainer.classList.remove("show")
    menuOpen.style.display = "block"
}