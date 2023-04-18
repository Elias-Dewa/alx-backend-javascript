export default function createIteratorObject(report) {
  let answer = [];
  for (const value of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...value];
  }
  return answer;
}
