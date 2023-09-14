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

// Cookie Banner
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}
if (readCookie('cookie-notice-dismissed') == 'true') {
    // Add tracking scripts here 
    // End tracking scripts 
} else {
    document.getElementById('cookie-notice').style.display = 'block';
}
document.getElementById('cookie-notice-accept').addEventListener("click", function () {
    createCookie('cookie-notice-dismissed', 'true', 31);
    document.getElementById('cookie-notice').style.display = 'none';
    location.reload();
});
document.querySelector("#close-cookie-banner").addEventListener("click", (e) => {

    document.querySelector("#cookie-notice").style.display = 'none';
});

// Slick
$('.slider-container').slick({
	autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 2000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: false, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});