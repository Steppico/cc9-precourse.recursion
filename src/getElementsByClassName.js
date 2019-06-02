/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

// console.log(document.children);

const getElementsByClassName = (className) => {
  const allChildElements = [];
  const nodeList = document.children[0].children;//assign head and body into "nodeList"
    function classNameCheck (node) {//1st execution document contains head, body
      for(let i = 0; i < node.length; i++){//for loop each element
        if(node[i].classList.contains(className)){//if element.classList contains target class name
          allChildElements.push(node[i]);//push elment into result
          if(node[i].children.length > 0){//also element contains another children
            classNameCheck(node[i].children);// then recurse again
          }
        } else if(node[i].children.length > 0){//element.classList doesn't contain target className, but it contains another children,
            classNameCheck(node[i].children);// then recurse into the children
          }
        }
      return allChildElements;//pass result into global variable "allChildElements"
    }
  classNameCheck(nodeList); //1st execution of recurse function
  return allChildElements;// return global variable
};

