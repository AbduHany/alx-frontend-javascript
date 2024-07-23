export default function createIteratorObject(report) {
  const departments = Object.values(Object.values(report)[0]);
  let depIdx = 0;
  let empIdx = 0;
  console.log(departments);
  const iterator = {
    next() {
      if (depIdx < departments.length) {
        if (empIdx < departments[depIdx].length) {
          empIdx += 1;
          return {
            value: departments[depIdx][empIdx - 1],
            done: false,
          };
        }

        depIdx += 1;
        empIdx = 0;
        if (depIdx < departments.length) {
          empIdx += 1;
          return {
            value: departments[depIdx][empIdx - 1],
            done: false,
          };
        }
        return { done: true };
      }

      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
  return iterator;
}
