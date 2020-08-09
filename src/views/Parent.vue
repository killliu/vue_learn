<template>
  <div>
    <h1>parent</h1>
    <h2>{{msg}}</h2>
    <child msg="msg from parent." @childClick="showMsg"></child>
  </div>
</template>

<script>

  import child from "./Child";

  export default {
    name: "Parent",
    data(){
      return {
        msg: ""
      }
    },
    components:{
      child
    },
    methods:{
      showMsg(msg){
        this.msg = msg
      }
    }
  }
</script>

<style>

</style>