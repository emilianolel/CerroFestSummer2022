(() => {


    'use strict';

    const invitationFigure = document.querySelector('.invitation-figure');
    const invitationBanner = document.querySelector('.invitation-baner');
    const closeInvitation = document.querySelector('.close-invitation');

    const viewInvitation = function() {
        invitationBanner.classList.toggle('invitation-container');
        invitationBanner.classList.toggle('display-none');
    }

    closeInvitation.addEventListener('click', () => {
        viewInvitation();
    });

    invitationFigure.addEventListener('click', () => {
        viewInvitation();
    });

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && invitationBanner.classList.contains('invitation-container')) {
            viewInvitation();
        }
    });


})();