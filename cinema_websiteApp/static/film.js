modal = document.getElementById('myModal')
openModalButton = document.getElementById('buy-button')
span = document.getElementsByClassName("close")[0];
modalWrapper = document.getElementById('modal-wrapper')
counter = document.getElementById('counter')

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



decrementButton = document.getElementById('decrement-button')
incrementButton = document.getElementById('increment-button')

incrementButton.addEventListener('click',(e) => {
    counter.value = Number(counter.value) + 1;
})

decrementButton.addEventListener('click',(e) => {
    if (counter.value > 1) {
      counter.value = Number(counter.value) - 1;
    } else {
    }

})