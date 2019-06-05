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

  const errorChecker = (item) => {
    for(const key in item){
      if(typeof item[key] === "object"){
        errorChecker(item[key]);
      } else if(typeof item[key] === "function" || typeof item === "undefined"){
        result = true;//mark result true to return '{}';
        break;
      }
    };
  };

  function innerJSON(item) {
  if(typeof item !== 'object' || item === null){//primitive case or error
      return stringConverter(item);
    } else if(item.length >= 0){//Array case
    if(item.length === 0){
      return result = '[]';
    };
    result += '[';
    for(let i = 0; i < item.length; i++){
      result += stringifyJSON(item[i]) + ',';
    }
    result = result.slice(0, result.length-1)
    result += ']';
    return result;
  } else if(Object.keys(item).length >= 0){//Object case
    if(Object.keys(item).length === 0){
      return result = '{}';
    };
    result += '{';
    for(const key in item){
      result += stringifyJSON(key) + ':' + stringifyJSON(item[key]) + ',';
      }
    result = result.slice(0, result.length-1) 
    result += '}'
    return result;
  };
};

//invoke error check, if pass the test, then start conversion.
errorChecker(item);
if(result){
  return '{}';
} else {
  return innerJSON(item);
};

};