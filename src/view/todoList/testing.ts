// var testing: string = "kiran";

// interface Details {
//   name?: string;
//   Age?: number;
//   place?: string;
// }

// var user: Details = {
//   name: "kiran",
//   Age: 26,
//   place: "Kayankulam",
// };

// var admins: Details = {
//   name: "IED",
//   Age: 22,
// };

// const newArr: (string | number | boolean)[] = ["hello", 1, "hi ", true];

// function consoleName(user: Details) {
//   console.log(user?.name);
// }

// consoleName(user);
// console.log({ user, admins });

// function addNumber(num1: any | number, num2: any | number): any | number {
//   return num1 + num2;
// }

// addNumber(1, 23);

// type StudentType = {
//   name: string;
//   age: number;
//   role: string;
// };

// type TeacherType = {
//   name: string;
//   age: number;
//   role: string;
//   experiencedYear: number;
// };

// let studentDetails: StudentType = {
//   name: "Student 1 ",
//   age: 20,
//   role: "Student",
// };

// let teacherDetails: TeacherType = {
//   name: "Teacher 1 ",
//   age: 25,
//   role: "Physics Teacher",
//   experiencedYear: 5,
// };

// function getRole<T>(item: T): T {
//   return item;
// }

// const student = getRole<StudentType>(studentDetails);
// const teacher = getRole<TeacherType>(teacherDetails);

// console.log(student?.name);
// console.log(teacher?.experiencedYear);

type UserType = {
  name: string;
  age: number;
  role: string;
  address: string;
  pincode: number;
  street: string;
};

const userDetails: Pick<UserType, "name" | "age" | "role"> = {
  name: "hello",
  age: 67,
  role: "user",
};
