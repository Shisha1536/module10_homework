let map = new Map();
map.set("1", "строка");
map.set(1, "число");
map.set(true, "истина");
map.set(false, "ложь");

console.log("Ключ - "+``)
for (let el of map.keys()){
    console.log("Ключ - "+el+", "+"значение - "+map.get(el));
}