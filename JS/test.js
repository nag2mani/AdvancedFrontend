// let colors1 = ['red', 'green', 'blue', 'yellow', 'pink'];
// // Destructuring with skipping
// let [firstColor, , thirdColor] = colors1;
// console.log(firstColor); // red
// console.log(thirdColor); // blue


// let colors = ['red', 'green', 'blue', 'yellow', 'pink']
// let [f, , , ,s] = colors;
// console.log(f)
// console.log(s)


const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(rest); // { c: 3, d: 4 }

