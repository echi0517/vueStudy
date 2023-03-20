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
            // return [this.class , {visible: !this.isShow , hidden:this.isShow}]
            return{
                user1: this.class === 'user1',
                user2: this.class === 'user2',
                visible: !this.isShow , 
                hidden:this.isShow
            }
        },
        backgroundColor() {
            return {backgroundColor: this.color44}
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