###babel
> 1.为什么使用babel

	ES2015，即ES6出来之后,最近版本浏览器逐渐支持，但是大部分手机端,
	以及大部分较低版本的浏览器支持度并不够，babel的编译让我们可以使用ES6语法进行开发。
>2. babel-polyfill
babel 直接提供了通过改变全局来兼容 es2015 所有方法的 babel-polyfill，安装 babel-polyfill 后你只需要在所有代码的最前面加一句 import 'babel-polyfill' 便可引入它，如果使用了 webpack 也可以直接在 entry 中添加 babel-polyfill 的入口。
```javascript
import 'babel-polyfill';

export const foo = (a, b) => Object.assign(a, b);
```
加入 babel-polyfill 后，打包好的 pollyfill.js 一下子增加到了 251kb（未压缩），（建议感兴趣的同学把代码拉下来运行一下，之后提到的所有方式也都可以看到打包结果）搜索一下 polyfill.js 不难找到这样的全局修改：
```javascript
//polyfill
`$export($export.S + $export.F, 'Object', {assign: __webpack_require__(79)});
```
babel-polyfill 在项目代码前插入所有的 polyfill 代码，为你的程序打造一个完美的 es2015 运行环境。babel 建议在网页应用程序里使用 babel-polyfill，只要不在意它略有点大的体积（min 后 86kb），直接用它肯定是最稳妥的。值得注意的是，因为 babel-polyfill 带来的改变是全局的，所以无需多次引用，也有可能因此产生冲突，所以最好还是把它抽成一个 common module，放在项目 的 vendor 里，或者干脆直接抽成一个文件放在 cdn 上。

如果你是在开发一个库或者框架，那么 babel-polyfill 的体积就有点大了，尤其是在你实际使用的只有一个 Object.assign 的情况下。更可怕的是对于一个库来说，改变全局环境是使不得的。谁也不希望使用了你的库，还附带了一家老小的 polyfill 改变了全局对象。这时不污染全局环境的 babel-plugin-transform-runtime 才是最合适的。

参考链接:[21 分钟精通前端 Polyfill 方案](https://segmentfault.com/a/1190000010106158?utm_source=tuicool&utm_medium=referral)