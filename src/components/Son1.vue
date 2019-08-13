
<template>
  <div>
    son1  {{value}}
    <button @click="change">dinaji</button>
    <Grandson1 v-model="value"></Grandson1>
  </div>
  
</template>
<script>
import Grandson1 from './Grandson1'
export default{
  components:{
    Grandson1
  },
  methods:{
    change(){
      this.$emit('input',200)
      // this.$emit('update:keynum',300)
    }
  },
  props:{
    value:{type:Number,default:0}
  }
}
</script>