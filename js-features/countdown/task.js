const count = document.getElementById('timer');
const counting = +count;
const countdownText = document.getElementById('status');

const interval = setInterval(() => {
    if ((counting + 1) === 0) {
        alert('Вы победили в конкурсе!');
        return clearInterval(interval);
    }

    countdownText.textContent + counting;
}, 1000);