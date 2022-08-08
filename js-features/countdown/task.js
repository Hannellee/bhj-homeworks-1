// const countdownText = document.getElementById('status');

let interval = setInterval(() => {
    let count = document.getElementById('timer');
    let counting = +count.textContent;

    counting = counting - 1;

    if (counting === 0) {
        alert('Вы победили в конкурсе!');
        return clearInterval(interval);
    } else {
        count.textContent = String(counting);
    }

}, 1000);