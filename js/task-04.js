let counterValue = 0;
const valueRef = document.querySelector("#value");
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrBtn.addEventListener("click", decrement);
incrBtn.addEventListener("click", increment);
