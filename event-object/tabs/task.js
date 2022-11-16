let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));



for (let i = 0; i < tabs.length; i++) {

    let changeTabs = function () {
    
        tabs.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(item => item.classList.remove('tab__content_active'));
        
        tabs[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active')
    }

    tabs[i].addEventListener('click', changeTabs);
}

