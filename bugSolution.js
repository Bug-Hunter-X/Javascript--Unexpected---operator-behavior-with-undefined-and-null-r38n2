function foo(a, b) {
  // Use nullish coalescing to provide default values
  a = a ?? 0; 
  b = b ?? 0;
  return a + b;
}

console.log(foo(undefined, 2)); //2
console.log(foo(null, 2)); //2
console.log(foo(1, null)); //1
console.log(foo(1, undefined)); //1