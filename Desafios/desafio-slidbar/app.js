let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

// Deixa o primeiro slide marcado como ativo
items[0].classList.add('active');

// Botão NEXT
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active++;
    }
    reloadSlider();
};

// Botão PREV
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active--;
    }
    reloadSlider();
};

// Autoplay (5s)
let refreshSlider = setInterval(() => { next.click() }, 5500);

// Atualização do slider
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    // Atualizar dot ativo
    document.querySelector('.slider .dots li.active').classList.remove('active');
    dots[active].classList.add('active');

    // Atualizar slide ativo (opacidade)
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    items[active].classList.add('active');
}

// Clique nos dots
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    });
});