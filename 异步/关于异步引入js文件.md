###异步加载js的一些方法
>1.动态创建script标签
```javascript
		function appendScript(src) {
            let script = document.createElement('script');
            script.type = "text/javascript";
            script.src = src;
            document.head.appendChild(script)
        }
		appendScript('https://cdn.bootcss.com/labjs/2.0.3/LAB.min.js')
```
>2.defer属性和async属性。html4.0中定义了defer；html5.0中定义了async。

```html
	<script src="test2.js" type="text/javascript" charset="utf-8" defer="defer"></script>
	<script src="test2.js" type="text/javascript" charset="utf-8" async="async"></script>
```

```text
* (1)没有defer或async，浏览器会立即加载并执行指定的JS脚本，也就是说，不等待后续载入的文档元素，读到JS脚本就加载并执行。

* (2)有async，加载后续文档元素的过程将和JS的加载与执行并行进行（异步）。

* (3)有defer，加载后续文档元素的过程将和JS的加载并行进行（异步），但JS的执行要在所有文档元素解析完成之后，DOMContentLoaded 事件触发之前完成。
```

> defer和async的共同点：

```text
* (1)不会阻塞文档元素的加载。

* (2)使用这两个属性的脚本中不能调用document.write方法。

* (3)允许不定义属性值，仅仅使用属性名。

* (4)只适用于外部脚本（虽然IE4-IE7还支持对嵌入脚本的defer属性，但在IE8及之后的版本就只支持外部脚本，对不支持的会直接忽略defer属性，因此把延迟脚本放在页面底部仍然是最佳选择）。

```
> defer和async的不同点：
```text
* (1)每一个async属性的脚本一旦加载完毕就会立刻执行，一定会在window.onload之前执行，但可能在document的DOMContentLoaded之前或之后执行。不保证按照指定它们的顺序来执行，如果JS有依赖性就要注意了。指定异步脚本的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容，因此，建议异步脚本不要在加载期间修改DOM。

* (2)每一个defer属性的脚本都是在文档元素完全载入后，一般会按照原本的顺序执行，同时一般会在document的DOMContentLoaded之前执行，相当于window.onload，但应用上比 window.onload 更灵活！实际上，defer 更接近于DomContentLoad。事实上，延迟脚本不一定会按顺序执行，也不一定会在DOMContentLoaded事件触发之前执行，因此最好只包含一个延迟脚本。

```
>3.异步加载器如LAB

```javascript
		//wait是加载完成的回调,可以同时运行多条$LAB链，但是它们之间是完全独立的，不存在次序关系。
		//如果确保某一js文件在另一个js文件后运行，使用链式操作，如下：
		$LAB.script('test2.js').wait(function() {
			console.log('over')
		})
		.script('test1.js').wait()
		.script('test.js').wait()
```
>4.require.js
```javascript
	<script src="require.js"></script>
	<script type="text/javascript">
	    require ([
	    "test.js",
	    "test2.js",
	    "test1.js",
	    ],
	    function (){
			//三个脚本全部加载完成的回调
	    );
	</script>
	//不保证哪个文件先被加载，只保证所有文件加载完成后才会执行回调
	//	如果按次序加载很重要，你可以使用官方提供的 order 插件。
```