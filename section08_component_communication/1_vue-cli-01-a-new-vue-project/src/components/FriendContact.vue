<template>
  <li>
    <h2>
      {{ name }}
      {{ isFavorite ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleFavorit">ToggleFavorit</button>
    <button @click="toogleDetails">
      {{ detailsAreVisible ? "Hide" : "show" }}
    </button>
    <ul v-if="this.detailsAreVisible">
      <li><strong>Phone : </strong> {{ phoneNumber }}</li>
      <li><strong>Email : </strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete',id)">삭제</button>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ["toogle-favorite",'delete'],
  // emits: {
  //   'toogle-favorite': function(id) {
  //     if(id) {
  //       return true
  //     } else {
  //       console.warn('아이디없음')
  //       return false
  //     }
  //   }
  // },

  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorit() {
      // this.friendIsFavorite = !this.friendIsFavorite
      this.$emit("toogle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    }
  },
};
</script>
