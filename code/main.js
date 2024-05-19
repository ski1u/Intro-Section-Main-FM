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