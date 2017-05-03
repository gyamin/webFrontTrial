import Vue from 'vue'

// グローバルなコンポーネントを登録
Vue.component('test1-comp', {
    template: '<p>TEST1コンポーネント</p>'
})

let app1 = new Vue({
    el: "#app1",
    // ローカルなコンポーネント
    components: {
        'local1-comp' : {
            template: '<p>ローカルコンポーネント</p>'
        }
    },
    data: {
        message: "hello vue!"
    }
})
console.log(app1.message);
app1.message = "hello vue again!";


let app2 = new Vue({
    el: "#app2",
    data: {
        message: "input some text"
    }
})


// コンポーネント
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

let app3 = new Vue({
    el: "#app3",
    data: {
        languages: [
            {text: "java"},
            {text: "php"},
            {text: "ruby"}
        ],
        seen: true
    },
    methods: {
        changeSeenVal: function() {
            if(this.seen) {
                this.seen = false;
            }else{
                this.seen = true;
            }
        }
    }
})

// 算出プロパティとウォッチャ
// https://jp.vuejs.org/v2/guide/computed.html
let app4 = new Vue({
    el: "#app4",
    data: {
        message: "this is original message"
    },
    computed: {
        reversedMessage: function () {
            // `this` は vm インスタンスを指します
            return this.message.split('').reverse().join('')
        }
    }
})
