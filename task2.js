let x;
if (typeof x === 'number') {
    console.log("x -" + typeof x)
} else if (typeof x === 'string') {
    console.log("x -" + typeof x);
} else if (typeof x === 'true' || typeof x === 'false') {
    console.log("x -" + typeof x);
} else  {
    console.log("Тип x не определён");
}