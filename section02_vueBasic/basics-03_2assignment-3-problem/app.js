const app = Vue.createApp({
    data() {
        return {
            result: 0,
            // show: 'Not there yet'
        }
    },
    computed: {
        show() {
            if (this.result < 37) {
                return 'Not there yet'
            } else if (this.result > 37) {
                return 'Too much!'
            } else {
                return this.result
            }
        }
    },
    watch: {
        result(value) {
            const that = this
            setTimeout( function() {
                that.result = 0
            } , 5000)
        }
    },

    methods: {
        add( value) {
            this.result += value
        },

        reduce( value) {
            this.result -= value
        }

    }
})

app.mount('#assignment')