export default function hasValuesFromArray(set, arr) {
  const set1 = set;
  const set2 = new Set(arr);
  return set1.isSupersetOf(set2);
}
