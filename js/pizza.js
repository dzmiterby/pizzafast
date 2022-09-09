// Выбрать пиццу
const choose = document.querySelectorAll('.choose');
const card = document.querySelectorAll('.card');
let chooseCard = document.querySelector('.choose-card');
const closeCard = document.querySelector('.close-card');
const chooseInfo = document.querySelector('.choose-info');

closeCard.onclick = (event) => {
    event.stopPropagation();
    chooseCard.classList.add('d-n');
}

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

choose.forEach(function(element) {
    element.onclick = (event) => {
        event.stopPropagation();
        chooseCard.classList.remove('d-n');
        for(i=0; i<card.length; i++) {       
            if(element.dataset.p == card[i].dataset.p) {
                chooseInfo.children[0].innerHTML = card[i].children[0].innerHTML;
                chooseInfo.children[1].setAttribute('src', card[i].children[1].getAttribute('src'));
                chooseInfo.children[8].children[0].innerHTML = +card[i].children[3].children[0].children[0].innerHTML;
                chooseInfo.children[6].innerHTML = 1;
                chooseInfo.children[3].value = 25;
                let amount = +chooseInfo.children[6].innerHTML;
                let cost = +card[i].children[3].children[0].children[0].innerHTML;
                chooseInfo.children[3].onchange = () => { 
                    let k = cost        
                    if(+chooseInfo.children[3].value == 25) {
                        k = cost;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 30) {
                        k = cost + 5;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 35) {
                        k = cost + 10;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                }
                plus.onclick = () => {
                    let sum = chooseInfo.children[8].children[0].innerHTML;
                    amount++;
                    chooseInfo.children[6].innerHTML = amount;
                    if(+chooseInfo.children[3].value == 25) {
                        k = cost;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 30) {
                        k = cost + 5;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 35) {
                        k = cost + 10;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                }               
                minus.onclick = () => {
                    if(amount > 1) {
                        amount--;
                    } else {
                        return null;
                    }
                    chooseInfo.children[6].innerHTML = amount;
                    if(+chooseInfo.children[3].value == 25) {
                        k = cost;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 30) {
                        k = cost + 5;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                    if(+chooseInfo.children[3].value == 35) {
                        k = cost + 10;
                        chooseInfo.children[8].children[0].innerHTML = k * amount;
                    }
                }
                break;
            }
        }
    }
})

chooseInfo.onclick = (event) => {
    event.stopPropagation();
}

chooseCard.onclick = () => {
    chooseCard.classList.add('d-n');
}

// Добавить в корзину
const buy = document.querySelector('.buy');

const arrProduct = [];
let abc = 'abc';
let k = 0;
let arr = [];

buy.onclick = () => {
    arr.push(abc + `${k}`);
    arr[k] = [];
    arr[k].push(chooseInfo.children[1].getAttribute('src'));
    arr[k].push(chooseInfo.children[0].innerHTML);
    arr[k].push(chooseInfo.children[3].value);
    arr[k].push(chooseInfo.children[6].innerHTML);
    arr[k].push(chooseInfo.children[8].children[0].innerHTML);
    if(localStorage.getItem('arrProduct') == null) {
        arrProduct.push(arr[k]);
        localStorage.setItem('arrProduct', JSON.stringify(arrProduct));
        basketCount.innerHTML = arrProduct.length;
    } else {
        const arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
        Array.from(arrProduct);
        arrProduct.push(arr[k]);
        let nul = 0;
        for(i=0; i<arrProduct.length; i++) {
            if(arrProduct[i] == null) {
                nul++;
            }
        }
        basketCount.innerHTML = arrProduct.length - nul;
        localStorage.clear();
        localStorage.setItem('arrProduct', JSON.stringify(arrProduct)); 
    }
    k++;
    openMessage('Добавлено в корзину');
}

// Счетчик корзины 
const basketCount = document.querySelector('.basket-count span');
if(localStorage.getItem('arrProduct') == null) {
    basketCount.innerHTML = 0;
} else {
    const pizza = JSON.parse(localStorage.getItem('arrProduct'));
    Array.from(pizza);
    let nul = 0;
    for(i=0; i<pizza.length; i++) {
        if(pizza[i] == null) {
            nul++;
        }
    }
    basketCount.innerHTML = pizza.length - nul;
}