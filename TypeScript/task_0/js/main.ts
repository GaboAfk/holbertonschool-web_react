interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "El",
    lastName: "capo",
    age: 69,
    location: "gg",
}

const student2: Student = {
    firstName: "El otro",
    lastName: "capo",
    age: 999,
    location: "gg?",
}

const studentList: Array<Student> = [student1, student2];

function studentTable(students: Array<Student>): void {
    const table: HTMLTableElement = document.createElement('table');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');
    table.appendChild(tbody);

    students.forEach((student) => {
        const row: HTMLTableRowElement = document.createElement('tr');

        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.location}</td>
        `

        // const firstNameCell: HTMLTableCellElement = document.createElement('td');
        // firstNameCell.innerText = student.firstName;

        // const locationCell:HTMLTableCellElement = document.createElement('td');
        // locationCell.innerText = student.location;

        // row.appendChild(firstNameCell);
        // row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    document.body.appendChild(table);
}

studentTable(studentList);