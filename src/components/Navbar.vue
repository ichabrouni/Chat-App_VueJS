<template>
  <nav v-if="user">
      <div>
          <p class="user">Hey {{user.displayName}}</p>
          <p class="email"> Currently logged in as ... </p>
          <p class="user1">{{user.email}}</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup() {
        const {logout, error} = useLogout()
        const {user} = getUser()
        
        const handleClick = async () => {
          await logout()
          if (!error.value) {
              console.log('user logged out')
          }
        }

          return { handleClick, user }
        }

    }


</script>

<style>
.user{
    color: rgb(5, 157, 124);
}

.user1{
    color: rgb(5, 157, 124);
    position: absolute;
   top: 122px;
   left: 400px;
}
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 nav p {
 margin: 2px auto;
 fornt-size: 16px;
 color: #444;
 }

 nav p.email{
     font-size: 14px;
     color: #999;
 }

</style>