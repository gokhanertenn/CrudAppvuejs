<template>
  <div>

    <NavbarComp/>
    
 <router-view/>

  </div>
 
</template>


<script>

import NavbarComp from "./components/NavbarComp.vue";

import PostList from './components/PostList.vue';


export default {

  components: {
    PostList,
    NavbarComp,
    
  }
}

</script>


<style lang="scss">

</style>
