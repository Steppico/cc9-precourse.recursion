/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (target) => {
  // YOUR CODE HERE
  let result = [];
  function recurse(currentNode, target) {
    if (currentNode.childNodes.length > 0) {
      currentNode.childNodes.forEach(node => {
        if (node.className && node.className.split(' ').includes(target)) {result.push(node)};
        if (node.childNodes.length > 0) {recurse(node, target)}
      })
    } 
  }
  recurse(document.documentElement, target);
  return result;
};
