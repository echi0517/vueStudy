const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: ''
    };
  },

  computed : {
    goalVisible() {
      return this.goals.length === 0
    }
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(idx) {
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
