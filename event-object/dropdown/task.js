let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));


let showList = function () {
        if (dropdownList.classList.contains('dropdown__list_active')) {
            dropdownList.classList.remove('dropdown__list_active');
        } else {
            dropdownList.classList.add('dropdown__list_active');
        }
    
    return false;
}

        
for (let i = 0; i < dropdownItem.length; i++) {

    dropdownItem[i].onclick = function () {
        if (dropdownList.classList.contains('dropdown__list_active')) {

            dropdownValue.textContent = dropdownItem[i].textContent;
            dropdownList.classList.remove('dropdown__list_active');
            return false; 
        }
   
    }
}


dropdownValue.addEventListener('click', showList);
