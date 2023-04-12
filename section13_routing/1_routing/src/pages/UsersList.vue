<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChange">Save Change</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data () {
    return {
      chageSaved: false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push("/teams");
    },
    saveChange() {
      this.chageSaved = true
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log("User list cmp beforeRouteEnter");
    console.log(to, from)
    next()
  },

  beforeRouteLeave(to, from , next) {
    console.log('UserList cmp beforeRouteLeave')
    console.log(to,from)

    if (this.chageSaved) {
      next()
    } else {
      const UserWantsToLeave =  confirm('정말 나가시겠습니까?')
      next(UserWantsToLeave)
    }
    

  },
  unmounted() {
    console.log('unmounted')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
