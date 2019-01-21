<template>

    <v-container class="con" pa-0>
        <v-layout row>
            <v-list subheader>
          <v-list-tile
           
            avatar
           
          >
            <v-list-tile-avatar>
              <img :src='"../../server/uploads/user/profile"+receiptcon["profile.image"]'>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html='receiptcon["profile.nickname"]'></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action class="send" v-if="receiptcon.sendid!=userid">
              <v-btn  outline color="gray"  small block class="aple" >답장</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      
        </v-layout>
        <v-layout row wrap>

            <v-flex xs12 class="textbox" id="textbox">
                 <div id="wrap" v-bind:style="{backgroundColor:receiptcon.color}">
            
            <div class="area" v-html="receiptcon.content"></div>
            </div>
                
            </v-flex>
                
        </v-layout>
       
           
    </v-container>
</template>
<script>
import axios from 'axios'
  export default {
     
    data () {
      return {
          letterid:this.$route.params.id,
          receiptcon:{},         
          top:0,
          h:0,
          wraph:0,
          hei: 0,
          userid:'', 
         
         
        
      }
    },
    async created(){
            let url = `/api/v1.0/letter/receipt?letterid=${this.letterid}` 
            let data = await axios.get(url).then((res)=>{
              this.receiptcon = res.data.receiptcon,
              this.userid = res.data.userid
            
            }

            )
            

    },
    methods:{
       

        
    },
 
  }
</script>
<style>


.con{
    margin-top: 60px;
}
.v-list{
    width: 100%;
    
    
}
.aple{
    font-weight: bold;
}

.letterinput{
    vertical-align: middle

}
textarea{
   
    resize: none;
     text-align: center;
     font-size: 15pt;
     font-weight: bold;
        
    
}
#wrap {
  width: 100%;
  position: relative;
  font-family: sans-serif;
  height: 500px;
 
}

#wrap .area {
  resize: none;
  outline: none;
  display: block;
  width: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
}

#wrap textarea.area {
  left: 0;
  height: 100%;

  background: transparent;
}

#wrap .dummy {
    top: -99999999px;
  left: 100%;
    
}




</style>
