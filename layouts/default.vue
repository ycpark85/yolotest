<template>
<div>
  <userheader></userheader>
  <nuxt/>
  <botmnav></botmnav>
</div>
</template>

<script>
import userheader from '../components/userheader'
import botmnav from '../components/userbottomnav'

   export default {
    components:{
      userheader, botmnav
    }
  }
</script>
<style>
.con {
    margin-top: 60px;
}
.application--wrap{
    min-height: 0;
    background-color: white;
}
</style>
