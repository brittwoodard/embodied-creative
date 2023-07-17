// Get the popup container element
const popupContainer = document.getElementById('popupContainer');

// Get all the popup trigger buttons
const popupTriggers = document.querySelectorAll('.popup-trigger');

// Add click event listeners to the buttons
popupTriggers.forEach((button) => {
  button.addEventListener('click', () => {
    // Display the popup container
    popupContainer.classList.add('show');

    // Load and inject the form-pricing.html content into the popup container
    fetch('/_includes/form-pricing.html')
      .then((response) => response.text())
      .then((html) => {
        popupContainer.innerHTML = html;
      })
      .catch((error) => {
        console.error('Error loading form-pricing.html:', error);
      });
  });
});

// Function to hide the popup container when clicked outside
function hidePopupContainer(event) {
  if (event.target === popupContainer) {
    popupContainer.classList.remove('show');
    popupContainer.innerHTML = ''; // Clear the content
  }
}

// Add a click event listener to the popup container to hide it when clicked outside
popupContainer.addEventListener('click', hidePopupContainer);
