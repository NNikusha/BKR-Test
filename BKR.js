const menu = document.querySelector("#menu");
const menuText = document.querySelector("#menu-text");
const arrow=document.querySelector("#Arrow")

menu.addEventListener("click", () => {
menuText.classList.toggle("active")

});

// const scrollByArrow = () => {
    
//     let pageHeight = window.innerHeight;
//     window.scrollBy(0, pageHeight);
// }
// arrow.addEventListener("click", scrollByArrow)