<template>
 <div class="container" >

    <form @submit.prevent="submitForm">
<div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input  
    class="input" 
    name="fullName" 
    v-model="post.firstName" 
    type="text"
     placeholder="Please enter your name">
  </div>
</div>

<div class="field">
  <label class="label">Last name</label>
  <div class="control">
    <input 
     class="input is-success" 
     name="lastName" 
     v-model="post.lastName"
     type="text" 
    placeholder="Please enter your last name" >
   
    
  </div>
  
</div>




<div class="field is-grouped">
  <div class="control">
    <button  type="submit" class="button is-link">Submit</button>
  </div>
</div>



    </form>

    


 </div>

</template>

<script>

export default {
  
 
  props:['post','submitForm']

 

}


</script>

<style>

</style>