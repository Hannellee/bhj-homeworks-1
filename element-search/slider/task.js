let sliderArrowPrev = document.querySelector('.slider__arrow_prev');
let sliderArrowNext = document.querySelector('.slider__arrow_next');
let sliderItem = document.querySelectorAll('.slider__item');

let sliderItemArray = Array.from(sliderItem);
let sliderIndex = 0;

let changePrevSliderItem = function () {
    for (let i = sliderItemArray.length; i > 0; i--) {
        let activeSlideIndex = sliderItemArray.findIndex(item => item.classList.contains('slider__item_active'));

        if (activeSlideIndex <= 1) {
            i = sliderItemArray.length;
        }


        sliderItemArray[activeSlideIndex].classList.remove('slider__item_active');
        sliderItemArray[activeSlideIndex -1].classList.add('slider__item_active');
        
    }
}

sliderArrowPrev.onclick = changePrevSliderItem;

