(() => {

    
    'use strict';

    const rulesTitle = document.querySelector('.rules-title');
    const bannerRules = document.querySelector('.banner-rules');
    const closeRules = document.querySelector('.close-rules');

    const viewRules = function() {
        bannerRules.classList.toggle('rules-message');
        bannerRules.classList.toggle('display-none');
    }

    rulesTitle.addEventListener('click', () => {
        viewRules();
    });
    
    closeRules.addEventListener('click', () => {
        viewRules();
    })

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && bannerRules.classList.contains('rules-message')) {
            viewRules();
        }
    });


})();