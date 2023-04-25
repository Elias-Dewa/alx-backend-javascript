export default function getStudentIdsSum(arrayOfStudents) {
  return arrayOfStudents.reduce((acc, student) => acc + student.id, 0);
}
