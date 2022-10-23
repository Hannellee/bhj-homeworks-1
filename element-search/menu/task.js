// let menuLink = document.querySelectorAll('.menu__link');
// let menuSub = document.querySelectorAll('.menu_sub');

let menuLinksArray = Array.from(document.querySelectorAll('.menu__link'));
let menuSubArray = Array.from(document.querySelectorAll('.menu_sub'));

for (let i = 0; i < menuLinksArray.length; i++) {

    let showSubMenu = function () {
        let subLinkItem = menuLinksArray[i].closest('.menu_sub')
        if (subLinkItem !== null) {
            for (let j = 0; j < menuSubArray.length; j++) {
                menuSubArray[j].classList.add('menu_active')                
            }
            
            return false;
        } else {
            return true;
        }
    }

    menuLinksArray[i].onclick = showSubMenu;
}