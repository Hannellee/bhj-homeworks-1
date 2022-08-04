const image = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');
const clickNumber = +click.textContent;

image.onclick = function changeSizes() {
        if ((clickNumber + 1) % 2 === 1) {
        image.width = 250;
        image.height = 200;
    } else {
        image.width = 150;
        image.height = 100;
    }
}

click.textContent = clickNumber;