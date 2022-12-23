let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let rotatorIndex = 0;



setInterval(() => {

    if (rotatorIndex === rotator.length - 1) {
        rotatorIndex = 0;
    } else {
        rotatorIndex++;
    }


    for (let i = 0; i < rotator.length; i++) {
        rotator[i].classList.remove('rotator__case_active');
    }

    rotator[rotatorIndex].classList.add('rotator__case_active');

}, 1000)
