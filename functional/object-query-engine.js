
function whatIsInAName (objArr, sourceObj) {
 let sourceKeys = Object.keys(sourceObj);

 return objArr.filter((obj) => {
  return sourceKeys.every((key) => {
   return obj.hasOwnProperty(key) && obj[key] === sourceObj[key];
  });
 });
}

console.log(whatIsInAName(
 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
 { last: "Capulet" }
)); // Result: [ { first: 'Tybalt', last: 'Capulet' } ]
