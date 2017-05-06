import Vue from 'vue'

let app1 = new Vue({
    el: "#app1",
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        person: {
            name: "Mike",
            age: 25,
            sex: "man"
        }
    }
})

let app2 = new Vue({
    el: "#app2",
    data: {
        workItem: "",
        items: [
            {
                message: "java",
                invalid: true
            },
            {
                message: "ruby",
                invalid: false
            },
            {
                message: "php",
                invalid: false
            },
            {
                message: "python",
                invalid: false
            },
            {
                message: "C#",
                invalid: false
            }
        ]
    },
    methods: {
        addItem: function() {
            this.items.push(
                {message: this.workItem, invalid: false}
            )
        },
        sort: function() {
            this.items.reverse();
        }
    }
})
