<template>
  <div class= "welcome container">
      <p class="welcometext">Welcome!</p>
      
       <p class="welcometext2">Live Chat</p>
       <p class="welcometext3">IELY Chabrouni/Lab II</p>
       <div v-if="showLogin">
           <h2>Login</h2>
        <LoginForm @login="enterChat"/>
        <p>No account yet? <span @click="showLogin = false">SignUp</span>  Instead</p>
       </div>

       <div v-else>
           <h2>SignUp</h2>
       <SignupForm @signup ="enterChat"/>
       <p>Already registered? <span @click="showLogin = true">Login</span>  Instead</p>
       </div>
      
     

  </div>
</template>

<script>

import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'

export default {
    components: {SignupForm, LoginForm},
    setup(){
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
           router.push({name:'Chatroom'})
        }
        return {showLogin, enterChat}
    }
}
</script>

<style>
.welcome{
    font-size: 10px;
    text-align: center;
    padding: 20px 0;
    font-weight: 900;

}

.welcometext{
    font-size: 40px;
    text-align: center;
    padding: 10px 0;
    font-weight: 900;
}

.welcometext1{
    font-size: 20px;
    text-align: center;
    padding: 7px 0;
    position: absolute;
    top: 140px;
    left: 685px;
    color: rgb(29, 32, 32);
    font-weight: 600;
}

.welcometext2{
    font-size: 30px;
    text-align: center;
    padding: 7px 7px;
    position: absolute;
    top: 165px;
    left: 630px;
    color: rgb(9, 180, 163);
    font-weight: 600;
}

.welcometext3{
    font-size: 10px;
    font-style: italic;
    text-align: center;
    padding: 7px 7px;
    position: absolute;
    top: 77px;
    left: 512px;
    color: rgb(3, 189, 170);
    font-weight: 900;

}

.welcome form{
    width: 300px;
    margin:80px 50px 40px;
    align-items: center;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;
    align-items: center;
}

.welcome input{
    width:100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
    align-content: center;
}

.welcome span{
    font-weight: bold;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
}

.welcome button{
    margin: 10px;
}
</style>