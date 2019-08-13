<template>
  <div>
    layout{{data1}}
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'Layout',
  data(){
    return {
      data1:'123'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
