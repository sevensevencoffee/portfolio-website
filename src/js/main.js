import '../css/styles.css';
import { createHome } from './home.js';
import { createMaluCoffee } from './malu-coffee.js';
import { createCameraroll } from './cameraroll.js';

document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.container');
    const imageContainer = document.querySelector('.image-container');
    createHome(container);

    const maluCoffeeButton = document.querySelector('.malu-coffee');
    maluCoffeeButton.addEventListener('click', function() {
        cleanPage();
        createMaluCoffee(container);
    });

    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', function() {
        cleanPage();
        createHome(container);
    });

    const camerarollButton = document.querySelector('.cameraroll');
    camerarollButton.addEventListener('click', function() {
        cleanPage();
        createCameraroll(imageContainer);
    });

    function cleanPage() {
        container.innerHTML = '';
    };
    // Burger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const workPlayContainer = document.querySelector('.work-play-container');
    const socialLinks = document.querySelector('.social-links');

    burgerMenu.addEventListener('click', function() {
        workPlayContainer.classList.toggle('show');
        socialLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.burger-menu') && 
            !event.target.closest('.work-play-container') && 
            !event.target.closest('.social-links')) {
            workPlayContainer.classList.remove('show');
            socialLinks.classList.remove('show');
        }
    });

    // Close menu when window is resized to larger than mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            workPlayContainer.classList.remove('show');
            socialLinks.classList.remove('show');
        }
    });
});
