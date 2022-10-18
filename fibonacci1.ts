const t1 = Date.now();

const calculateValue = (number: number): number => {
    if (number < 1) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 1; i < number; ++i) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
};

for (let n = 0; n < 21; ++n) {
    const value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}

const t2 = Date.now();
const dt = t2 - t1;

console.log(`Time: ${0.001 * dt}s`);