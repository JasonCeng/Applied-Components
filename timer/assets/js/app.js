const foo = function (option) {
    var o = {
        data: function () {
            let d = option.data() || {}
            return d
        },
        dom: option.dom || {},
        eventInit: option.eventInit || function () { console.log('there are no events here') },
        methods: option.methods || function () { 
            console.log('there are no methods here') 
            return {}
        },
        ready: option.ready || function () {}
    }
    var model = function () {
        let data = o.data()
        let keys = Object.keys(data)        //Object.keys()就是对象原型里面，一个叫做keys的方法，用来把对应对象的属性的keyname用数组排列出来
                                                        //Object.keys({a: 1, b:2, c:3}) // ['a', 'b', 'c']
        let i = keys.length
        while(i--){
            o[keys[i]] = data[keys[i]]
        }
        return o
    }()
    var dom = o.dom
    var eventInit = function () {
        o.eventInit()
    }()
    var methods = function () {
        let controller = o.methods()
        let keys = Object.keys(controller)
        let i = keys.length
        while(i--){
            o[keys[i]] = controller[keys[i]]
        }
        console.log(o)
        return o
    }()
    var init = function () {
        o.ready()
    }()
    var config = function () {
        return {
            getVersion: function () {
                console.log('当前版本是:0.0.1')
            }
        }
    }
    return config()
}