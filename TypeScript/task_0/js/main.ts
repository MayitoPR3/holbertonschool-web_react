interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};

let student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    location: 'Los Angeles',
};

let studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement('table');

    // Create table rows
    const headerRow = table.insertRow();
    const headerNames = ["First Name", "Location"];
    headerNames.forEach((name) => {
        const headerCell = document.createElement('th');
        headerCell.textContent = name;
        headerRow.appendChild(headerCell);
    });

    // Create row for students in the students list
    studentsList.forEach((student) => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    });

    // Append table to the document body
    document.body.appendChild(table);
});
