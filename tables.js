export const tables = {
  Pszenica: {
    name: "Pszenica",
    html: ` <table class="table table-bordered table-hover shadow">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th scope="col">Pomiar 1</th>
            <th>Pomiar 2</th>
            <th>Pomiar 3</th>
            <th>Pomiar 4</th>
            <th>Pomiar 5</th>
            <th>Pomiar 6</th>
            <th>Suma Pomiarów</th>
            <th>Udział Procentowy (%)</th>
          </tr>
        </thead>

        <tbody>
          <tr class="table-danger">
            <th>Uszkodzone</th>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-damaged"></td>
            <td class="percent-damaged"></td>
          </tr>
          <tr class="table-success">
            <th>Nieuszkodzone</th>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-undamaged"></td>
            <td class="percent-undamaged"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-warning">
            <th colspan="7" style="text-align: end" class="sum-col">Suma :</th>
            <td class="damaged-undamaged-sum"></td>
            <td class="percent-sum"></td>
          </tr>
        </tfoot>
      </table>`,
  },

  Kukurydza: {
    name: "kukurydza",
    html: `  <table class="table table-bordered table-hover shadow">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th scope="col">Pomiar 1</th>
            <th>Pomiar 2</th>
            <th>Pomiar 3</th>
            <th>Pomiar 4</th>
            <th>Pomiar 5</th>
            <th>Pomiar 6</th>
            <th>Suma Pomiarów</th>
            <th>Udział Procentowy (%)</th>
          </tr>
        </thead>

        <tbody>
          <tr class="table-danger">
            <th>Uszkodzone</th>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-damaged"></td>
            <td class="percent-damaged"></td>
          </tr>
          <tr class="table-success">
            <th>Nieuszkodzone</th>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-undamaged"></td>
            <td class="percent-undamaged"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-warning">
            <th colspan="7" style="text-align: end" class="sum-col">Suma :</th>
            <td class="damaged-undamaged-sum"></td>
            <td class="percent-sum"></td>
          </tr>
        </tfoot>
      </table>
    `,
  },
  Rzepak: {
    name: "rzepak",
    html: ` <table class="table table-bordered table-hover shadow">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th scope="col">Pomiar 1</th>
            <th>Pomiar 2</th>
            <th>Pomiar 3</th>
            <th>Pomiar 4</th>
            <th>Pomiar 5</th>
            <th>Pomiar 6</th>
            <th>Suma Pomiarów</th>
            <th>Udział Procentowy (%)</th>
          </tr>
        </thead>

        <tbody>
          <tr class="table-danger">
            <th>Uszkodzone</th>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="damaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-damaged"></td>
            <td class="percent-damaged"></td>
          </tr>
          <tr class="table-success">
            <th>Nieuszkodzone</th>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td>
              <input
                class="undamaged"
                type="number"
                inputmode="numeric"
                placeholder="Podaj wartość..."
                style="font-size: 1.2rem; padding: 0.5rem"
              />
            </td>
            <td class="sum-undamaged"></td>
            <td class="percent-undamaged"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-warning">
            <th colspan="7" style="text-align: end" class="sum-col">Suma :</th>
            <td class="damaged-undamaged-sum"></td>
            <td class="percent-sum"></td>
          </tr>
        </tfoot>
      </table>`,
  },
};
