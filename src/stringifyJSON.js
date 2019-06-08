  /* exported stringifyJSON */

  /*

  What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
    let l = new Date(Date.now()).toString()

  */
    
  const stringifyJSON = (value) => {
  console.log(value)
    let result = [];

    function recursive(core) {
      if (typeof core === "number" || typeof core === "boolean" || core === null) {
        result.push(recursDoubleQuotes(core));
      } else if (typeof core === "string") {
        result.push(recursSingleQuotes(core));
      } else if (Array.isArray(core)) {
        recursArray(core);
      } else if (typeof core === "object") {
        recursObj(core);
      }
    }

    function recursObj(obj) {
      if(Object.keys(obj).length === 0) {
        result.push("{}")
      } else {
        return "ciao"
      }
    }

    function recursDoubleQuotes(double) {
      return `` + double + ``;
    }

    function recursSingleQuotes(single) {
      return `"` + single + `"`
    }

    function recursArray(arr) {
      if (arr.length===0) {
        result.push("[]");
      };
      for (let i of arr) {
        if (i === arr[0]) {
        result.push("[");
        }
        if (Array.isArray(i)) {
          recursArray(i);
          if (i !== arr[arr.length-1]) {
            result.push(",")
          }
        } else {
          if (i === arr[arr.length-1]) {
            if (typeof i === "string") {
              result.push(recursSingleQuotes(i));
            } else {
              result.push(i)
            }
          } else {
            result.push(i+",");
          }
        }
        if (i === arr[arr.length-1]) {
          result.push("]");
        }
      }
    }
      



  recursive(value);
  return result.join('');
  }
