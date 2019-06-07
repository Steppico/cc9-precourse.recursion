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
  let l = new Date(Date.now()).toString()
  console.log("guarda qua", typeof l, l)
  console.log(x[0])
  console.log(x[1])
  console.log(n)
  let result = [];
  

//   var walkDOM = function (node,func) {
//     console.log(node)
//     if (node.className === n) {
//       result.push(node)
//     }
//     console.log("guardami..",func(node))
//     func(node);                     //What does this do?
//     node = node.firstChild;
//     while(node) {
//         walkDOM(node,func);
//         node = node.nextSibling;
//     }

// };

//   walkDOM(document.body,function(att) {
//     document.body.getAttribute(att);
//     })


  function recursive(tag) {
    console.log(tag)
    if (tag.className === n) {
      result.push(tag)
    }
     if (tag.hasChildNodes()) {
        return recursive(tag.firstChild);
      } else if (tag.nextSibling) {
        return recursive(tag.nextSibling);
      } else if (!tag.nextSibling) {
        tag = tag.parentNode.nextSibling;
        if (tag === null) {
          return ;
        }
        return recursive(tag);
      } 
    
    if (tag === null) {
      return "finito";
    } else {
      return;
    } 
  };
    recursive(document.body);
    console.log("I. Am. Result!", result)
    return result;
};