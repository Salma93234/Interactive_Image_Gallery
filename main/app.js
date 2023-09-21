// display

document.getElementById('btn').addEventListener('click', function () {
    const imagesSection = document.getElementById('image');
        imagesSection.classList.remove('d-none');
});



// Get references to modal elements
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const backgroundOverlay = document.getElementById('backgroundOverlay');


const images = [
    'images/player-1.png',
    'images/player-2.png',
    'images/player-3.png',
    'images/player-4.png',
    'images/player-5.png',
    'images/player-6.png',
    'images/player-7.png',
    'images/player-8.png',
    'images/player-9.png',
    'images/player-10.png',
    'images/player-11.png',
    'images/player-12.png',
    // Add more image URLs here
];
let currentImageIndex = 0;

// Function to open the modal with a specific image
function openModal(index) {
    modal.style.display = 'block';
    modalImage.src = images[index];
    currentImageIndex = index;
    backgroundOverlay.style.display = 'block'; // Show the background overlay
}

// Function to close the modal
function closeModalHandler() {
    modal.style.display = 'none';
    backgroundOverlay.style.display = 'none'; // Hide the background overlay
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const clickableImages = document.querySelectorAll('.clickable-image');
    clickableImages.forEach((image, index) => {
        image.addEventListener('click', () => openModal(index));
    });

    closeModal.addEventListener('click', closeModalHandler);

    prevImage.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            openModal(currentImageIndex - 1);
        }
    });

    nextImage.addEventListener('click', () => {
        if (currentImageIndex < images.length - 1) {
            openModal(currentImageIndex + 1);
        }
    });
});

// close button

document.getElementById('close').addEventListener('click',function(){
    const imageCard = this.parentElement;
        imageCard.remove();
})

// Get all delete buttons
const deleteButtons = document.querySelectorAll('.button');

// Function to handle delete button click
function handleDeleteButtonClick(event) {
  const imageCard = event.currentTarget.parentElement;
  imageCard.remove();
}

// Add event listeners to all delete buttons
deleteButtons.forEach((button) => {
  button.addEventListener('click', handleDeleteButtonClick);
});
