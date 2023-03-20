const app = Vue.createApp({
    data () {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false
        }
    },
    computed: {
        boxAclasses() {
            return {active: this.boxAselected}
        },
        boxCclasses() {
            return ['demo',{active: this.boxCselected}]
        }
    },
    methods: {
        boxSelected(box) {
            if(box === 'A') {
                this.boxAselected = !this.boxAselected
            } else if (box === 'B') {
                this.boxBselected = !this.boxBselected
            } else {
                this.boxCselected = !this.boxCselected
            }
        }
    }
})

app.mount('#styling')