/*** Objects ***/
// in vs hasOwnProperty
var ob = {
	own: 'ownProperty'
};
console.log('own' in ob);                   // true
console.log('toString' in ob);              // true
console.log(ob.hasOwnProperty('own'));      // true
console.log(ob.hasOwnProperty('toString')); // false

// Enumeration. (defined by internal property [[Enumerable]])