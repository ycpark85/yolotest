<template>
   <v-card height="200px" flat >
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav 
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="grey darken-3"
    >
      <v-btn light
        color="white"
        flat
        value="home"
      >
        
        <v-icon>icon-home2 </v-icon>
      </v-btn>
       <v-btn
        color="white"
        flat
        value="hobby"
      >
      
        <v-icon>icon-home2 </v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="post"
      >
       
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="friends"
      >
        
        <v-icon>place</v-icon>
      </v-btn>
       <v-btn
        color="white"
        flat
        value="my"
      >
        
        <v-icon>place</v-icon>
      </v-btn>





    </v-bottom-nav>
  </v-card>
</template>

<script>
   export default {
    data () {
      return {
        bottomNav: 'home'
      }
    }
  }
</script>