<template>
    <div>
        <h2>이름: {{name}}</h2>
        <h3>나이: {{age}}</h3>
    </div>
</template>
<script>
export default {

    props: {
        name: {type: String},
        age: {type: String}
    },
    data() {
      return {

      }  
    },
    methods: {

    }
}
</script>