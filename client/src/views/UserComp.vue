<template>
  <PostForm  :post="post" :submitForm = "createPost" />
</template>

<script>
import { reactive } from 'vue'
import PostForm from "../components/PostForm.vue"
import {useRouter} from "vue-router";
export default {
    components:{
        PostForm
    },
    setup() {
       
       const API_URL = 'http://localhost:4545/user'

       const router = useRouter();
       const post = reactive({
          
          firstName: "",
          lastName: ""
       })

       async function createPost () {
             
             try {
                const response = await fetch(API_URL, {
                    method:'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body:JSON.stringify({
                        firstName:post.firstName,
                        lastName:post.lastName
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
          post,
          createPost
       }

    }
}

</script>

<style>

</style>