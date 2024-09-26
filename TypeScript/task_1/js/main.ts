// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // Can only be set during initialization
    readonly lastName: string;  // Can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;

    // Index signature to allow dynamic properties
    [key: string]: any; // Allows additional properties with any type
}

// Function to create a new Teacher
function createTeacher(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    additionalProperties?: { [key: string]: any }
): Teacher {
    const teacher: Teacher = {
        firstName,
        lastName,
        fullTimeEmployee,
        location,
        yearsOfExperience,
        ...additionalProperties // Spread to add additional properties
    };

    return teacher;
}

// Create a Teacher object
const teacher1: Teacher = createTeacher(
    "Alice",
    "Johnson",
    true,
    "San Francisco",
    5,
    { contract: true, department: "Math" }
);

// Create another Teacher object with different attributes
const teacher2: Teacher = createTeacher(
    "Bob",
    "Smith",
    false,
    "New York",
    undefined,
    { contract: false, subject: "Science" }
);
