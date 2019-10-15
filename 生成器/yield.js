function *aa(i) {
  console.log(1)
  var a = i * (yield);
  console.log(23)
  return a;
}
var b = aa(2);
b.next();
var c = b.next(3).value;
console.log(c)