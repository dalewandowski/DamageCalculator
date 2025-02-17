import { tables } from "./tables.js";
const inputDamaged = document.querySelectorAll(".damaged");
const inputUndamaged = document.querySelectorAll(".undamaged");
const sumDamaged = document.querySelector(".sum-damaged");
const sumUndamaged = document.querySelector(".sum-undamaged");
const percentageDamaged = document.querySelector(".percent-damaged");
const percentageUndamaged = document.querySelector(".percent-undamaged");
const header = document.querySelector(".grain-type-header");
const selectGrain = document.querySelector(".grain-type");

selectGrain.addEventListener("change", () => {
  const grain = selectGrain.value;
  header.textContent = grain;
  if (tables[grain]) {
    document.querySelector(".table-container").innerHTML = tables[grain].html;
  } else {
    document.querySelector(".table-container").innerHTML = "Do Widzenia";
  }
});

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < inputDamaged.length; i++) {
    sum += Number(inputDamaged[i].value);
  }
  sumDamaged.textContent = sum;
  sum = 0;
  for (let i = 0; i < inputUndamaged.length; i++) {
    sum += Number(inputUndamaged[i].value);
  }
  sumUndamaged.textContent = sum;

  const sumDamagedUndamaged = document.querySelector(".damaged-undamaged-sum");

  sumDamagedUndamaged.innerHTML =
    Number(sumDamaged.textContent) + Number(sumUndamaged.textContent);
}

function calculatePercentage() {
  const totalDamaged = Number(sumDamaged.textContent);
  const totalUndamaged = Number(sumUndamaged.textContent);
  const total = totalDamaged + totalUndamaged;
  const percentageD = (totalDamaged / total) * 100;

  percentageDamaged.innerHTML = percentageD.toFixed(0) + "%";
  percentageUndamaged.innerHTML = (100 - percentageD).toFixed(0) + "%";

  const prcSum = document.querySelector(".percent-sum");
  prcSum.innerHTML =
    parseInt(percentageDamaged.innerHTML) +
    parseInt(percentageUndamaged.innerHTML) +
    "%";
}

function init() {
  calculateSum();
  calculatePercentage();
}
document
  .querySelector(".table-container")
  .addEventListener("input", (event) => {
    if (
      event.target.classList.contains("damaged") ||
      event.target.classList.contains("undamaged")
    ) {
      init();
    }
  });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker zarejestrowany:", registration);
      })
      .catch((error) => {
        console.log("Rejestracja Service Worker nie powiodła się:", error);
      });
  });
}
