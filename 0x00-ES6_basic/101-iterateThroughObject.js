export default function iterateThroughObject(reportWithIterator) {
  let result = reportWithIterator.next();
  let str = '';
  let sepIdx = 0;
  while (!result.done) {
    if (sepIdx !== 0) str += ' | ';
    sepIdx += 1;
    str += result.value;
    result = reportWithIterator.next();
  }
  return (str);
}
