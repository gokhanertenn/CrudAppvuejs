<template>
  <PostForm :post="post" :submitForm="updatePost"></PostForm>
</template>

<script>

import axios from "axios";
import {useRouter,useRoute} from "vue-router";
import PostForm from '../components/PostForm.vue';
import { ref,onMounted } from 'vue';



export default {
  
  components : {

    PostForm,
  },

  setup() {

  const router = useRouter()

  const route = useRoute()

  const PUT_URL = 'http://localhost:4545/user'
  const API_URL = 'http://localhost:4545/users'

   const post = ref({

    firstName:"",
    lastName: ""
   })


   onMounted(()=> {

    getPost()
   })

   




   async function getPost() {
      
      const { id }  = route.params 
      const postID = parseInt(id)
      const response = await fetch(`${API_URL}/${postID}`)
      const json = await response.json()
      console.log(json)
      post.value = json

   } 

    async function updatePost () {
             
             try {
              const {id} = route.params
                const response = await fetch(`${PUT_URL}/${id}`, {
                    method:'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body:JSON.stringify({
                        firstName:post.value.fullName,
                        lastName:post.value.lastName
                    })
                })
             const json = await response.json()
             console.log(json)
             router.push({
                name:'home'
             })
             }catch (error){
                
                console.log(error)

             }

       }
   return {
    post,updatePost
   }
  
  },
 


 


}

</script>

<style>

</style>