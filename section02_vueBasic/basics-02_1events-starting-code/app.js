const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm(event) {
      // event.preventDefault()
      alert('Submitted')
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    add( num) {
      this.counter+= num
    },
    reduce(num) {
      this.counter-= num
    },
    setName(event , lastname) {
      this.name = event.target.value + lastname
    }
  }
});

app.mount('#events');
