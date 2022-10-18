const t1 = Date.now();

const searchIndex = (array: number[], value: number): number => {
let index = 0;
let limit = array.length - 1;
while (index <= limit) {
const point = Math.ceil((index + limit) / 2);
const entry = array[point];
if (value > entry) {
index = point + 1;
continue;
}
if (value < entry) {
limit = point - 1;
continue;
}
return point;
}
return -1;
};

const array: number[] = [4, 5, 7, 11, 12, 15, 15, 21, 40, 45];
const index: number = searchIndex(array, 15);

console.log(index);

const t2 = Date.now();
const dt = t2-t1;

console.log(`Time: ${0.001 * dt}s`); 