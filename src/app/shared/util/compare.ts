export function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true; // Check if both are strictly equal

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime(); // Compare Date objects by their timestamp
  }

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false; // If either is not an object or one is null
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Check if number of keys is different

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false; // Recursive comparison
  }

  return true;
}
