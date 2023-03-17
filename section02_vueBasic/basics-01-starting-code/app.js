const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Master learn Vue',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomeNumber = Math.random()
            if (randomeNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }

        }
    } 
});

app.mount('#user-goal');