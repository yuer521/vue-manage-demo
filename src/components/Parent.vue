<template>
  <div>
    <level t="1">11</level>
    <level t="2">22</level>
    <level t="3">33</level>
    <level t="4">44</level>
    <level t="5">55</level>
    <level t="6">66</level>
    <!-- parent {{num}} -->
    <!-- <Son1 :value="num" @input="change"></Son1> -->
    <!-- <Son1 v-model="num"></Son1> -->
    <!-- <Son1 :keynum.sync="num"></Son1> -->
    <!-- <Son2 :a="'aaa'" :b="'bbbbb'" :c="'cccc'" @mmm="change"></Son2> -->
    <List :data="['111','222','333']"></List>
  </div>
</template>
<script>
// import Son1 from "./Son1";
// import Son2 from "./Son2";
import Level from "./Level.js";
import List from "./List.js";

export default {
  methods:{
    // change(){
    //   console.log('mmmmm');
    // }
  },
  components:{
    // Son1,
    // Son2
    Level,
    List
  },
  data(){
    return {
      num:100
    }
  }
}
</script>