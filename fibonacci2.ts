const t1 = Date.now();

const calculateValue = (input: number): number => {
    if (input < 1) return 0;
    if (input < 2) return 1;
    return calculateValue(input - 2) + calculateValue(input - 1);
};

for (let n = 0; n < 21; ++n) {
    const value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}

const t2 = Date.now();
const dt = t2 - t1;

console.log(`Time: ${0.001 * dt}s`);