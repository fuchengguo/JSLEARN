> http
```text
    浏览器在某些请求中，在正式通信前会增加一次HTTP查询请求，称为"预检"请求（preflight）。

    浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。
    CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
    它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
```
> 两种请求
浏览器将CORS请求分为两类：简单请求（simple request）和非简单请求（not-so-simple request）。

同时满足以下条件，就是简单请求：
```text
（1) 请求方法是以下三种方法之一：
    * HEAD
    * GET
    * POST
（2）HTTP的头信息不超出以下几种字段：
    * Accept
    * Accept-Language
    * Content-Language
    * Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
```
[参考文献]('https://www.cnblogs.com/chris-oil/p/8042677.html')
