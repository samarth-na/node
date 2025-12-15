export function atderate() {
    let n = 6;
    let str = "@";

    for (let i = 1; i <= n; i++) {
        process.stderr.write(i + str.repeat(i));
    }
    process.stderr.write("\n");
}
function xy() {
    let n = 9;
    for (let i = 0; i < n; i = i + 2) {
        // let first = ;
        // let second = i + 2;
        process.stderr.write(`xy${i + 1}${i + 2} `);
    }
}
xy();
