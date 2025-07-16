const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
    num * 2;
});

console.log(doubled);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
