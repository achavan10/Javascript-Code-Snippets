/** PROBLEM STATEMENT
 *  CREATE AN FLAT OBJECT WITH KEY VALUE PAIR FROM COMPLEX OBJECT
 *  COMPLEX OBJECT KEY SHOULD BE CONCATENATED WITH _
 *  INPUT = {
 *      firstName: 'Akshay',
 *      lastName: 'Chavan',
 *      address: {
 *          city: 'Pune',
 *          state: 'Maharashtra',
 *          country: 'India'
 *      }
 *  };
 *  OUTPUT = {
 *      firstName: 'Akshay',
 *      lastName: 'Chavan',
 *      address_city: 'Pune',
 *      address_state: 'Maharashtra',
 *      address_country: 'India',
 *  };
 */

const input = {
  firstName: "Akshay",
  lastName: "Chavan",
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
};

function createFlatObject(obj, keyName = "") {
  let output = {};
  for (key in obj) {
    const newKey = keyName.length ? `${keyName}_${key}` : key;
    if (typeof obj[key] === "object") {
      output = { ...output, ...createFlatObject(obj[key], key) };
    } else {
      output[newKey] = obj[key];
    }
  }
  return output;
}

console.log("Flat object is : ", createFlatObject(input));
