let image = document.getElementById("image")
let input = document.getElementById("input")
let dropdown = document.getElementById("dropdown")
let url="https://avatars.dicebear.com/api/"

input.addEventListener("input",(e)=>{
    image.src=url+dropdown.value+"/"+input.value+"/.svg"
    
    
})

dropdown.addEventListener("change",()=>{
    image.src=url+dropdown.value+"/"+input.value+"/.svg"
})

// mobile menu

const burgerIcon = document.getElementById("burger")
const navbarMenu = document.getElementById("nav-links")

burgerIcon.addEventListener("click",()=>{
    navbarMenu.classList.toggle("is-active")
})
