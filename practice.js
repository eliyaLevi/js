const arr1 = [1,2,3,4]

let som1 = 0
for(let i = 0; i < arr1.length; i++ ){
    som1 += arr1[i]
}     
console.log(som1);

const arr2 = [1,2,3,4]

    let som2 = 1
    for(let i = 0; i < arr2.length; i++ ){
        som2 *= arr2[i]
    }     
    console.log(som2);

const arr3 = [1,2,3,4]
let som3 = 1
for(let i = 0; i < arr3.length; i++ ){
    som3 += arr3[i]
}     
console.log(som3/arr3.length);

let num4 = arr3.pop()
let num1 = arr3.shift()
arr3.push(num1)
arr3.unshift(num4)
console.log(arr3);

const arrCopy = [...arr3]
console.log(arrCopy);

function calculate(a, b){
    const add = a + b;
    const sub = a - b;
    const mult = a * b;
    const divide = a / b;
 return [add, sub, mult, divide]
}

const [add, sub, mult, divide] = calculate(10, 5)
console.log(divide);
console.log(sub);
console.log(add)
console.log(mult)

arr3.reverse()
console.log(arr3);

let max = 0
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] > max){
        max = arr3[i]
    }
}
console.log(max);

let duoble = []
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] %2 == 0){
        duoble.unshift(arr3[i])
    }
}
console.log(duoble);

const str = ['a', 'b', 'c', 'ddddddd'];

let string1 = str.join(" ")
console.log(string1);

let string2 = str.join(",")
console.log(string2);

let sumIndex = 0
let string3 = str.join("")
for(let i = 0; i < string3.length; i++){
    sumIndex += 1
}
console.log(sumIndex);

let upperCaseStr = str.map(x => x.toUpperCase());
console.log(upperCaseStr);

let longWords = str.filter(word => word.length > 6);
console.log(longWords);




























