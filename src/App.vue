<template>
  <div id="app">
    <button @click="ApptoChild">msg to child</button>
    <Parent></Parent>
  </div>
</template>

<style>
</style>

<script>
  import messager from "./tool/messager";
  import Parent from "./views/Parent";
  export default {
    components: {
      Parent,
    },
    methods:{
      ApptoChild(){
        messager.$emit('apptochild', " msg from app to child")
      }
    }
  }
</script>
