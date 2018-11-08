###input标签的一些属性问题（持续更新）
>1. capture属性
* accept表示，直接打开系统文件目录。
```	javascript
	<input type="file" capture="camera"  />	//调起摄像头
	<input type="file" capture="camcorder"  />	//调起摄像机
	<input type="file" capture="microphone"  />	//调起摄录音
```

* 其实html5的input:file标签还支持一个multiple属性，表示可以支持多选，如：
```javascript
<input type="file" accept="image/*" multiple>
加上这个multiple后，capture就没用了，因为multiple是专门用用来支持多选的。
```