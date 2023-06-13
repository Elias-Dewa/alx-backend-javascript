const fs = require('fs');

const countStudents = (path) => {
  let fileContent;
  try {
    fileContent = fs.readFileSync(path, 'utf8').toString();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  fileContent = fileContent.split('\n').filter((line) => line);

  let NUMBER_OF_STUDENTS = fileContent.length;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  fileContent = fileContent.slice(1);
  const fields = {};
  for (const data of fileContent) {
    const student = data.split(',');

    if (!fields[student[3]]) fields[student[3]] = [];
    fields[student[3]].push(student[0]);
  }
  for (const field in fields) {
    if (field) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(',')}`);
    }
  }
};

module.exports = countStudents;
