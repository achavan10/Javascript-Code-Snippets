/** PROBLEM STATEMENT
 * CREATE AN OBJECT USING TWO ARRAYS AS KEY-VALUE PAIR
 */

const array1 = [ 'name', 'rank', 'year', 'hobbies' ];
const array2 = [ 'Akshay Chavan', 10, 2023, ['play games', 'explore new places']];

// Create object using reduce method
function createObjectUsingReduce(a1, a2) {
    let obj = {};
    a1.reduce((acc, value, index) => {
        obj[value] = a2[index];
        return obj;
    }, obj);
    return obj;
}

// Create Object using simple for loop
function createObjectUsingForLoop(a1, a2) {
    let obj = {};
    for (let i = 0; i < a1.length; i++) {
        obj[a1[i]] = a2[i];
    }
    return obj;
}

console.log('Object using reduce is', createObjectUsingReduce(array1, array2));
console.log('Object using for loop is', createObjectUsingForLoop(array1, array2));