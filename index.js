const countElem = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

const increment = () => {
  const count = parseInt(countElem.innerText, 10);
  countElem.innerText = count + 1;
};

const decrement = () => {
  const count = parseInt(countElem.innerText, 10);
  countElem.innerText = count - 1;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
