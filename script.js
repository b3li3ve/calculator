let x
let y
let opperator

function minus(x, y) {
    x = x - y
    return x
}

function plus(x, y) {
    x = x + y
    return x
}

function times(x, y) {
    x = x * y
    return x
}

function divise(x, y) {
    x = x / y
    return x
}

function opperate(x, y, opperate) {
    if (opperate = "-")
        minus(x, y)
    else if (opperate = "+")
        plus(x, y)
    else if (opperate = "*")
        times(x, y)
    else if (opperate = "/")
        divise(x, y)
}

/* const subtract = function(array) {
	const differenceOfAll = array.reduce((total, currentItem) => {return total - currentItem}, 0)
  return differenceOfAll
};

const add = function(array) {
	const sumOfAll = array.reduce((total, currentItem) => {return total + currentItem}, 0)
  return sumOfAll
};

const multiply = function(array) {
	const productOfAll = array.reduce((total, currentItem) => {return total * currentItem}, 1)
  return productOfAll
};

const divid = function(array) {
	const quotientOfAll = array.reduce((total, currentItem) => {return total / currentItem}, 1)
  return quotientOfAll
};

const power = function(x, y) {
	return x**y
};

const factorial = function(num) {
    if (num === 0) {
      return 1;
    }
    const numbers = Array.from({ length: num }, (_, i) => i + 1);
    return numbers.reduce((total, currentItem) => total * currentItem, 1);
  };*/