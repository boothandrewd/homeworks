
function Dog() {}
let d1 = new Dog();
let d2 = new Dog();

d1.woof = function() {
  console.log('woof');
};

d1.woof();
// d2.woof();    // Throws an error

Dog.prototype.woof = function() {
  console.log('WOOF');
}

d1.woof();
d2.woof();
