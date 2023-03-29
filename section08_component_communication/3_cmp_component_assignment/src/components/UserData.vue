<template>
    <div>
        <div>
            <label for="">이름</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">나이</label>
            <input type="text" v-model="age">
        </div>
        <button @click="clickdata">입력</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: ''

        }
    },
    methods: {
        clickdata() {
            let cname = this.name
            let cage = this.age
            this.$emit('clickdata',cname,cage)
        }
    }
}
</script>