<template>
  <div>
    son2 {{$attrs}}
    <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>
  </div>
</template>
<script>
import Grandson2 from './Grandson2';
export default {
  components:{
    Grandson2
  },
  inheritAttrs:false,
  mounted(){
    console.log('sss',this.$listeners);
  }
}
</script>