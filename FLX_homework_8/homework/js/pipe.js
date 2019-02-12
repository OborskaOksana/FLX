function pipe(namber) {
  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] === "function") {
      namber = arguments[i](namber);
    }
  }
  return namber;
}

function addOne(x) {
  return (x + 1);
}

pipe(1, addOne);
pipe(1, addOne, addOne);