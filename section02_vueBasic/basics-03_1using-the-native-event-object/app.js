const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
      // fullname: ''
    
    };
  },

  watch: {
    counter(value) {
      if (value >50 ) {
        const that = this
        setTimeout(function() {
          that.counter = 0
        }, 2000)
        // this.counter = 0
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname  = ''
    //   } else {
    //     this.fullname  = value + this.lastname
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname  = ''
    //   } else {
    //     this.fullname  = this.name + value
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log('재실행')
      if (this.name === '' || this.lastname === '') {
        return ''
      }
      return this.name + ' ' + this.lastname
    }
  }, 
  methods: {
    outputFullname() {
      console.log('재실행')
      if (this.name === '') {
        return ''
      }
      return this.name + ' ' + 'SPY'
    },

    setName(event) {
      this.name = event.target.value //+ ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name =''
    }
  }
});

app.mount('#events');
