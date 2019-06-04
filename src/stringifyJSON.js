/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
*/

const stringifyJSON = (item) => {
  let result = "";

  const stringConverter = (item) =>{//Function for primitive value
    if(typeof item === 'number' || typeof item === 'boolean' || item === null){
      result += `${item}`;
    } else {
      result += `"${item}"`
    }
    return result;
  };
  // const arrayToString = (item) => {
  //   if(item.length >= 0){
  //     if(item.length === 0){//Array case
  //       result += '[]';
  //     } else {
  //       result += '['
  //       for(let i = 0; i < item.length; i++){
  //         if(typeof item[i] !== 'object'){
  //           result += stringConverter(item[i]);
  //         } else {
  //           arrayToString(item[i]);
  //         }
  //         if(item[i + 1] || typeof item[i + 1] === 'number'){
  //           result += ',';
  //         }
  //       }
  //       result += ']';
  //     }
  //   }
  //   return result;
  // };

      // } else {// Object case
      //   if(Object.keys(item).length === 0){//empty object
    //     result += '{}';
    //   } else {
    //     let objectArray = Object.keys(item);
    //     for(let i = 0; i < objectArray.length; i++){
    //       if(i===0){
    //         result += '{' + stringOrObject(objectArray[i]); + ':' + ;
    //       } else if(i === objectArray.length-1){
            
    //       }
    //     }
    //     for(const key of objectArray){
    //       if(objectArray[0] === key){//1st element
    //         result += '{' + stringConverter(key) + ':';
    //         if(typeof item[key] === 'object' && item[key] !== null){
    //           objectToString(item[key]);
    //           if(objectArray.length !== 1){
    //             result += ',';
    //           };
    //         } else {
    //           if(objectArray.length !== 1){//if object has multiple key:value pairs
    //             result +=  stringConverter(item[key]) + ',';
    //           } else {//if objcet only have 1 key:pair
    //             result +=  stringConverter(item[key]);
    //           }
    //         }
    //       } else if (objectArray[objectArray.length -1] === key){//last element inside object
    //         if(typeof item[key] === 'object' && item[key] !== null){
    //           objectToString(item[key]);
    //         } else {
    //           result += stringConverter(key) + ':' + stringConverter(item[key]);
    //         };
    //       } else {//rest of element inside object
    //         result += stringConverter(key) + ':';
    //         if(typeof item[key] === 'object' && item[key] !== null){
    //           objectToString(item[key]);
    //           if(objectArray.length !== 1){
    //             result += ',';
    //           }
    //         } else {
    //           result += stringConverter(item[key]) + ',';
    //         }
    //       }
    //     };
    //     result += '}';
    //   }

  //first check if item is primitive or object
  if(typeof item !== 'object' || item === null){
      return stringConverter(item);
    } else if(item.length >= 0){
      result += '[';
      for(let i = 0; i < item.length; i++){
        result += stringifyJSON(item[i]);
        if(i !== item.length-1){
          result += ',';
        }
      }
      result += ']';
      return result;
    } else if(Object.keys(item) >= 0){
      result += '{', objArray = Object.keys(item);
      for(let i = 0; i < objArray.length; i++){
        result += stirngifyJSON(key) + ':' + stringifyJSON(objArray[key]);
        if(i !== objArray.length-1){
          result += ',';
        }
      }
      result += '}';
      return result;
    } else {
      return '{}';
    }
};

//test space
console.log(stringifyJSON(100000));
console.log(stringifyJSON(true));
console.log(stringifyJSON(false));
console.log(stringifyJSON(null));
console.log(stringifyJSON("Code Chrysalis"));
console.log(stringifyJSON([]));
console.log(stringifyJSON([10000]));
console.log(stringifyJSON(["yan"]));
console.log(stringifyJSON([10000, "kani"]));
console.log(stringifyJSON([1, 2, 1000, 0, -1, -3, -3.14, 3.14, 0.1099999, 1000.9999]));
console.log(stringifyJSON([[[["rachel"]]]]));
console.log(stringifyJSON([10000, [[1, 2, 3, 4], 5, 8]]));
console.log(stringifyJSON({}));
console.log(stringifyJSON({ a: "is for apple" }));
console.log(stringifyJSON({ foo: true, bar: false, baz: null }));
console.log(stringifyJSON({ "boolean, true": true, "boolean, false": false, null: null }));
console.log(stringifyJSON({ a: { b: "c" } }));
console.log(stringifyJSON({ a: ["b", "c"] }));
console.log(stringifyJSON([{ a: "b" }, { c: "d" }]));
console.log(stringifyJSON({ a: [], c: {}, b: true }));
