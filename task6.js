const numbers = [1, 2, 3, 4, 5, 6];
const unique = Array.from(new Set(numbers));
if(numbers.length === unique.length) {
    console.log("false");
} else {
    console.log("true");
}