<template lang="html">
    <div id="wrap">
          <Checkbox  @change="onChangeInp"  :isActive = isActive />
          <Button @onClick="onClick" :btbTxt = btbTxt />
    </div>
    
</template>
　
<script>
import Checkbox from './Checkbox';
import Button from './Button';

export default {
    components: {
        Checkbox,
        Button
    },
    data: function() {
      return {
        btbTxt: '버튼입니다.',
        isActive:''
      }
    },
    methods: {
        onClick() {
            this.btbTxt = '버튼 클릭 합니다.';
        },
        onChangeInp(evt){
          this.isActive = evt.target.checked;
        }
    }
}
</script>



<style lang="css">
#test
*{margin: 0; padding: 0;}
html,body {height: 100%;}
#wrap {
    /*display: flex;*/
    height: 100%;
    justify-content: center;
    align-items: center;
}
#wrap > div {
    text-align: center;
}
span {
    display: inline-block;
    margin-bottom: 10px;
    color: #53a9f9;
    font-size: 32px;
    font-weight: 700;
}
button {
    padding: 0 8px;
    min-width: 60px;
    height: 34px;
    line-height: 34px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: #88c5ff;
}
</style>