<template>
  <div>
    <h2>child</h2>
    <h3>{{msg}}</h3>
    <h3>{{cmsg}}</h3>
    <button @click="Clicked">click</button>
  </div>
</template>

<script>
  import messager from "../tool/messager";
  export default {
    name: "Child",
    props:{
      msg:{
        type: String,
        default: ''
      }
    },
    data(){
      return {
        cmsg:''
      }
    },
    methods:{
      Clicked(){
        this.$emit('childClick', "i am from child.")
      }
    },
    mounted() {
      messager.$on('apptochild',(v)=>{
        this.cmsg = v
      })
    }
  }
</script>

<style>

</style>