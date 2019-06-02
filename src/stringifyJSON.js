/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
*/

const stringifyJSON = (item) => {
  let result = ""
  const stringCheck = (item) =>{//Function for primitive value
    if(typeof item === 'number' || typeof item === 'boolean'){
      result = item.toString();
    } else if(typeof item === 'string' || typeof item === 'undefined'){
      result = `"${item}"`
    } else if(item === null){
      result = 'null';
    }
    return result;
  };

  const objectToString = (item) => {//Function for Array and Object
    if(item.length >= 0){
      if(item.length === 0){//Array case
        result += '[]';
      } else {
        result += '['
        for(let i = 0; i < item.length; i++){
          if(typeof item[i] !== 'object'){
            result += stringCheck(item[i]);
            if(item[i + 1] || typeof item[i + 1] === 'number'){
              result += ',';
            };
          } else {
            objectToString(item[i]);
            if(item[i + 1] || typeof item[i + 1] === 'number'){
              result += ',';
            };
          }
        }
        result += ']';
      }
    } else {// Object case
      if(Object.keys(item).length === 0){//empty object
        result += '{}';
      } else {
        let objectArray = Object.keys(item);
        for(const key of objectArray){
          if(objectArray[0] === key){//1st element
            result += '{' + stringCheck(key) + ':';
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
              if(objectArray.length !== 1){
                result += ',';
              };
            } else {
              if(objectArray.length !== 1){//if object has multiple key:value pairs
                result +=  stringCheck(item[key]) + ',';
              } else {//if objcet only have 1 key:pair
                result +=  stringCheck(item[key]);
              }
            }
          } else if (objectArray[objectArray.length -1] === key){//last element inside object
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
            } else {
              result += stringCheck(key) + ':' + stringCheck(item[key]);
            };
          } else {//rest of element inside object
            result += stringCheck(key) + ':';
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
              if(objectArray.length !== 1){
                result += ',';
              }
            } else {
              result += stringCheck(item[key]) + ',';
            }
          }
        };
        result += '}';
      }
    }
    return result;
  };

  //first check if item is primitive or object
  if(typeof item !== 'object' || item === null){
      return stringCheck(item);
    } else {
      for(const key in item){
        if(typeof item[key] === 'function'){
          return '{}';
        }
      }
      return objectToString(item);
  };
};
stringifyJSON({ a: [], c: {}, b: true });