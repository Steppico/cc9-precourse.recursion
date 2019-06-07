/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (n) => {
  let x = document.getElementsByClassName(n)
  let l = new Date(Date.now()).toLocaleString()
  console.log("guarda qua", typeof l, l)
  console.log(x[0])
  console.log(x[1])
  console.log(n)
  let result = [];
  
  function recursive(tag) {
    console.log("taggo", tag)
    console.log("ahehm", tag.className, tag.className===n)
    if (tag.className === n) {
      console.log("result prima aggiunta", result)
      result.push(tag)
      console.log("result dopo aggiunta", result)
    }
      if (tag.hasChildNodes()) {
        console.log("Child: T.", tag.childNodes);
        return recursive(tag.firstChild);
      } else if (tag.nextSibling) {
        console.log("Child: F.", tag)
        console.log("Sibling: T.!", typeof tag.nextSibling, tag.nextSibling)
        return recursive(tag.nextSibling);
      } else if (!tag.nextSibling) {
        let savetag = tag;
        console.log("Sibling: F.")
        tag = tag.parentElement;
        console.log("Back to Parent:", tag)
        tag = tag.nextSibling;
        console.log("Parent Sibling: T.", tag)
        if (tag === null) {
          console.log("Parent Sibling: F.", tag)
          return recursive(savetag);
        }
        return recursive(tag);
      } 
    
    if (tag === null) {
      return "finito";
    } else {
      return;
    } 
  };
    recursive(document.documentElement);
    console.log("I. Am. Result!", result)
    return result;
};