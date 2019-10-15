function app() {
  return Array.prototype.slice.call(arguments)
}
let arr = app(1,2,3,4,5);
console.log(arr.slice(2,3))

let obj = {
  "a":2,
  "b":3
}
function aa(ad,sd) {
  console.log(ad,sd,this.a)
}
console.log(obj);
aa.apply(obj,[3,2])

