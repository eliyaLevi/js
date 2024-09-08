const { raw } = require("express");

function arrow(int, x) {
  let arrow = "";
  for (let i = 0; i < int; i++) arrow += "-";
  if (x) {
    arrow += ">";
  } else {
    arrow = "<" + arrow;
  }
  return arrow;
}
console.log(arrow(5, false));

const checkNumbers1 = (...numbers) => {
  const max = numbers.reduce((previous, current) => {
    return previous > current ? previous : current;
  });
  return max;
};

console.log(checkNumbers1(1, 2, 3, 4, 5, 6));

const checkNumbers2 = (...numbers) => {
  if (numbers[3]) {
    console.log(numbers[3]);
  } else {
    console.log(numbers[numbers.length - 1]);
  }
};

console.log(checkNumbers2(1, 2, 3));

function invertedTriangle(int) {
  let x = " ";
  for (let i = 0; i < int; i++) {
    x += "*";
    console.log(x);
  }
}

console.log(invertedTriangle(4));

function triangular(int) {
    let x = " ";
    for (let i = 0; i < int; i++) {
        x += "*";
    }
    for(let i = 0; i < int; i++){
        console.log(x);
        x = x.slice(0,-1)
    }
  }
  
  console.log(triangular(4));


function multiplicationTable(int){
    rows = []
    for (let i = 1; i <= int; i++){
        const rowNumbers = []
        for (let j = 1; j <= int; j++){
            rowNumbers.push(i * j);       
    } 
    rows.push(rowNumbers)
}
console.table(rows);

}

multiplicationTable(4)

function reversInt(int){
     let string = int.toString();
     let str = ''
     for(let i = string.length -1 ; i >= 0; i--){
        str += string[i]
     }
     console.log(str);
     
}

console.log(reversInt(456))

