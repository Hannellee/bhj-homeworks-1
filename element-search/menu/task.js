let menuLinksArray = Array.from(document.querySelectorAll('.menu__link'));
let menuSubArray = Array.from(document.querySelectorAll('.menu_sub'));

for (let i = 0; i < menuLinksArray.length; i++) {

    let showSubMenu = function () {
        if (this.nextElementSibling.tagName === 'UL') {
            this.nextElementSibling.classList.add('menu_active');

            return false;
        } else {
            return true;
        }
    }

    menuLinksArray[i].onclick = showSubMenu;
}