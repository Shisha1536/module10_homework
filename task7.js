const array = [1, 2, 3, 4, 5, null];
let even = 0;
let odd = 0;
let zero = 0;

array.forEach((element) => {
    if (element === 0){
        zero++;
    } else if (element !== null && typeof element !== NaN && typeof element !== 'string' && typeof element !== 'boolean'){
       element % 2 === 0 ? even++: odd++
    }
})

console.log(even);
console.log(odd);
if (zero > 0){
	console.log(zero);
}