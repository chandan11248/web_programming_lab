function generateTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const container = document.getElementById('tableContainer');

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = "Row " + (i + 1) + ", Col " + (j + 1);
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.innerHTML = '';
    container.appendChild(table);
}

function highlightEven() {
    const rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].classList.toggle('even-row');
        }
    }
}

function addRow() {
    const table = document.querySelector('table');

    if (!table) {
        alert("Please generate a table first!");
        return;
    }

    const newRow = table.insertRow();

    let colCount = 3;
    if (table.rows.length > 1) {
        colCount = table.rows[0].cells.length;
    } else {
        colCount = document.getElementById('cols').value;
    }

    const rowIndex = table.rows.length;

    for (let i = 0; i < colCount; i++) {
        const cell = newRow.insertCell();
        cell.innerText = "Row " + rowIndex + ", Col " + (i + 1);
    }
}

function deleteRow() {
    const table = document.querySelector('table');

    if (!table || table.rows.length === 0) {
        alert("No rows to delete!");
        return;
    }

    table.deleteRow(table.rows.length - 1);
}
