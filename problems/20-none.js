/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

function none(array, cb) {

  // for (let i = 0; i < array.length; i++) {
  //   let el = array[i];

  //   if (cb(el)) {
  //     return false;
  //   }
  // }

  // return true;

  //using filter: if the
  let result = array.filter(el => {
    return cb(el)
  })
  //if it's ever true, the length will be at least 1 which will return a false
  return result.length === 0
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = none;
} catch (e) {
  return null;
}
