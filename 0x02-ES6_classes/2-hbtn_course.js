export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name.constructor !== String) {
      throw new TypeError('Name must be a string');
    } else if (length.constructor !== Number) {
      throw new TypeError('Length must be a number');
    } else if (students.constructor !== Array) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (val.construct !== String) throw new TypeError('Name must be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (val.construct !== Number) throw new TypeError('Length must be a number');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (val.construct !== Array) throw new TypeError('Students must be an array');
    this._students = val;
  }
}
