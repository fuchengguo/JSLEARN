function aa() {
  console.log(this.a)
}
let obj = {
  a: 1,
  b:2
}
aa.bind(obj)()
function aaa(cb) {
  return Function.prototype.apply.bind(cb,null)
}
aaa((a,b) => {
  console.log(a,b)
})([1,2])

