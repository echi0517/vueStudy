const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            class: '',
            pClass: [],
            isShow: false,
            colorName:'',
            color44: ''
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
            this.color44 = this.colorName
        }
    }
})

app.mount('#assignment')