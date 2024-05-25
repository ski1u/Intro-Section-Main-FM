let dropdowns = document.querySelectorAll(".dropdown")

function closeall() {
    dropdowns.forEach(dd => {
        let ddcontents = dd.querySelectorAll(".dropdown-content")
        ddcontents.forEach(ddc => {ddc.classList.remove("show")})
    })
}

dropdowns.forEach(dd => {
    dd.addEventListener("click", function() {
        let content = this.querySelector(".dropdown-content")
        let active = content.classList.contains("show")

        closeall()

        if (!active) {
            content.classList.toggle("show")
        }
    })
})



// MOBILE
let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".menu-content")
let overlay = document.querySelector(".overlay")

// inside sidebar
let close = sidebar.querySelector(".close")

let mobileDropdowns = document.querySelectorAll(".mobile-dropdown")



// SIDEBAR SHOW
function show(toggle) {
    if (toggle) {
        sidebar.classList.toggle("show")
        overlay.classList.toggle("show")
    }
    else {
        sidebar.classList.remove("show")
        overlay.classList.remove("show")
    }
}
menu.addEventListener("click", function() { //show
    show(true)
})
close.addEventListener("click", function() { //unshow
    show(false)
})


// DROPDOWNS
mobileDropdowns.forEach(dd => {
    dd.addEventListener("click", function() {
        let content = dd.querySelector(".mobile-content")
        content.classList.toggle("show")
    })
})