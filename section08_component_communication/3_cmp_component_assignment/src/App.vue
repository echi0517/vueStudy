<template>
    <div>
        <active-user
        :name="name"
        :age="age"></active-user>
        <user-data
        @clickdata="showdata">
        </user-data>
    </div>

</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
    components: {ActiveUser,UserData},

    data() {
        return {
            name: '',
            age: ''
        }
        
    },
    methods: {
        showdata(name,age){
            this.name= name
            this.age= age
        }
    }
}
</script>