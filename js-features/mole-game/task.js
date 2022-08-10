let hole = document.getElementsByClassName('hole');

let holes = [...hole];

for (let i = 0; i < holes.length; i++) { 
    
    holes[i].onclick = function () {

        for (let j = 0; j < hole.length; j++) {
            let dead = document.getElementById('dead');
            let lost = document.getElementById('lost');
    
    
            if (hole[j].className.includes('hole_has-mole')) {
                dead.textContent = String(+(dead.textContent) + 1);
            } else {
                lost.textContent = String(+(lost.textContent) + 1);
            }
    
            if (+dead.textContent === 10 && +lost.textContent < 5) {
                alert('Поздравляем! Вы победили!');
                lost.textContent = '0';
                dead.textContent = '0';    
            } else if(+dead.textContent < 10 && +lost.textContent >= 5) {
                alert('Упс! Вы проиграли!');
                lost.textContent = '0';
                dead.textContent = '0';    
            } else {
                return;
            }
    
        }
            
    }
}

