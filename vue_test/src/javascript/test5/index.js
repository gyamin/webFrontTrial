import Vue from 'vue'

let example1 = new Vue({
    el: "#example-1",
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // `methods` オブジェクトの下にメソッドを定義する
    methods: {
        greet: function (event) {
            // メソッド内の `this` は、 Vue インスタンスを参照します
            alert('Hello ' + this.name + '!')
            // `event` は、ネイティブ DOM イベントです
            if (event) {
                alert(event.target.tagName)
            }
        },
        warn: function (message, event) {
            // ネイティブイベントを参照しています
            if (event) event.preventDefault()
            alert(message)
        },
        show: function (message) {
            alert(message);
        }
    }
})

var example3 = new Vue({
    el: '#example-3',
    data: {
        message: "",
        message2: ""
    }
})

// チェックボックス
var example4 = new Vue({
    el: '#example-4',
    data: {
        checked: true,
        checkedNames: []
    }
})

// ラジオ
var example5 = new Vue({
    el: '#example-5',
    data: {
        picked: ''
    }
})

// セレクトボックス
var example6 = new Vue({
    el: '#example-6',
    data: {
        selected: '',
        selectedMulti: ''
    }
})

var example7 = new Vue({
    el: '#example-7',
    data: {
        selectedList: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})
