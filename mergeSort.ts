const t1 = Date.now();

function mergeSort(arr:number[]):number[]{
if(arr.length <= 1){
return arr;
}

const half:number = Math.floor(arr.length/2);
const first:number[] = mergeSort(arr.slice(0,half));
const second:number[] = mergeSort(arr.slice(half));

return merge(first, second);
}

function merge(a:number[], b:number[]):number[]{
const c:number[] = [];
while(a.length && b.length){
if(a[0]<b[0]){
c.push(a.shift()!);
}else{
c.push(b.shift()!);
}
}

while(a.length){
c.push(a.shift()!);
}

while(b.length){
c.push(b.shift()!);
}

return c;
}

console.log(mergeSort([4, 53, 22, 10, 2, 74, 91, 33, 25, 14, 19, 100, 256, 81, 7, 300]));

const t2 = Date.now();
const dt = t2-t1;

console.log(`Time: ${0.001 * dt}s`);