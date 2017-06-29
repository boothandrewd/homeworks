
// madLib
function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`;
}

console.log(madLib('make', 'best', 'guac'));


// isSubString
function isSubstring(searchString, subString) {
  for(let i = 0; i < searchString.length - subString.length; i++){
    if(searchString.slice(i, i + subString.length) === subString){
      return true;
    }
    return false;
  }
}

console.log(isSubstring("time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));


// fizzBuzz
function fizzBuzz(array){
  let fizzBuzzes = [];
  array.forEach(function(el){
    divisibleBy3 = el % 3 === 0;
    divisibleBy5 = el % 5 === 0;
    divisibleByBoth = divisibleBy3 && divisibleBy5;

    if((divisibleBy3 || divisibleBy5) && !divisibleByBoth){
      fizzBuzzes.push(el);
    }
  });

  return fizzBuzzes;
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 9, 10, 11, 15, 18, 20, 30]));


// isPrime
function isPrime(number){
  if(n < 2){
    return false;
  }

  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      return false;
    }
  }
  
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));


// sumOfNPrimes
function sumOfNPrimes(n){
  let count = 0;
  let sum = 0;
  for(let i = 2; count < n; i++){
    if(isPrime(i)){
      sum += i;
      count += 1;
    }
  }

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
