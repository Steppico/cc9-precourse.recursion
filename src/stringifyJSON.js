/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
*/

const stringifyJSON = (item) => {
  let result = "";

  const stringConverter = (item) =>{//Function for primitive value
    if(typeof item === 'number' || typeof item === 'boolean' || item === null){
      result = `${item}`;
    } else {
      result = `"${item}"`
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
            result += stringConverter(item[i]);
          } else {
            objectToString(item[i]);
          }
          if(item[i + 1] || typeof item[i + 1] === 'number'){
            result += ',';
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
            result += '{' + stringConverter(key) + ':';
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
              if(objectArray.length !== 1){
                result += ',';
              };
            } else {
              if(objectArray.length !== 1){//if object has multiple key:value pairs
                result +=  stringConverter(item[key]) + ',';
              } else {//if objcet only have 1 key:pair
                result +=  stringConverter(item[key]);
              }
            }
          } else if (objectArray[objectArray.length -1] === key){//last element inside object
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
            } else {
              result += stringConverter(key) + ':' + stringConverter(item[key]);
            };
          } else {//rest of element inside object
            result += stringConverter(key) + ':';
            if(typeof item[key] === 'object' && item[key] !== null){
              objectToString(item[key]);
              if(objectArray.length !== 1){
                result += ',';
              }
            } else {
              result += stringConverter(item[key]) + ',';
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
      return stringConverter(item);
    } else {
      for(const key in item){
        if(typeof item[key] === 'function'){
          return '{}';
        }
      }
      return objectToString(item);
  };
};

//test space
stringifyJSON({ a: [], c: {}, b: true });