(() => {


    'use strict';

    const whatIsLink = document.querySelector('#whatis-galery');
    const bannerGalery = document.querySelector('.banner-galery');
    const closeGalery = document.querySelector('.close-galery');
    const images = document.querySelectorAll('.galery-image');
    const leftArrow = document.querySelector('.galery-left-arrow');
    const rightArrow = document.querySelector('.galery-right-arrow');
    let selectedImage = images[0];
    let index = 0;


    images.forEach(element => {
        console.log(element);
    });


    const viewGalery = function() {
        bannerGalery.classList.toggle('display-none');
    }

    const activateImage = function(element) {
        element.classList.toggle('display-none');
        element.classList.toggle('selected-image');
    }

    images.forEach(function(element, i) {
        if (element.classList.contains('selected-image')) {
            selectedImage = element;
            index = i;
        }
    });

    leftArrow.addEventListener('click', () => {
        activateImage(selectedImage);
        if (index === 0) {
            selectedImage = images[images.length - 1];
            index = images.length - 1;
        } else {
            selectedImage = images[index - 1];
            --index;
        }
        activateImage(selectedImage);
    });
    
    rightArrow.addEventListener('click', () => {
        activateImage(selectedImage);
        if (index === images.length - 1) {
            selectedImage = images[0];
            index = 0;
        } else {
            selectedImage = images[index + 1];
            ++index;
        }
        activateImage(selectedImage);
    });

    whatIsLink.addEventListener('click', () => {
        viewGalery();
    });

    closeGalery.addEventListener('click', () => {
        viewGalery();
    });

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && !bannerGalery.classList.contains('display-none')) {
            viewGalery();
        }
    });


})();
