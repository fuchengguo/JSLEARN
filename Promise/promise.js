function aa() {
	console.log(1)
}
function bb() {
	return aa;
}
bb();
function pro() {
	let qq = 10;
	setTimeout(() => {
		qq++;
	},1000)
	return new Promise((resolve,reject) => {
		resolve(qq,12)
	})
}
let promise = pro();
promise.then((res,ewq) => {
	console.log(res,ewq)
	return '000'
}).then((res) => {
	// dad.fu()
	console.log('我是异步',res)
})
setTimeout(() => {
	console.log(2)
},0)
console.log(2)
function foo() { 
	baz.bar(); 
	setTimeout( function(){ 
	}, 100 ); 
 } 
 try {
	foo()
 } catch (err) {
	console.error(err)
 }
 console.log(1)