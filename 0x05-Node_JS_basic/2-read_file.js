const fs = require('fs');

const countStudents = (path) => {
  let content;
  try {
    content = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = {};
  content = data.toString().split('\n');
  content = content.filter((item) => item.length > 0);
  content.shift();

  content.forEach((item) => {
    if (item.length > 0) {
      const line = item.split(',');
      if (line[3] in students) {
        students[line[3]].push(line[0]);
      } else {
        students[line[3]] = [line[0]];
      }
    }
  });
  console.log(`Number of students: ${content.length}`);

  for (const field in subjects) {
    if (field) {
      const list = subjects[field]
      const LIST_OF_FIRSTNAMES = list.toString().replace(/,/g, ', ');
      console.log(`Number of students in ${field}: ${list.length}. List: ${LIST_OF_FIRSTNAMES}`);
    }
  }
};

module.exports = countStudents;
