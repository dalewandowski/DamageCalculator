import { tables } from "./tables.js";

const selectGrain = document.querySelector(".grain-type");
const header = document.querySelector(".grain-type-header");

// generowanie tablicy wg wybranego zboża
selectGrain.addEventListener("change", () => {
  const grain = selectGrain.value;
  header.innerHTML = grain;

  if (tables[grain]) {
    document.querySelector(".table-container").innerHTML = tables[grain].html;
  } else {
    document.querySelector(".table-container").innerHTML =
      "<p class='text-center text-danger fw-bold'>Brak danych dla wybranego zboża.</p>";
  }
});

// liczenie sumy wszystkich inputów
function calculateSum() {
  // inputy z tablicy uszkodzone
  const damaged = document.querySelectorAll(".damaged");
  // inputy z tablicy nieuszkodzone
  const undamaged = document.querySelectorAll(".undamaged");

  let damagedSum = 0;
  let undamagedSum = 0;

  damaged.forEach((input) => {
    damagedSum += Number(input.value);
  });

  undamaged.forEach((input) => {
    undamagedSum += Number(input.value);
  });

  document.querySelector(".sum-damaged").innerHTML = damagedSum;
  document.querySelector(".sum-undamaged").innerHTML = undamagedSum;

  document.querySelector(".damaged-undamaged-sum").innerHTML =
    parseInt(damagedSum) + parseInt(undamagedSum);

  return { damagedSum, undamagedSum };
}

function calculatePercentage(damagedSum, undamagedSum) {
  const total = parseFloat(damagedSum) + parseFloat(undamagedSum);
  const percentageDamaged = document.querySelector(".percent-damaged");
  const percentageUndamaged = document.querySelector(".percent-undamaged");
  const percentageD = (damagedSum / total) * 100;

  percentageDamaged.innerHTML = percentageD.toFixed(0) + "%";
  percentageUndamaged.innerHTML = (100 - percentageD).toFixed(0) + "%";

  document.querySelector(".percent-sum").innerHTML =
    (percentageD + (100 - percentageD)).toFixed(0) + "%";
}

function init() {
  const { damagedSum, undamagedSum } = calculateSum();
  calculatePercentage(damagedSum, undamagedSum);
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
