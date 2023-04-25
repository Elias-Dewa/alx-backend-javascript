export default function getListStudentIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) return [];
  return arrayOfStudents.map((obj) => obj.id);
}
