/*
    author: fcg
    2019-03-14
*/
/*
    原理就是每次执行分发函数，将数据传入对应的名称的函数中
*/
function Emitter() {
    this.listener = [];//用于存储事件名称
}
/*
    监听事件 monitor(eventname,function(a,b) {})
*/
Emitter.prototype.monitor = function(eventName, callback) {
    console.log('monitor',this.listener[eventName]);
    console.log(2323,this.listener['groupChat'])
    var _listener = this.listener[eventName] || [];
    _listener.push(callback);
    this.listener[eventName] = _listener;
    console.log(this.listener[eventName])
}
/*
    分发事件, 可以携带任意参数。dispatch_msg(eventName,msg)
*/
Emitter.prototype.dispatch_msg = function(eventName) {
    console.log(eventName)
    var args = Array.prototype.slice.apply(arguments).slice(1);//获取除了eventName之外参数
    console.log(args)
    var _listener = this.listener[eventName];
    if (!Array.isArray(_listener)) {
        return
    }
    _listener.forEach(function(cb) {
        try {
            cb.apply(this,args)
        } catch (e) {
            console.log(e);
        }
    })

}
Emitter.prototype.removeMonitor = function(eventName) {
    if (this.listener[eventName]) {
        this.listener[eventName] = [];
    } else {
        return 
    }
}
var $emitter = new Emitter();
