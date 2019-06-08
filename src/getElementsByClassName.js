/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (n) => {

  let result = [];

  function recursive(tag) {

    if (tag === null) {
      return;
    }
    
    if (tag.className) {
      if (tag.className.match(n)) {
        result.push(tag);
      }
    }

     if (tag.hasChildNodes()) {
        return recursive(tag.firstChild);
      } else if (tag.nextSibling) {
        return recursive(tag.nextSibling);
      } else if (!tag.nextSibling) {
        if (tag.parentNode.nextSibling) {
        tag = tag.parentNode.nextSibling;
        } else if (!tag.parentNode.nextSibling) {
          tag = tag.parentNode.parentNode.nextSibling;
        };
        return recursive(tag);
      } 
    

  };
    recursive(document.documentElement);
    return result;
};