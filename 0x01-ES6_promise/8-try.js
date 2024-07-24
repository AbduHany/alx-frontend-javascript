export default function divideFunction(numerator, denominator) {
  try {
    if (!denominator) throw (new Error('cannot divide by 0'));
    return (numerator / denominator);
  } catch (error) {
    return error;
  }
}
