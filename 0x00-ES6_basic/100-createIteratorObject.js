export default function createIteratorObject(report) {
  let answer = [];
  for (const value of Object.values(report.answer)) {
    answer = [...answer, ...value];
  }
  return answer;
}
