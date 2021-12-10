modal = document.getElementById('myModal')
openModalButton = document.getElementById('buy-button')
span = document.getElementsByClassName("close")[0];
modalWrapper = document.getElementById('modal-wrapper')
counter = document.getElementById('counter')
totalPrice = document.getElementById('modal-window-price')
price = document.getElementById('price')


counter.value = 1
decrementButton = document.getElementById('decrement-button')
incrementButton = document.getElementById('increment-button')


incrementButton.addEventListener('click',(e) => {
    counter.value = Number(counter.value) + 1;
    totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML) * counter.value + " BYN"
})

decrementButton.addEventListener('click',(e) => {
    if (counter.value > 1) {
        counter.value = Number(counter.value) - 1;
            totalPrice.innerHTML = "К оплате: " + Number(price.innerHTML) * counter.value + " BYN"

    } else {
    }

})
openModalButton.onclick = function () {
    modalWrapper.style.display = 'flex';
}

span.onclick = function() {
  modalWrapper.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modalWrapper) {
      modalWrapper.style.display = 'none';

  }
}



