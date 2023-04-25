export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  return arrayOfStudents.filter((obj) => obj.location === city).map((obj) => {
    const newObj = { ...obj };
    const newStudentObj = newGrades.find((student) => student.studentId === obj.id);
    if (newStudentObj) {
      newObj.grade = newStudentObj.grade;
    } else {
      newObj.grade = 'N/A';
    }
    return newObj;
  });
}
