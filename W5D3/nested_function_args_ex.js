
function outer(a, b){
  process.stdout.write('Outer args: ');
  console.log(arguments);

  function inner(c){
    console.log(a);
    console.log(c);
    process.stdout.write('Inner args: ');
    console.log(arguments);
  }

  inner(b);
}

outer(1, 2);
/* Prints: */
// Outer args: { '0': 1, '1': 2 }
// 1
// 2
// Inner args: { '0': 2 }
