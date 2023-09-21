// Click to pop up
// Pricing Button
console.log("mainjsStart")

const pricingButton = document.querySelectorAll(".pricing-button")

const pricingSection = document.querySelector(".pricing-section")

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