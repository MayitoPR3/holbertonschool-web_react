interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    location: 'Los Angeles',
};

const studentsList: Array<Student> = [student1, student2];
