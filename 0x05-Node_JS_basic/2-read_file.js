const fs = require('fs');

const countStudents = (path) => {
  try {
    let fileContent = fs.readFileSync(path, 'utf8').toString().split('\n').slice(1, fileContent.length);
    let NUMBER_OF_STUDENTS = fileContent.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}