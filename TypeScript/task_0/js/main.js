var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    location: 'Los Angeles'
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement('table');
    // Create table rows
    var headerRow = table.insertRow();
    var headerNames = ["First Name", "Location"];
    headerNames.forEach(function (name) {
        var headerCell = document.createElement('th');
        headerCell.textContent = name;
        headerRow.appendChild(headerCell);
    });
    // Create row for students in the students list
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        var locationCell = row.insertCell();
        locationCell.textContent = student.location;
    });
    // Append table to the document body
    document.body.appendChild(table);
});
