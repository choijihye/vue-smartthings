<template lang="html">
    <div>
        <button @click="onClick">CLICK</button>
    </div>
</template>
　
<script>
export default {
    methods: {
        onClick() {
            // 부모의 onClick라는 이벤트 호출
            this.$emit('onClick');
        },
    }
}
</script>