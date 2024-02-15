/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  if (
    objA === null ||
    typeof objA !== "object" ||
    objB === null ||
    typeof objB !== "object"
  ) {
    throw new Error("Both parameters must be objects.");
  }
  return Object.assign({}, objA, objB);
}

export {};
