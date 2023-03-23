let chat = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');

let robotMessages = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Кто тут?',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!',
    'К сожалению, все операторы заняты. Не пишите нам больше!',
    'Добрый день! До свидания!',
    'Вы не купили ни одного товара для того, что бы так с нами разговаривать!'
]

let robotMessageIndex = () => {
    return Math.floor(Math.random() * robotMessages.length);
}    

let time = new Date().toLocaleTimeString('ru-Ru', {
    hour: '2-digit',
    minute: '2-digit',
});    

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

input.addEventListener('keyup', (e) => {

    if (input.value.trim() && e.key === 'Enter') {

    messages.innerHTML += `
        <div class='message message_client'>
            <div class='message__time'>${time}</div>
            <div class='message__text'>${input.value}</div>
        </div>
    `;

    // ответ от робота с задержкой, чтобы было красивее
    
    setTimeout(() => {
        messages.innerHTML += `
        <div class='message'>
            <div class='message__time'>${time}</div>
            <div class='message__text'>${robotMessages[robotMessageIndex()]}</div>
        </div>
    `;}, 1000);

    input.value = '';
}
});