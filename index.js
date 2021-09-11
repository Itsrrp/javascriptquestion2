//prime number program method1
function primeNumber(a) {
    result:
    for (let i = 2; i < a; i++) {
        for (let j = 2; j < i; j++) {
           if(i % j == 0) continue result;
        }
        console.log(i);
    }
}

//prime number program method2. 
function primeNumber(a) {
    for (let i = 2; i < a; i++) {
        if(!showPrime(i)) continue;
    }
}
function showPrime(a) {
    for (let j = 0; j < i; j++) {
        if (a % i == 0) return false;
    }
    return true;
}

//prime number program yes and no
function identifyPrime(num) {
   for(var i = 2; i < num; i++) {
       if(num % i === 0) { 
        return console.log("No");
       }
   } 
   if (num > 1) { 
     return console.log("Yes");
   }
}

//any power value method1.
function power(x, y) {
    return x**y;
  }

//any power value method2.
function power(a, b){
    var store = 1;
    for (let i=0; i<b; i++) {
        store *= a;
    }
    console.log(store);        

}  

//any power value method3.
function power(a, b) {
    if (b < 0) return NaN;
    if (Math.round(b) != b) return NaN;
  
    let store = 1;
  
    for (let i = 0; i < b; i++) {
      store *= a;
    }
  
    return store;
  }

//any power value method4 using arrow function
const power = (a, b) => a**b;

//add two num using arrow function
var add = (a, b) => a+b;
add(3, 2);

//substract two num using arrow function
var substract = (a, b) => a-b;
  
//multiply two num using arrow function.
var multiply = (a, b) => a*b;

//divide two num using arrow function.
var divide = (a, b) => a/b;

//square two num using arrow function.
const square = (a) => a**2;

//cube two num using arrow function.
const cube = (a) => a**3;

//addition program using objet method and print using bracket notation.
var sum = {
    a : 5,
    b : 6
};
console.log(sum.a + sum.b);

//subration program using object method and print using bracket notation.
var sub = {
    x : 8,
    y : 5
};
console.log(sub.x + sub.y);

//multiplication program using object method and print using bracket notation.
var mul = {
    a : 5,
    b : 6
};
console.log(mul.a * mul.b);

//divide program using object method and print using bracket notation.
var div = {
    a : 9,
    b : 3
};
console.log(div.a / div.b); 

//square program using object method and print using bracket notation.
var square = {
    a : 5
};
console.log(square.a ** 2);

//square program using object method and print using bracket notation.
var cube = {
    a : 6
};
console.log(cube.a ** 3);

//print sum of even number using function
function sumOfEvenNumber(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

//print sum of odd number using function
function sumOfOddNumber(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        if(i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
 
