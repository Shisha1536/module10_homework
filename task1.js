let x = prompt();
if (typeof +x !== NaN && typeof +x !== 'number') {    
    console.log("Упс, кажется, вы ошиблись");
} else {
    console.log(+x % 2 === 0 ? "Even" : " Odd");
}