export const tables = {
  Pszenica: {
    name: "Pszenica",
    html: ` <table>
      <thead>
        <th></th>
        <th>Pomiar 1</th>
        <th>Pomiar 2</th>
        <th>Pomiar 3</th>
        <th>Pomiar 4</th>
        <th>Pomiar 5</th>
        <th>Pomiar 6</th>
        <th>Suma Pomiarów</th>
        <th>Udział Procentowy (%)</th>
      </thead>

      <tbody>
        <tr>
          <th>Uszkodzone</th>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td class="sum-damaged"></td>
          <td class="percent-damaged"></td>
        </tr>
        <tr>
          <th>Nieuszkodzone</th>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td class="sum-undamaged"></td>
          <td class="percent-undamaged"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="7" style="text-align: end" class="sum-col">Suma :</th>

          <td class="damaged-undamaged-sum"></td>
          <td class="percent-sum"></td>
        </tr>
      </tfoot>
    </table>'
    `,
  },

  Kukurydza: {
    name: "kukurydza",
    html: ` <table>
      <thead>
        <th></th>
        <th>Pomiar 1</th>
        <th>Pomiar 2</th>
        <th>Pomiar 3</th>
        <th>Pomiar 4</th>
        <th>Pomiar 5</th>
        <th>Pomiar 6</th>
        <th>Suma Pomiarów</th>
        <th>Udział Procentowy (%)</th>
      </thead>

      <tbody>
        <tr>
          <th>Uszkodzone</th>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="damaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td class="sum-damaged"></td>
          <td class="percent-damaged"></td>
        </tr>
        <tr>
          <th>Nieuszkodzone</th>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td>
            <input
              class="undamaged"
              type="number"
              placeholder="Podaj wartość..."
            />
          </td>
          <td class="sum-undamaged"></td>
          <td class="percent-undamaged"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="7" style="text-align: end" class="sum-col">Suma :</th>

          <td class="damaged-undamaged-sum"></td>
          <td class="percent-sum"></td>
        </tr>
      </tfoot>
    </table>'
    `,
  },
  rzepak: {
    name: "rzepak",
    html: "Dzień Dobry",
  },
};
