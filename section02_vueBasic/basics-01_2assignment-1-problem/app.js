const app = Vue.createApp({
    data() {
        return {
            myName: 'sypark',
            myAge: 30,
            imageUrl: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg'

            
        };
    },
    methods: {
        myAgedd() {
            const myAgeP5 = this.myAge + 5
            return myAgeP5
        },
        random() {
            const randomeNumber = Math.random()  
            if (randomeNumber < 0.5) {
                return 0
            } else {
                return 1
            }
        }
    }
})



app.mount('#assignment');