###原型链
> prototype
```text
 如果 foo 不直接存在于 myObject 中而是存在于原型链上层时 myObject.foo = "bar" 会出现的三种情况。
		 1. 如果在 [[Prototype]] 链上层存在名为 foo 的普通数据访问属性（参见第 3 章）并且没
			有被标记为只读（writable:false），那就会直接在 myObject 中添加一个名为 foo 的新
			属性，它是屏蔽属性
		 2. 如果在 [[Prototype]] 链上层存在 foo，但是它被标记为只读（writable:false），那么
		       无法修改已有属性或者在 myObject 上创建屏蔽属性。如果运行在严格模式下，代码会
		       抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
		 3. 如果在 [[Prototype]] 链上层存在 foo 并且它是一个 setter（参见第 3 章），那就一定会
			调用这个 setter。foo 不会被添加到（或者说屏蔽于）myObject，也不会重新定义 foo 这
			个 setter
  如果你希望在第二种和第三种情况下也屏蔽 foo，那就不能使用 = 操作符来赋值，而是使
		用 Object.defineProperty(..)来向 myObject 添加 foo。
```
> 构造函数调用
```text
		function NothingSpecial() {
		console.log( "Don't mind me!" );
		}
		var a = new NothingSpecial();
		// "Don't mind me!" 
		a; // {}
		NothingSpecial 只是一个普通的函数，但是使用 new 调用时，它就会构造一个对象并赋值
		给 a，这看起来像是 new 的一个副作用（无论如何都会构造一个对象）。这个调用是一个构
		造函数调用，但是 NothingSpecial 本身并不是一个构造函数,
		在 JavaScript 中对于“构造函数”最准确的解释是，所有带 new 的函数调用。
		函数不是构造函数，但是当且仅当使用 new 时，函数调用会变成“构造函数调用”
```
