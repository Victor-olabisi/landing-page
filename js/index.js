const getElement = (selection)=>{
const element = document.querySelector(selection);
if(element) {
    return element
} else {
    throw Error ("please check your selection")
}
}

const navToggle = getElement(".nav-toggle");
const navBar= getElement(".navbar-links");

navToggle.addEventListener("click", ()=>{
    navBar.classList.toggle("show-links")
})