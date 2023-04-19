<template>
  
  <div  class="container">

   <div v-for="(user,index) in users" :key="index" class="card my-5">
 
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{user.firstName}}</p>
        <p class="title is-5"> {{user.lastName}}</p>
        
        
      </div>
    </div>

    <div class="content">
      
     
      <br>
      <time>{{user.createdAt}} </time>
    </div>
  </div>
  <div class="card">
  <footer  class="card-footer">
    <button  @click="editUser(user.id)" class="card-footer-item button is-info">Update</button>
    <button @click="removeUser(user.id)"  class="card-footer-item button is-danger">Delete</button>
  </footer>
</div>
</div>


  </div>


</template>

<script>
import axios from "axios";
import {useRouter} from "vue-router";


export default {
  
name:"users",
data() {
  
  return {
   
    users : [],
   
  }

  
},
mounted(){
  this.getUsers()
  
},

methods:{
  getUsers(){

    axios.get('http://localhost:4545/users', ).then(res => {
    this.users = res.data;
    console.log(this.users)
    }) 
  }, 
  removeUser: function(id) {
  axios.delete(`http://localhost:4545/user/${id}`)
    .then(response => {
      this.getUsers();
      console.log('Silme işlemi başarılı: ', response);
    })
    .catch(error => {
      console.error('Silme işlemi başarısız: ', error);
    });
},

 
    

},

setup(){


const router = useRouter();


async function editUser(id){


  router.push({
       
       name: "users",
       params: {id : id}
       

  })
  console.log(id)
}
/*const editUser = (id) => {


  router.push({

    name: "user", 
    params: { id:id }
    
  })
  console.log(id)
}


return { editUser }*/
return { editUser }
}
 


}

</script>

<style>

</style>