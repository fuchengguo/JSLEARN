/*
	var MyRouter = new Router({
		mode: 'hash',
		routes: [{
			path: '/um',
			name: 'Um',
			callback: function() {
				//what deal
				umcore.ui('selector','Login')
			}
		}]
	})
	MyRouter.init();
	1.mode 为可选参数，目前只支持hash,不写则默认hash
	2.routes 必选参数，具体格式如上。
		callback为跳转路由后的操作。如进行页面DOM渲染。
	3.MyRouter.push()
		可传对象
			例： { path: '/dad', query: { aa: 1}} path为必传参数。query为可选参数。
		可传字符串
			例： '/path'
	4.MyRouter.query
		取出传参
*/

(function() {
	var Router = function(params) {
		this.routes = params.routes || []; //存储路由信息
		this.mode = params.mode || 'hash'; //路由模式 hash or history
		this.router = {};
		this.hashUrl = '#/';
		this.currentUrl = location.hash.substring(1);
		this.query = {};
		this.beforeFu = null; 
		this.afterFu = null;

		let supportHistory = window.history.pushState ? true : false;

		if (this.mode === 'history' && !supportHistory) {
			this.mode = 'hash';
		}
	}
	Router.prototype.init = function() {
		if (this.mode === 'history') {
			window.addEventListener('popstate',this.historyUrlChange.bind(this))
			console.warn('History is not available, please check to hash.')
		} else if (this.mode === 'hash') {
			window.location.hash = this.hashUrl;
			this.dealUrl();
			this.queryUrl();
			window.addEventListener('hashchange',this.hashUrlChange.bind(this))
		} else {
			console.warn('Unexpected mode of Router, please check the mode.')
		}
	}
	Router.prototype.dealUrl = function() { //处理路由变化
		var count = 0;
		this.routes.forEach((currentValue) => {
			if (currentValue.path == this.currentUrl.split('?')[0]) {
				if (typeof currentValue.callback == 'function') {
					count++
					if (this.beforeFu) {
						this.beforeFu(currentValue,'undevelop',() => {
							currentValue.callback();
							if (this.afterFu) {
								this.afterFu()
							}
						});
					} else {
						currentValue.callback();
						if (this.afterFu) {
							this.afterFu()
						}
					}
					
				} else {
					console.error('typeof callback accept function!')
				}
			}
			if (currentValue.path == '*' && count == 0) {
				if (typeof currentValue.callback == 'function') {
					currentValue.callback()
				} else {
					console.error('typeof callback accept function!')
				}
			}
		})
	}
	Router.prototype.urlMatch = function() {
		if (this.routes[this.currentUrl]) {
			if (typeof this.routes[this.currentUrl].callback === 'function') {
				this.routes[this.currentUrl].callback();
			} else {
				console.error('typeof callback accept function!')
			}
		} else {
			console.warn('No Match URL',this.currentUrl)
		}
	}
	Router.prototype.hashUrlChange = function(e) { //hash路由变化处理
		this.currentUrl = location.hash.substring(1) || '/';
		this.dealUrl();//
		this.queryUrl();
	}
	Router.prototype.historyUrlChange = function(e) {
		this.currentUrl = location.hash.substring(1) || '/';
		console.log(e)
		this.dealUrl();//
	}
	Router.prototype.push = function(params) {
		if (!params) {
			console.error('Unexpected params!');
			return false;
		}
		if (this.mode === 'hash') {
			if (typeof params === 'object') {
				var url = '';

				if (params.path) {
					// window.location.hash = '/' + params.path;
					if (params.path.substring(0,1) === '/') {
						url = '';
					} else {
						url = '/';
					}
					url+=params.path;
				}
				if (params.query) {
					let str = '';
					for (let i in params.query) {
						str+= i+'='+params.query[i]+'&'
					}

					url+='?'+str.substring(0,str.length-1);
					this.query = params.query;
				}
				// console.log(url)
				window.location.hash = url;
			} else if (typeof params === 'string') {
				window.location.hash = params;
			}

		} else if (this.mode == 'history') {
			window.history.pushState(null,null,params.path)
		}
	}
	Router.prototype.queryUrl = function() {
		if (location.hash.indexOf('?') != -1) {
			var url = location.hash.split('?')[1].split('&')
			for (var i = 0; i < url.length; i++) {
				this.query[url[i].split('=')[0]] = url[i].split('=')[1]
			}
		}
	}
	Router.prototype.beforeEach = function(callback) {
		if (typeof callback === 'function') {
			this.beforeFu = callback;
		} else {
			console.trace('Unexpected parameters');
		}
	}
	Router.prototype.afterEach = function(callback) {
		// 对于异步分callback暂未有合适的处理方案
		if (typeof callback === 'function') {
			this.afterFu = callback;
		} else {
			console.trace('typeof callback accept function!');
		}
	}
	window.Router = Router;
})()
