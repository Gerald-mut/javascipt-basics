// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

let accessAllowed = (age > 18) ? true : false;