// Menu burger
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerlist = document.querySelector('.menu-burger-list');

menuBurger.onclick = (event) => {
    menuBurgerlist.classList.toggle('d-n');
    menuBurger.classList.toggle('menu-close');
    event.stopPropagation();
}

menuBurgerlist.onclick = (event) => {
    event.stopPropagation();
}

document.onclick = () => {
    menuBurgerlist.classList.add('d-n');
    menuBurger.classList.remove('menu-close');
}

// Счетчик корзины
const basC = document.querySelector('.basket-count span');
if(localStorage.getItem('arrProduct') == null) {
    basC.innerHTML = 0;
} else {
    const pizza = JSON.parse(localStorage.getItem('arrProduct'));
    Array.from(pizza);
    let nul = 0;
    for(i=0; i<pizza.length; i++) {
        if(pizza[i] == null) {
            nul++;
        }
    }
    basC.innerHTML = pizza.length - nul;
}