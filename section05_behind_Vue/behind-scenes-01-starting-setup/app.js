const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
      // console.dir(this.$refs.userText)
    },
  },

  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },

  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },

  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount('#app');
}, 2000)


// jsp 프록시

// let message = 'Hello'
// let longMessage = message + 'World'
// console.log(longMessage)

// message = 'Hello!!!!!'
// console.log(longMessage)

/*
const data = {
  message: 'Hello',
  longMessage: 'Hello WOrld!'
}
const handler = {
  set(target , key , value) {
    console.log(target)
    console.log(key)
    console.log(value)

    if (key === 'message') {
      target.longMessage = value  + 'World'
    }
    target.message = value
  }
}
const proxy = new Proxy(data, handler)

proxy.message = 'Hello!!!!'
console.log(proxy.longMessage)
// proxy.longMessage = '223'
*/

const app2 = Vue.createApp({
  template: `
    <p> {{ Meal }}</p>
  `,
  data() {
    return {
      Meal: 'Pizza'
    };
  }
});

app2.mount('#app2');