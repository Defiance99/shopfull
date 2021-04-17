function showModalReviewWindow() {
    let modalWindow = document.querySelector('.modal-window');
    let modalWindowField = document.querySelector('.modal-window-field');
    let modalWindowButtonClose = document.querySelector('.modal-window-button-close');
    let body = document.querySelector('body');
    showModalWindow();

    modalWindowField.addEventListener('click', closeModalWindow);
    modalWindowButtonClose.addEventListener('click', closeModalWindow);

    function showModalWindow() {
        body.classList.add('overflow-hidden');
        modalWindow.classList.add('show');
    }
}

function closeModalWindow() {
    let modalWindow = document.querySelector('.modal-window');
    let body = document.querySelector('body');
    modalWindow.classList.remove('show');
    body.classList.remove('overflow-hidden');
}
;document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 800) {
        let burgerMenu = document.getElementsByClassName('custom-burger-menu')[0];
        let mobileMenu = document.getElementsByClassName('mobile-nav-menu')[0];
        let topLine = document.getElementsByClassName('top-line')[0];
        let middleLine = document.getElementsByClassName('middle-line')[0];
        let bottomLine = document.getElementsByClassName('bottom-line')[0];
        let isDisplayedMenu = false;
    
        burgerMenu.addEventListener('click', function() {
            if (isDisplayedMenu) {
                mobileMenu.classList.remove('showBurgerMenu');
                topLine.classList.remove('top-line__Burger-menu');
                middleLine.classList.remove('middle-line__Burger-menu');
                bottomLine.classList.remove('bottom-line__Burger-menu');
                isDisplayedMenu = false;
            }else {
                mobileMenu.classList.add('showBurgerMenu');
                topLine.classList.add('top-line__Burger-menu');
                middleLine.classList.add('middle-line__Burger-menu');
                bottomLine.classList.add('bottom-line__Burger-menu');
                isDisplayedMenu = true;
            }

        });
    } 
});
;function showModalMessage(valueMessage) {
    let modalMessageContainer = document.getElementsByClassName('modal-messages-container')[0];
    let modalMessage = document.createElement('div');

    modalMessage.classList.add('modal-message');
    modalMessage.innerHTML = `<p class="modal-message-text"> ${valueMessage} </p>`;
    modalMessage.addEventListener('click', () => {
        clearTimeout(timeOut);
        removeElement();
    });

    modalMessageContainer.append(modalMessage);

    let timeOut = setTimeout(removeElement, 3000);

    function removeElement() {
        modalMessage.classList.add('hiddenModalMessage');

        setTimeout(() => {
            modalMessage.remove();
        }, 290) // 290 is animation time    
    }
}
;
//# sourceMappingURL=scripts.js.map