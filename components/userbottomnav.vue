<template>
    <v-card height="50px" flat >
    <div class="headline  pa-0">
     
    </div>
      
    <v-bottom-nav 
      class="bot"
      :active.sync="bottomNav"
      :value="true"
      fixed
    >

      <v-btn
        color="white"
        flat
        value="home"
        to="/"
      >
      <v-icon>icon-home1 </v-icon>
      
      </v-btn>

       <v-btn
        color="white"
        flat
        value="hobby"
        to="/users/habi"
      >
      
        <v-icon>icon-hobby </v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="post"
         to="/users/post"
      >
       
        <v-icon>icon-posticon</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="friends"
         to="/users/friends"
      >
        
        <v-icon>icon-plus </v-icon>
      </v-btn>
       <v-btn
        color="white"
        flat
        value="my"
         to="/users/my"
      >
        <v-icon>icon-my</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
export default {
      data () {
      return {
        bottomNav: 'users'
      }
    }
}
</script>
<style>

.bot{
  background-color: #4e4e4e;
}
</style>

