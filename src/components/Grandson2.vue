<template>
  <div>
    grandsonddd2  {{$attrs}}
  </div> 
</template>
<script>
export default{
 inheritAttrs:false,
 mounted(){
   console.log('ggggs',this.$listeners);
   this.$listeners.mmm()
 }
}
</script>