import getListStudents from "/home/okinamos/alx-backend-javascript/0x03-ES6_data_manipulation/0-get_list_students.js";
import getStudentsByLocation from "/home/okinamos/alx-backend-javascript/0x03-ES6_data_manipulation/2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
