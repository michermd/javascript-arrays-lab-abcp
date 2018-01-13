var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
   return kittens.push(name);

}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

function appendKitten(name) {
  let appendKitten =  [...kittens, name];

  return appendKitten;
}

function prependKitten(name) {
  let prependKitten =  [name, ...kittens];

  return prependKitten;
}

function removeLastKitten(name) {
  let removeLastKitten =  kittens.slice(0, kittens.length - 1);

  return(removeLastKitten);
}

function removeFirstKitten(name) {
  let removeFirstKitten =  kittens.slice(1);

  return(removeFirstKitten);
}

// function appendKitten(name) {
//   return appendKitten =  [name, ...kittens];
// }
//
// function addElementToBeginningOfArray(array, element) {
//   array = [element, ...array];
//   return(array);
// }
// function prependKitten(name) {
//   kittens =  [name, ...kittens];
//
//   return(kittens);
// }
//
// function removeLastKitten(name) {
//   kittens =  kittens.slice(1, kittens.length - 1);
//
//   return(kittens);
// }

// function removeFirstKitten(name) {
//   kittens =  kittens.slice(1);
//
//   return(kittens);
// }
