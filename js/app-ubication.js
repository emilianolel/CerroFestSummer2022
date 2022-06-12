(() => {

    'use strict';

    /* Elements */
    const ubicationItemMenuList = document.querySelectorAll('.ubication-item-menu');
    const ubicationItemBoxList = document.querySelectorAll('.ubication-item-box');
    let index = 0;
    
    for (let i = 0; i < ubicationItemBoxList.length; i++) {
        if (!ubicationItemBoxList[i].classList.contains('display-none')) {
            index = i;
        }
    }
    
    ubicationItemMenuList.forEach(function(element, i) {
        element.addEventListener('click', () => {
            if (index !== i) {
                ubicationItemBoxList[i].classList.toggle('ubication-message');
                ubicationItemBoxList[i].classList.toggle('display-none');
                ubicationItemBoxList[index].classList.toggle('ubication-message');
                ubicationItemBoxList[index].classList.toggle('display-none');
                index = i;
            }
        });
    });    

})();