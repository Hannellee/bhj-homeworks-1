let menuLink = document.querySelectorAll('menu__link');
let menuSub = document.querySelectorAll('menu');



let menuLinkArray = Array.from(menuLink);
let menuSubArray = Array.from(menuSub);


for (let i = 0; i < menuLinkArray.length; i++) {

    let showSubMenu = function () {
        if (menuLinkArray[i].closest('menu')) {
            for (let j = 0; j < menuSubArray.length; j++) {
                menuSubArray[j].classList.add('menu_active')                
            }
            
            return false;
        }
    }

    menuLinkArray[i].onclick = showSubMenu();
}