var a = 10;
n = new Array(1, "two", 3, "four", null, true, undefined); //Array
a = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
}; // Object
console.log("Variable is : " + a);
for (i in n) {
    console.log(i + " : " + n[i] + ": " + typeof (n[i]));
}
for (i in a) {
    console.log(i + " : " + a[i] + ": " + typeof (a[i]));
}

console.log(typeof(n)+"      "+ typeof(a));
var d = new Date("2004-10-30");
console.log(d)
