// Click to pop up
// Pricing Button
console.log("mainjsStart")

const pricingButton = document.querySelectorAll(".pricing-button")

const pricingSection = document.querySelector(".pricing-section")

const pricingForm = document.querySelector("#pricing-form")
function submitedForm(){
    pricingForm.innerHTML = `<h2>Thank You For Your Submission.</h2>`
}
pricingForm.addEventListener("submit",submitedForm)

function togglePricingSection() {
    console.log("Dan was here.")
    pricingSection.classList.toggle("active")
}
pricingButton.forEach(button => {
    button.addEventListener("click", togglePricingSection)
    
})

// Contact Button
console.log("mainjsStart")

const contactButton = document.querySelectorAll(".contact-button")

const contactSection = document.querySelector(".contact-section")

function toggleContactSection() {
    console.log("Dan was here.")
    contactSection.classList.toggle("active")
}
contactButton.forEach(button => {
    button.addEventListener("click", toggleContactSection)
})

// Collab Button
console.log("mainjsStart")

const collabButton = document.querySelectorAll(".collab-button")

const collabSection = document.querySelector(".collab-section")

function toggleCollabSection() {
    console.log("Dan was here.")
    collabSection.classList.toggle("active")
}
collabButton.forEach(button => {
    button.addEventListener("click", toggleCollabSection)
})

// Lead Button
console.log("mainjsStart")

const leadButton = document.querySelectorAll(".lead-button")

const leadSection = document.querySelector(".lead-section")

function toggleLeadSection() {
    console.log("Dan was here.")
    leadSection.classList.toggle("active")
}
leadButton.forEach(button => {
    button.addEventListener("click", toggleLeadSection)
})

// Slick
$('.slider-container').slick({
	autoplay: true, 
	autoplaySpeed: 900, 
	speed: 500, 
	arrows: false, 
	accessibility: true, 
	dots: false, 
	fade: true, 
	infinite: true, 
	pauseOnHover: false, 
});