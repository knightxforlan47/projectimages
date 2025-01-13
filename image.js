// Get references to necessary elements
const largeImageDiv = document.querySelector('.large-image');
const largeImageText = largeImageDiv.querySelector('span');
const galleryImages = document.querySelectorAll('.gallery img');

// Store the original text for restoration
const originalText = largeImageText.textContent;

// Add event listeners to each smaller image
galleryImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    // Update the background and alt text
    largeImageDiv.style.backgroundImage = `url(${image.src})`;
    largeImageText.textContent = image.alt;
  });

  image.addEventListener('mouseout', () => {
    // Restore the original background and text
    largeImageDiv.style.backgroundImage = '';
    largeImageText.textContent = originalText;
  });
});
