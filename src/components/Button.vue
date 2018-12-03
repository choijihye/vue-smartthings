<template lang="html">
    <div>
        <button @click="onClick">{{btbTxt}}</button>
    </div>
</template>
　
<script>
export default {
    props: {
        btbTxt: [String, Number]
    },
    methods: {
        onClick() {
            // 부모의 onClick라는 이벤트 호출
            this.$emit('onClick');
        },
    }
}
</script>