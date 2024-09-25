import { number } from "yargs";

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    [propName: string]: any;
    /* eslint-enable @typescript-eslint/no-explicit-any */
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
/* eslint-enable @typescript-eslint/class-name-casing */

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    /* firstName: string;
    lastName: string; */
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}