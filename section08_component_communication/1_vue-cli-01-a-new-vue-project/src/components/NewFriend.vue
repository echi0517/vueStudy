<template>
    <form @submit.prevent="click">
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="name" id="name">
        </div>
        <div>
            <label for="">phone</label>
            <input type="text" v-model="phone">
        </div>
        <div>
            <label for="">email</label>
            <input type="text" v-model="email">
        </div>
        <div>
            <label for="">favorite</label>
            <input type="checkbox" v-model="favorite">
        </div>
        
        
        <button >입력</button>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                id: null,
                name: null,
                phone: null,
                email: null,
                favorite: false
            }
        },

        methods: {
            click() {
                const friend = {
                    id: new Date().toISOString(),
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    isFavorite: this.favorite
                }
                this.$emit('btnClick',friend)
            }
        }
    }

 
</script>