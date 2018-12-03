<template lang="html">
    <div>
            <input type="checkbox" id="test"  @change="onChangeInp" :class="[ isActive ? 'active' : '' ]" />
            <label for="test">{{msg()}}</label>
    </div>
    
</template>


<script>
export default {
    props: {
        isActive: Boolean
    },
    methods: {
        onChangeInp(evt) {
            // 부모의 change라는 이벤트 호출
            this.$emit('change', evt);
        },
        msg(){
            return '체크박스';
        }
    }
}
</script>

<style>
    input:checked + label {color:green;font-weight: bold}
</style>