let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);

    if (name === "" || isNaN(math) || isNaN(science) || isNaN(english)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const total = math + science + english;
    const percentage = (total / 300) * 100;

    let grade = "";
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    const student = {
        name: name,
        total: total,
        percentage: percentage.toFixed(2),
        grade: grade
    };

    students.push(student);
    addStudentToTable(student);

    document.getElementById('name').value = '';
    document.getElementById('math').value = '';
    document.getElementById('science').value = '';
    document.getElementById('english').value = '';
}

function addStudentToTable(student) {
    const tableBody = document.querySelector('#resultTable tbody');
    const row = document.createElement('tr');

    if (student.grade === "F") {
        row.classList.add('fail');
    } else {
        row.classList.add('pass');
    }

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.total}</td>
        <td>${student.percentage}%</td>
        <td>${student.grade}</td>
    `;

    tableBody.appendChild(row);
}
