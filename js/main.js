const hamOpen = document.getElementById("ham_open")

hamOpen.addEventListener("click", function () {
    document.getElementById(`ham_menu`)
    .classList.toggle("open")
    
})

hamOpen.addEventListener("click", function () {
    document.getElementsByClassName(`ham_top`)[0].classList.toggle("open")
    document.getElementsByClassName(`ham_middle`)[0].classList.toggle("open")
    document.getElementsByClassName(`ham_bottom`)[0].classList.toggle("open")
})

hamOpen.addEventListener("click", function () {
    document.getElementsByClassName(`fv_wrap__catch`)[0].classList.toggle("open")
})