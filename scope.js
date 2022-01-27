var num = 10;
var city = "Ankara";

num = 11;
city= "İstanbul";

let city1 = "Ankara";
// let city1 = "İstanbul"; //We can't declare different value if we define variable with "let";

function Message() {
    console.log(city);
    var name = "Ezgi";     
}

console.log(num);
console.log(city);
console.log(city1);

Message(); //Prints out the last variable (of city variable) in memory
//console.log(name); //We can't print out name variable from another scope

for (let i = 0; i < 10; i++) {
        
}
console.log(i);    //It prints out i value from out of the scope "10"

const example = "example";
console.log(example);

const cities = ["Ankara", "İstanbul"];
cities.push("İzmir");

//cities = ["Bursa", "Konya"]; //We can't declare varible if we define const first
console.log(cities);
