let elemReveal = Array.from(document.querySelectorAll('.reveal'));

for (let i = 0; i < elemReveal.length; i++) {

    let isVisible = function () {

        let {top, bottom} = elemReveal[i].getBoundingClientRect();

        if (top < window.innerHeight || bottom > 0) {
            elemReveal[i].classList.add('reveal_active')
        } else {
            elemReveal[i].classList.remove('reveal_active')
        }
    }

    window.addEventListener('scroll', isVisible);
}

