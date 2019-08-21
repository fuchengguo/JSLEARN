/*
		实现一个数据监听器observer，如果想要监听对象的所有属性，需要用递归遍历所有属性。
	*/
	function defineReactive(data,key,val) {
		// sds
		observer(val);
		Object.defineProperty(data,key, {
			enumerable: true,
			configurable: true,
			set: function(newval) {
				val = newval;
				console.log('已监听到数据变化并劫持，新数据为：'+val.toString());
			},
			get: function() {
				return val;
			}

		})
	}
	 function observer(data) {
	 	// 数据监听器
	 	if (!data || typeof data != 'object') {
	 		return;
	 	} 
	 	Object.keys(data).forEach(function(key) {
	 		defineReactive(data,key,data[key])
	 	})
	 }
	 var obj = {
	 	qq: 1,
	 	bb: 2,
	 	cc: {
	 		d:'23'
	 	}
	 }

	 observer(obj);
	 obj.qq = '34';
	 obj.cc.d = '2332';