modal = document.getElementById('myModal')
openModalButton = document.getElementById('buy-button')
span = document.getElementsByClassName("close")[0];
modalWrapper = document.getElementById('modal-wrapper')
counter = document.getElementById('counter')
totalPrice = document.getElementById('modal-window-price')
price = document.getElementById('price')
confirmButton = document.getElementById('confirm-button')
const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value

counter.value = 1
totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML.slice(0, -4)) * counter.value + " BYN"

decrementButton = document.getElementById('decrement-button')
incrementButton = document.getElementById('increment-button')


incrementButton.addEventListener('click', (e) => {
    counter.value = Number(counter.value) + 1;
    totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML.slice(0, -4)) * counter.value + " BYN"
})

decrementButton.addEventListener('click', (e) => {
    if (counter.value > 1) {
        counter.value = Number(counter.value) - 1;
        totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML.slice(0, -4)) * counter.value + " BYN"

    } else {
    }

})
openModalButton.onclick = function () {
    modalWrapper.style.display = 'flex';
}

span.onclick = function () {
    modalWrapper.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modalWrapper && (event.key === 'Escape')) {
        modalWrapper.style.display = 'none';

    }
}

window.onkeydown = e => {
    if (e.key === 'Escape') {
        modalWrapper.style.display = 'none';

    }

}


confirmButton.onclick = e => {
    if (document.getElementById('number').value !== '' && document.getElementById('name').value !== '') {
        let orderObject = {
            name: document.getElementById('name').value,
            phone: document.getElementById('number').value,
            tickets: counter.value,
            film: document.getElementById('film-name').innerHTML,
            total_price: Number(price.innerHTML.slice(0, -4)) * counter.value


        }
        fetch('http://127.0.0.1:8000/confirm-order/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            }, body: JSON.stringify(orderObject)
        }).then(
            r => console.log(r)
        )
        modalWrapper.style.display = 'none'
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
        counter.value = 1
        totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML.slice(0, -4)) * counter.value + " BYN"

        alert("Заказ успешно оформлен!")

    }
}



