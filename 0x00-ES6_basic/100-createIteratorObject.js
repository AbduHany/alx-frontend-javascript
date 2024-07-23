export default function createIteratorObject(report) {
  const departments = Object.values(Object.values(report)[0]);
  let depIdx = 0;
  let empIdx = 0;

  const iterator = {
    next() {
      if (depIdx < departments.length) {
        if (empIdx < departments[depIdx].length) {
          const value = departments[depIdx][empIdx];
          empIdx += 1;
          return {
            value,
            done: false,
          };
        }

        depIdx += 1;
        empIdx = 0;
        if (depIdx < departments.length) {
          const value = departments[depIdx][empIdx];
          empIdx += 1;
          return {
            value,
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
