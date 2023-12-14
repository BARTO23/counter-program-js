const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counter = document.getElementById('counterLabel');
let count = 0;

decreaseBtn.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
})

increaseBtn.addEventListener('click', () => {
  count++
  counter.innerHTML = count
})

resetBtn.addEventListener('click', () => {
  count = 0
  counter.innerHTML = count
})