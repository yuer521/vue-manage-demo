<template>
  <div>
    grandson1 {{value}}
    <button @click="$parent.$emit('input',300)">dianji</button>
    
  </div>
</template>
<script>
import Grandson2 from './Grandson2'
export default{
 
  methods:{
    change(){
      // this.$emit('input',200)
      // this.$emit('update:keynum',300)
      
    }
  },
  props:{
    value:{type:Number,default:0}
  }
}
</script>