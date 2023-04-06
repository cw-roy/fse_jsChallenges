const mountains = [
  { name: 'Annapurna I', height: 8091 },
  { name: 'Cho Oyu', height: 8188 },
  { name: 'Dhaulagiri I', height: 8167 },
  { name: 'K2', height: 8611 },
  { name: 'Kangchenjunga', height: 8586 },
  { name: 'Lhotse', height: 8516 },
  { name: 'Makalu', height: 8485 },
  { name: 'Manaslu', height: 8163 },
  { name: 'Mount Everest', height: 8848 },
  { name: 'Nanga Parbat', height: 8126 },
];

function displayMountainTable() {
  const tbody = document.querySelector('#mountain-table tbody');
  for (let i = 0; i < mountains.length; i += 2) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${mountains[i].name}</td><td></td><td>${mountains[i].height}</td>`;
    if (i + 1 < mountains.length) {
      tr.innerHTML += `<td>${mountains[i + 1].name}</td><td></td><td>${mountains[i + 1].height}</td>`;
    } else {
      tr.innerHTML += '<td></td><td></td><td></td>';
    }
    tbody.appendChild(tr);
  }
}


function findTallestMountain() {
  const tallestMountain = mountains.reduce((acc, mountain) => {
    return mountain.height > acc.height ? mountain : acc;
  }, { name: '', height: 0 });

  const rows = document.querySelectorAll('#mountain-table tbody tr');
  for (const row of rows) {
    const name = row.querySelector('td:first-child').textContent;
    const mountain = mountains.find(mountain => mountain.name === name);
    if (mountain) {
      const heightCell = row.querySelector('td:last-child');
      heightCell.textContent = mountain.height;
    }
  }

  document.getElementById('output').innerHTML = `The tallest mountain is ${tallestMountain.name} at a height of ${tallestMountain.height} meters.`;
}

displayMountainTable();
