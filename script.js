const items = [
  { tier:"T4", enchant:".0", item:"Soldier Boots", buy:12000, sell:18500 },
  { tier:"T4", enchant:".1", item:"Soldier Boots", buy:25000, sell:36000 },
  { tier:"T5", enchant:".0", item:"Cleric Robe", buy:45000, sell:68000 },
  { tier:"T6", enchant:".2", item:"Battleaxe", buy:180000, sell:265000 },
  { tier:"T7", enchant:".3", item:"Bear Paws", buy:950000, sell:1350000 },
  { tier:"T8", enchant:".1", item:"Shadowcaller", buy:1200000, sell:1750000 }
];

const table = document.getElementById("marketTable");
const search = document.getElementById("search");
const tier = document.getElementById("tier");
const enchant = document.getElementById("enchant");

function render(){

    table.innerHTML="";

    let data = items.filter(i=>{

        const cocokNama =
        i.item.toLowerCase().includes(search.value.toLowerCase());

        const cocokTier =
        tier.value==="ALL" || i.tier===tier.value;

        const cocokEnchant =
        enchant.value==="ALL" || i.enchant===enchant.value;

        return cocokNama && cocokTier && cocokEnchant;

    });

    data.sort((a,b)=>{

        const profitA=((a.sell-a.buy)/a.buy);
        const profitB=((b.sell-b.buy)/b.buy);

        return profitB-profitA;

    });

    data.forEach(i=>{

        const profit=((i.sell-i.buy)/i.buy*100).toFixed(1);

        table.innerHTML += `
        <tr>
            <td>${i.tier} ${i.item} ${i.enchant}</td>
            <td>${i.buy.toLocaleString()}</td>
            <td>${i.sell.toLocaleString()}</td>
            <td style="color:lime;">${profit}%</td>
        </tr>
        `;

    });

}

render();

search.oninput=render;
tier.onchange=render;
enchant.onchange=render;
