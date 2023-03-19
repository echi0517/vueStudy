const app = Vue.createApp({
    data() {
        return{
            output: 'output',
            output2: ''
        }
    },
    methods: {
        showAlert(){
            alert('가나다라')
        },
        inputData (event) {
            this.output = event.target.value
        },
        inputData2 (event) {
            this.output2 = event.target.value
        }
    }
})

app.mount('#assignment')