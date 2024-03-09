// Number of images you want to rain down
const NUM_IMAGES = 20;

// URLs of the images
const imageUrls = [
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/12/riverdale-archie.jpg?quality=75&width=1200&auto=webp",
  "https://m.media-amazon.com/images/I/51P-b3wx2AL._AC_UF1000,1000_QL80_.jpg"
];

// Function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create and animate images
function createImages() {
  const container = document.querySelector('.container');

  for (let i = 0; i < NUM_IMAGES; i++) {
    const img = document.createElement('img');
    // Randomly select an image URL from the array
    const randomIndex = random(0, imageUrls.length - 1);
    img.src = imageUrls[randomIndex];
    img.classList.add('rain');

    img.style.left = random(0, window.innerWidth) + 'px';
    img.style.animationDuration = random(5, 15) + 's';
    img.style.opacity = Math.random();

    container.appendChild(img);
  }
}

// Call the function to create images when the page loads
window.onload = createImages;
