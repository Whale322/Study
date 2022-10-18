const t1 = Date.now();

const calculateValue = (input: number): number => {
    const a = Math.pow(1 + 2.23606797749979, input);
    const b = Math.pow(1 - 2.23606797749979, input);
    const c = 2.23606797749979 * Math.pow(2, input);
    return Math.round((a - b) / c);
};


for (let n = 0; n < 21; ++n) {
    const value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}

const t2 = Date.now();
const dt = t2 - t1;

console.log(`Time: ${0.001 * dt}s`);