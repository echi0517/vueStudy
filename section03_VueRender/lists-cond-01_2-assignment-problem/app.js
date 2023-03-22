const app = Vue.createApp({
    data () {
        return {
            workList: [],
            inputText: '',
            isShow: true
        }
    },
    computed: {
        messageChange () {
            return this.isShow ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTast() {
            this.workList.push(this.inputText)
            this.inputText = ''
        },
        showChange() {
            this.isShow = !this.isShow
        }
    }

})

app.mount('#assignment')