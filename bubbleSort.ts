const t1 = Date.now();

function bubbleSort(array:number[]):number[]{
array = array.slice();
console.log(array);
for( let i=0;i<array.length;i++){
for(let j=0;j<array.length-1;j++){
if(array[j] > array[j+1]){
[array[j], array[j+1]] =[array[j+1],array[j]];
console.log(array);
}
}
}

return array;
}

bubbleSort([32,21,7,89,56,909,109]);

const t2 = Date.now();
const dt = t2-t1;

console.log(`Time: ${0.001 * dt}s`);