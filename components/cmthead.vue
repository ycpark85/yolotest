<template>
      <v-toolbar class="head1"
    fixed
      dark
     height="60px"
    >
      <v-toolbar-title class="tile"> <v-icon @click="back">arrow_back</v-icon> <span class="p-title"> 포스팅</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        
        <v-spacer></v-spacer>
      </v-btn>
    </v-toolbar>
</template>
<script>
export default {
  methods:{
    back(){
       this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
.tile{
    font-weight: bold;
  
}
.arrow{
 
 background-color: #fdd000;
}
.head1{
  background-color: #fdd000;
}
.p-title{
  margin-left: 50px;
}

</style>

