const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 0; i < hole.length; i++) { // проверять все ячейки циклом нужно так? но ведь hole - это объект, а не массив, длины нет...
    if (hole.className.includes('hole_has-mole')) {
        hole[i].onclick = function () {

            if ((dead.textContent > 10) && (lost.textContent < 5)) {
                return;
            } else if((dead.textContent === 10) && (lost.textContent < 5)) {
                alert('Поздравляем! Вы победили!');
                lost.textContent = 0;
                dead.textContent = 0;
            }

                dead.textContent = +dead.textContent + 1;

        } 
        } else {
            lost.textContent = +lost.textContent + 1;
            if (lost.textContent >= 5) {
                alert('Упс! Вы проиграли!');
                return;
            }
        }
}