// Click to pop up
// Pricing Button
console.log("mainjsStart")

const pricingButton = document.querySelectorAll(".pricing-button")

const pricingSection = document.querySelector(".pricing-section")

// const pricingForm = document.querySelector("#pricing-form")
// function submitedForm(){
//     pricingForm.innerHTML = `<h2>Thank You for Connecting with Us.</h2><p>We've got your message, and we're on it! At Samkalpa Creative Agency, we understand that every project is unique, and we're excited to dig into the details you've shared.</p><p>What's next? Here's what you can expect:</p><ol><li> Our team is diving into the specifics you provided to ensure we grasp your needs fully.</li><li>You can anticipate hearing from us within 2 business days. We'll keep it simple and straightforward when we get back to you.</li></ol><p>If you have any immediate questions or other thoughts, feel free to send us an email at connect@samkalpacreative.com</p>`
// }
// pricingForm.addEventListener("submit",submitedForm)

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

// White Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
    $(document).ready(function () {
      $(".mobile-button").click(function () {
        $(".mobile-button").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
      });
    });
  });

  // Dark Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
    $(document).ready(function () {
      $(".mobile-button-dark").click(function () {
        $(".mobile-button-dark").toggleClass("active");
        $(".mobile-menu").toggleClass("active");
      });
    });
  });