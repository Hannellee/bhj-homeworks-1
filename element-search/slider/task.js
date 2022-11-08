let sliderArrowPrev = document.querySelector('.slider__arrow_prev');
let sliderArrowNext = document.querySelector('.slider__arrow_next');
let sliderItem = Array.from(document.querySelectorAll('.slider__item'));

let sliderIndex = 0;


sliderArrowNext.onclick = () => {
    if (sliderIndex === sliderItem.length - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++
    }

    changeSliderImage(sliderIndex);
}

sliderArrowPrev.onclick = () => {
    if (sliderIndex === 0) {
        sliderIndex = sliderItem.length - 1;
    } else {
        sliderIndex--
    }

    changeSliderImage(sliderIndex);
}

let changeSliderImage = function (idx) {
    
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('slider__item_active');
    }

    sliderItem[idx].classList.add('slider__item_active');
}
