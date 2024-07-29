export default function getListStudents() {
  const ids = [1, 2, 5];
  const firstNames = ['Guillame', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push({
      id: ids[i],
      firstName: firstNames[i],
      location: locations[i],
    });
  }
  return arr;
}
