let sliderArrowPrev = document.querySelector('slider__arrow_prev');
let sliderArrowNext = document.querySelector('slider__arrow_next');
let sliderItem = document.querySelectorAll('slider__item');

let sliderItemArray = Array.from(sliderItem);

let changePrevSliderItem = function () {
    for (let i = 0; i < sliderItemArray.length; i++) {
        sliderItemArray[i].classList.remove('slider__item_active');
    }
}

sliderArrowPrev.onclick = changePrevSliderItem();

