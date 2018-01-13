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
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(name) {
  return  kittens.slice(1);
}

// function appendKitten(name) {
//   let appendKitten =  [...kittens, name];
//
//   return appendKitten;
// }
//
// function prependKitten(name) {
//   let prependKitten =  [name, ...kittens];
//
//   return prependKitten;
// }
//
// function removeLastKitten(name) {
//   let removeLastKitten =  kittens.slice(0, kittens.length - 1);
//
//   return(removeLastKitten);
// }
//
// function removeFirstKitten(name) {
//   let removeFirstKitten =  kittens.slice(1);
//
//   return(removeFirstKitten);
// 
