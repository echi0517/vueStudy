const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            class: '',
            pClass: [],
            isShow: false,
            colorClass:'',
            color: ''
        }
        
    },
    computed: {
        isVisible () {
            return [this.class , {visible: !this.isShow , hidden:this.isShow}]
        }
    },
    methods: {
        addClass(){
            this.class= this.inputClass
        },
        toggleShow() {
            this.isShow = !this.isShow
        },
        colorClass() {

        }
    }
})

app.mount('#assignment')