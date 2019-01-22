<template>
<div>
  <userheader></userheader>
  <nuxt/>
  <!-- <cmtbottom></cmtbottom> -->
</div>
</template>

<script>
import userheader from '../components/userheader'
import cmtbottom from '../components/cmtbottom'

   export default {
    components:{
   userheader, cmtbottom
    }
  }
</script>
<style scoped>
.v-messages{
    min-height: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin:0;
    padding: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed {
    padding:0;
    margin: 0;
}
.v-input__slot{
    margin-bottom: 0;
    padding: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed .v-input__slot {
    padding: 0 0;
    margin: 0;
}

</style>
