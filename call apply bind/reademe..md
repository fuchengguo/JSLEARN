## call,apply,bind

``` 相同点
  1. 都是改变函数执行上下文，即改变函数内部this指向
  2. 第一个参数都是this要指向的对象。
  3. 都可以利用后续参数传参。
```
``` 不同点
  * call
  > call第二个及后续参数都需要依次传
  * apply
  > call第二个参数接收数组
  * bind
  > bind第二个及后续都需要一次传参

```