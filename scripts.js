const mainContainer = document.querySelector (".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.querySelector("#submit")

const rating = document.querySelector("#rating")
const rates = document.querySelectorAll(".btn")



submitButton.addEventListener("click", function ()  {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none"

})



rates.forEach( function (rate){
    rate.addEventListener("click", function (){
    rating.innerHTML = rate.innerHTML
    })
})
   