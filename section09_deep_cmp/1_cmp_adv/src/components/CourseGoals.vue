<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anoth="박수영"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['뷰를 끝까지 완료하자','vue학습']
        }
    },
}
</script>