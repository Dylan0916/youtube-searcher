export function uniqueArray<T = any>(targetAry: T[]) {
  const resultAry = targetAry.filter(
    (v, index, theAry) => theAry.indexOf(v) === index
  );

  if (targetAry.length === resultAry.length) {
    return targetAry;
  }

  return resultAry;
}
