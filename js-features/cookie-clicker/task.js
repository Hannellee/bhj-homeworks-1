let image = document.getElementById('cookie');

image.onclick = function changeSizes() {
    let click = document.getElementById('clicker__counter');
    let clickCount = +click.textContent;

    clickCount += 1;    

    if (clickCount % 2 === 1) {
        image.width = 250;
    } else {
        image.width = 150;
    }

    click.textContent = String(clickCount);
}

