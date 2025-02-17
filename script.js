const inptutDamaged = document.querySelectorAll(".damaged");
const inputUndamaged = document.querySelectorAll(".undamaged");
const sumDamaged = document.querySelector(".sum-damaged");
const sumUndamaged = document.querySelector(".sum-undamaged");
const percentageDamaged = document.querySelector(".percent-damaged");
const percentageUndamaged = document.querySelector(".percent-undamaged");

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < inptutDamaged.length; i++) {
    sum += Number(inptutDamaged[i].value);
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

function calculate() {
  calculateSum();
  calculatePercentage();
}

inputUndamaged.forEach((input) => {
  input.addEventListener("input", calculate);
});

inptutDamaged.forEach((input) => {
  input.addEventListener("input", calculate);
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
