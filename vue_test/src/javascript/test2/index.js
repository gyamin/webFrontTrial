import Vue from 'vue'

let app1 = new Vue({
    el: "#app1",
    data: {
        isActive: true,
        hasError: true
    },

    methods: {
        changeIsActive: function() {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        },
        changeHasError: function() {
            if (this.hasError) {
                this.hasError = false;
            } else {
                this.hasError = true;
            }
        }
    }
})

let app2 = new Vue({
    el: "#app2",
    data: {
        classObject: {
            active: false,
            'text-danger': true
        }
    },

    methods: {
        changeIsActive: function() {
            if (this.classObject.active) {
                this.classObject.active = false;
            } else {
                this.classObject.active = true;
            }
        },
        changeHasError: function() {
            if (this.classObject["text-danger"]) {
                this.classObject["text-danger"] = false;
            } else {
                this.classObject["text-danger"] = true;
            }
        }
    }
})

let app3 = new Vue({
    el: "#app3",
    data: {
        activeClass: 'active',
        errorClass: 'text-danger',
        isActive: true
    },
    methods: {
        changeIsActive: function () {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        }
    }
})

let app4 = new Vue({
    el: "#app4",
    data: {
        styleObject: {
            color: 'red',
            fontSize: '20px'
        }
    }
})
