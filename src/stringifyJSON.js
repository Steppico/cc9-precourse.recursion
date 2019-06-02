/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
*/

const stringifyJSON = (item) => {
  let result = ""
  const stringCheck = (item) =>{//primitive case
    if(typeof item === 'number' || typeof item === 'boolean'){//primitive case
      result = item.toString();
    } else if(typeof item === 'string' || typeof item === 'undefined'){
      result = `"${item}"`
    } else if(item === null){
      result = 'null';
    }
    return result;
  };

  const objectToString = (item) => {
    if(item.length >= 0){
      if(item.length === 0){
        result += '[]';
        return result;
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
    }
    return result;
  }
  if(typeof item !== 'object' || item === null){
    return stringCheck(item);
  };
  if(typeof item === 'object'){
    return objectToString(item);
  }
 return result;
};
