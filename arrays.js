
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)={
  return [element, ...array]
}

function destrucivelyAddElementToBeginningOfArray(array, element)={
  array.push(element);
  return array
}
