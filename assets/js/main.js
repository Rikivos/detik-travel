// Add JS here
// Get the header element
const header = document.querySelector('header');

// Get the background images
const backgroundImage1 = 'assets/img/background1.jpeg';
const backgroundImage2 = 'assets/img/image.jpeg';
const backgroundImage3 = 'assets/img/background3.jpeg';

// Get the image elements in the .potrait container
const images = document.querySelectorAll('.potrait img');

// Add event listeners to each image element
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    switch (index) {
      case 0:
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0, 209, 255, 0) 45.54%, #00D1FF 100%), url('${backgroundImage1}')`;
        break;
      case 1:
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0, 209, 255, 0) 45.54%, #00D1FF 100%), url('${backgroundImage2}')`;
        break;
      case 2:
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0, 209, 255, 0) 45.54%, #00D1FF 100%), url('${backgroundImage3}')`;
        break;
    }
  });
});