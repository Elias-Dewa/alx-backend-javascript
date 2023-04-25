export default function getStudentsByLocation(arrayOfStudents, city) {
  return arrayOfStudents.filter((obj) => obj.location === city);
}
