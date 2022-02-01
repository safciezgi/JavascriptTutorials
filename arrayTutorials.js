const arr = [1,2,3,4]

const powerOfTwo = []

arr.forEach(num =>{
    powerOfTwo.push(num*num);
})
console.log(powerOfTwo);


//Map function:

const mapArr = arr.map(num => num * 3)
console.log(mapArr);


//Filter function

const filteredArr = arr.filter(num=>num>2)
console.log(filteredArr);


//Reduce function

const sum = arr.reduce((acc, num)=>{
    return acc + num;
})
console.log(sum);