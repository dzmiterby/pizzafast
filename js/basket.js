// Вывести заказ
const pizza = JSON.parse(localStorage.getItem('arrProduct'));

for(let key in pizza) {
    if(pizza[key] != null) {
        document.querySelector('.list').innerHTML += `<li data-b="${key}"><img src="${pizza[key][0]}" alt=""><p>Пицца<span> ${pizza[key][1]}</span>, диаметр<span> ${pizza[key][2]} см</span>,<span> ${pizza[key][3]} шт.</span>, стоимостью<span> ${pizza[key][4]} руб.</span></p><button class="delete" data-b="${key}">Удалить</button></li>`;
    }
}

// Удалить заказ
let del = document.querySelectorAll('.delete');
const basketEmpty = document.querySelector('.basket-empty');

del.forEach(function (element) {
    element.onclick = () => {
        let li = document.querySelectorAll('.list li');
        if(li.length == 1) {
            basketEmpty.innerHTML = 'Ваша корзина пуста';
        } 
        for(i=0; i<li.length; i++) {
            if(element.dataset.b == li[i].dataset.b) {
                li[i].remove();
            }
        }  
        for(let key in pizza) {
            if(element.dataset.b == key) {
                delete pizza[key];
                Array.from(pizza);
                let nul = 0;
                for(i=0; i<pizza.length; i++) {
                    if(pizza[i] == null) {
                        nul++;
                    }
                }
                basketCount.innerHTML = pizza.length - nul;
                localStorage.clear();
                localStorage.setItem('arrProduct', JSON.stringify(pizza));
            }
        }
        openMessage('Удалено из корзины');
    }
})

// Заголовок корзины
if(localStorage.getItem('arrProduct') == null) {
    basketEmpty.innerHTML = 'Ваша корзина пуста';
} else {
    Array.from(pizza);
    let nul = 0;
    for(i=0; i<pizza.length; i++) {
        if(pizza[i] == null) {
            nul++;
        }
    }
    if((pizza.length - nul) == 0) {
        basketEmpty.innerHTML = 'Ваша корзина пуста';
    } else {
        basketEmpty.innerHTML = 'Корзина';
    }
}

// Счетчик корзины
const basketCount = document.querySelector('.basket-count span');
if(localStorage.getItem('arrProduct') == null) {
    basketCount.innerHTML = 0;
} else {
    Array.from(pizza);
    let nul = 0;
    for(i=0; i<pizza.length; i++) {
        if(pizza[i] == null) {
            nul++;
        }
    }
    basketCount.innerHTML = pizza.length - nul;
}

// Оформить заказ
const placeOrder = document.querySelector('.place-order');
const containerPlace = document.querySelector('.container-place');
const placeOk = document.querySelector('.place-ok');
const input = document.querySelectorAll('input');

function delMess(box) {
    box.innerHTML = '';
}

placeOrder.onclick = () => {
    if(document.querySelector('.list li') == null) {
        document.querySelector('.empty-message').innerHTML = 'Выберите пиццу';
        setTimeout(function() {
            delMess(document.querySelector('.empty-message'));
        }, 1500);
    }
    for(i=0; i<input.length; i++) { 
        if(input[i].value == '') {
            document.querySelector('.order-message').innerHTML = 'Заполните все поля';
            input[i].classList.add('red');
            setTimeout(function() {
                delMess(document.querySelector('.order-message'));
                for(i=0; i<input.length; i++) {
                    input[i].classList.remove('red');
                }             
            }, 1500);
        }
    }
    if(input[0].value != '' && input[1].value != '' && input[2].value != '' && document.querySelector('.list li') != null) {
        containerPlace.classList.remove('d-n');
    }
}

// Очистка страницы
placeOk.onclick = () => {
    containerPlace.classList.add('d-n');
    localStorage.clear();
    for(i=0; i<input.length; i++) { 
        input[i].value = '';
    }
    document.querySelector('.list').innerHTML = '';
    basketCount.innerHTML = 0;
    basketEmpty.innerHTML = 'Ваша корзина пуста';
}