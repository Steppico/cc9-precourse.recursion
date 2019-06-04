/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (value) => {
  // YOUR CODE HERE
  if (value === undefined) {
    return undefined;
  } else if (value === null) {
    return 'null';
  } else if (typeof value === "string") {
    return '"' + value + '"';
  } else if (typeof value === "number" || typeof value === "boolean")  {
    //surprisingly works as desired for booleans
    return '"' + value.toString(10) + '"';
  } else if (value instanceof Date) {
    return value.toISOString();
  } else if (Array.isArray(value)) {
    return '[' + value.reduce((result, item) => {
        return [...result, stringifyJSON(item)]
    }, []).join(',') + ']'
  } else if (typeof value === "object") {
    let stringafiableObject = {};
    Object.keys(value).forEach((key) => {
      if (typeof key !== "function" && key !== undefined && value[key] !== undefined && typeof value[key] !== "function") {
        stringafiableObject[key] = value[key];
      }
    })
    return '{' + Object.keys(stringafiableObject).reduce((result, key) => {
      return [...result, stringifyJSON(key) + ':' + stringifyJSON(stringafiableObject[key])]
    }, []).join(',') + '}';
  }
};
