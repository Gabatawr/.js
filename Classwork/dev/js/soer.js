const head = (lst) => lst[0];
const tail = (lst) => lst.slice(1);
const merge = (a) => (b) => [...a, ...b];
const sizeOf = (arr) => arr.length;

const map = (arr) => (f) => (acc) =>
	sizeOf(arr) === 0 ? acc :
	map(tail(arr))(f)(merge(acc)(f(head(arr))));

const pipe = (funcs) => (arg) => {
  return funcs.length === 0 ? arg :
  pipe(tail(funcs))(head(funcs)(arg))
}

const incNums = pipe([
  map,
  next => next(a => [a + 1]),
  next => next([])
]);

console.log(incNums([1,2,3]));
