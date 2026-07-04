const items = [
  {
    item: "T4 Soldier Boots",
    buy: 12000,
    sell: 18500
  },
  {
    item: "T4 Cleric Robe",
    buy: 21000,
    sell: 31500
  },
  {
    item: "T5 Bag",
    buy: 18000,
    sell: 25500
  },
  {
    item: "T6 Battleaxe",
    buy: 85000,
    sell: 119000
  }
];

const table = document.getElementById("marketTable");

table.innerHTML = "";

items.forEach(item => {

    const profit = (((item.sell-item.buy)/item.buy)*100).toFixed(1);

    table.innerHTML += `
        <tr>
            <td>${item.item}</td>
            <td>${item.buy.toLocaleString()}</td>
            <td>${item.sell.toLocaleString()}</td>
            <td style="color:lime;">+${profit}%</td>
        </tr>
    `;

});
