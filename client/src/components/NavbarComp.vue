<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png" width="50" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <strong class="navbar-item">
        Vue.js Crud API
      </strong>
    </div>

      
     
    <div class="navbar-end ">
      <div class="navbar-item ">
        <div class="buttons ">
            <router-link to="/user" class="button is-link">
            <strong>Create User</strong>
          </router-link>
          
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>