import Vue from 'vue'
import Hello from './hello.vue'

var example1 = new Vue({
    el: '#example-1',
    render: h => h(Hello)
})


var example2 = new Vue({
    components: {
        'hello': Hello
    },
    el: '#example-2',
})
