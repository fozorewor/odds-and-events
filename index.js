// State var
let bank = [];
let odds = [];
let evens = [];

//Add to bank function
function addToBank(number) {
  bank.push(number);
  render();
}

function sortOne() {
  if (bank.length === 0) return;

  const num = bank.shift();

  if (num % 2 === 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }

  render();
}

function sortAll() {
  while (bank.length > 0) {
    sortOne();
  }
}

// Add random number 
function addRandomNumber() {
  const random = Math.floor(Math.random() * 100);
  addToBank(random);
}


function Controls() {
  return `
    <div class="controls">
      <label>
        Add a number to the bank
        <input type="number" id="number-input" />
      </label>
      <button id="add-btn">Add number</button>
      <button id="random-btn">Random</button>
      <button id="sort-one-btn">Sort 1</button>
      <button id="sort-all-btn">Sort All</button>
    </div>
  `;
}

function Section(title, numbers) {
  return `
    <section>
      <h2>${title}</h2>
      <div class="output">
        ${numbers.join(" ")}
      </div>
    </section>
  `;
}

function App() {
  return `
    <h1>Odds and Events</h1>
    ${Controls()}
    ${Section("Bank", bank)}
    ${Section("Odds", odds)}
    ${Section("Evens", evens)}
  `;
}

//render
function render() {
  const app = document.querySelector("#app");
  app.innerHTML = App();

  document.querySelector("#add-btn").addEventListener("click", () => {
    const input = document.querySelector("#number-input");
    const value = Number(input.value);

    if (!isNaN(value)) {
      addToBank(value);
      input.value = "";
    }
  });
  
  document.querySelector("#random-btn").addEventListener("click", addRandomNumber);
  document.querySelector("#sort-one-btn").addEventListener("click", sortOne);
  document.querySelector("#sort-all-btn").addEventListener("click", sortAll);
}

render();
