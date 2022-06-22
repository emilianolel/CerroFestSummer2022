(() => {


    'use strict';

    const whatIsLink = document.querySelector('#whatis-galery');
    const bannerGalery = document.querySelector('.banner-galery');
    const closeGalery = document.querySelector('.close-galery');
    const images = document.querySelectorAll('galery-image');
    const selectedImage = images[0];
    const index = 0;

    const viewGalery = function() {
        bannerGalery.classList.toggle('display-none');
    }

    images.forEach(function(element, i) {
        if (element.classList.contains('selected-image')) {
            selectedImage = element;
            index = i;
        }
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