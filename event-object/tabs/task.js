let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));


let tabIndex = tabs.findIndex((idx) => {
    tabs[idx].classList.contains('tab_active');    
})

let tabChanger = function () {
    for (let i = 0; i < tabs.length; i++) {

        tabs[i].classList.remove('tab_active');
        tabContent[i].classList.remove('tab__content_active');

    }

    tabs[tabIndex].classList.add('tab_active');
    tabContent[tabIndex].classList.add('tab__content_active')
}