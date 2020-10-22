const countElem = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const breweriesList = document.getElementById("breweries");

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

const response = fetch("https://api.openbrewerydb.org/breweries").then(
  (response) => {
    response.json().then((breweries) => {
      breweries.forEach((brewery) => {
        const el = document.createElement("li");
        el.innerText = brewery.name;
        breweriesList.appendChild(el);
      });
    });
  }
);
