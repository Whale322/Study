const t1 = Date.now();

function insertionSort<T>(list: T[]): T[] {

IndexIterator:
for (let i = 1; i < list.length; i++) {

const valueToSort = list[i];

InsertionIterator:
for (let j = i - 1; j >= 0; j--) {
if (valueToSort >= list[j]) {
list[j + 1] = valueToSort;
continue IndexIterator;
} else {
list[j + 1] = list[j];
list[j] = valueToSort;
continue InsertionIterator;
}
}
}

return list;
}

const numbers = [1, 43, 6, 346, 89, 1, 7];
console.log(insertionSort(numbers));

const t2 = Date.now();
const dt = t2-t1;

console.log(`Time: ${0.001 * dt}s`);