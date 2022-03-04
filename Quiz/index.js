function makePattern(num, char) {
    let output = [];
    for (let i = 0; i < num; i++) {
        let sub = [];
        for (let j = 0; j < num; j++) {
            sub.push(char);
        }
        output.push(sub);
    }
    return output;
}
console.log(makePattern(4, "+"));

function makePattern1(num, char) {
    let output = [];
    let sub = [];
    for (let i = 0; i < num; i++) {
        sub.push(char);
        output.push(sub);
    }
    return output;
}
console.log(makePattern1(4, "+"));