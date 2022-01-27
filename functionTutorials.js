function Hi() {
    console.log("Hello");
}
Hi();


const Hi2 = () => console.log("Hello"); //function another version
Hi2();


const Hi3 = (msg) => {
    console.log(msg);
}
Hi3("Hello World");


var sum = (num1, num2) => console.log(num1 + num2);
sum(3, 5);