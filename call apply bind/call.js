function aa(arg1, arg2) {

  return Array.prototype.join.call(arguments);

}
let qq = aa(1,2,34);

console.log(qq)

var obj = {
  a:2,
  c:34
}
function as(a) {
  this.a = a;
  console.log(this.a);
}
as.call(obj,243)
console.log(obj)
