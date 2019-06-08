/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!
  let l = new Date(Date.now()).toString()

*/
  
const stringifyJSON = (enne) => {
  console.log(enne)
  console.log(JSON.stringify(enne))
  // return JSON.stringify(enne)

  let open = "";
  let close = "";
  let result = [];

  function recursive(core) {
    if (typeof core === "number" || typeof core === "boolean" || core === null) {
      result.push(`` + core + ``);
    } else if (typeof core === "string") {
      result.push(`"` + core + `"`);
    } else if (Array.isArray(core)) {
      open += "[";
      close += "]"
      if (core.length === 0) {
        return;
      }
      for (let key of core) {
        recursive(key)
      }
    }
  }

  
  recursive(enne);
  return open + result.join(',') + close
}
