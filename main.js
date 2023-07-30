console.log("mainjsStart")

const pricingButton = document.querySelectorAll(".pricing-button")

const pricingSection = document.querySelector(".pricing-section")

function togglePricingSection(){
    console.log("Dan was here.")
    pricingSection.classList.toggle("active")
}
pricingButton.forEach(button=>{
    button.addEventListener("click",togglePricingSection)
})