<template>

  <v-container class="con">
        <v-tabs    
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    
      
        <v-tab href="#receit-letter" class="t-1">
         받은쪽지함
        </v-tab>
      
        <v-tab href="#send-letter"  class="t-1">
          보낸쪽지함
        </v-tab>
   
        <v-tab-item :id="'receit-letter'">
            <v-layout>
                <v-flex>
                    
                </v-flex>
            </v-layout>

          <v-list two-line>
          <template v-for="rlist in reslists">
            <v-list-tile
             :key="rlist['lecode']"
              avatar
            >

              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+rlist["profile.image"]'>
              </v-list-tile-avatar>
             
              <v-list-tile-content>
                <v-card flat :to='{path: "/letter/receipt/" + rlist["lecode"]}'>
                <v-list-tile-title >{{rlist["profile.nickname"]}}</v-list-tile-title>
                <v-list-tile-sub-title >
                  {{conmasge[rlist['lecode']]}}
                </v-list-tile-sub-title>
                </v-card>
              </v-list-tile-content>       
                <span class="times">방금</span>
            </v-list-tile>
          </template>
        </v-list>
        </v-tab-item>
         <v-tab-item :id="'send-letter'">
            <v-layout>
                <v-flex>
                    <span></span>
                </v-flex>
            </v-layout>

          <v-list two-line>
          <template v-for="sendlist in sendlists">
            <v-list-tile
            :key="sendlist['lecode']"
              avatar
            >
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+sendlist["profile.image"]'>
              </v-list-tile-avatar>

              <v-list-tile-content>
                  <v-card flat :to='{path: "/letter/receipt/" + sendlist["lecode"]}'>   
                <v-list-tile-title >{{sendlist["profile.nickname"]}}</v-list-tile-title>
                 <v-list-tile-sub-title >{{sendlist["content"]}}</v-list-tile-sub-title>
                  </v-card>
              </v-list-tile-content>
            <!--
             <v-list-tile-action class="ac" v-if="sendlist.comfirm!==0">
                 <div>  
                     <v-icon class="lcomfirm">icon-lcomfirm</v-icon><span class="con-i">확인완료</span> 
                 </div>
              </v-list-tile-action>
               <v-list-tile-action class="ac" v-else-if="sendlist.block!==0">
                 <div>  
                     <v-icon class="lreject">icon-lreject</v-icon><span class="con-i">쪽지거부</span> 
                 </div>
              </v-list-tile-action>
              -->
              
                <span class="times">방금</span>
              
             
             

            </v-list-tile>
          </template>
        </v-list>
        </v-tab-item>



    </v-tabs>

    </v-container>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            reslists:[],
            sendlists:[],
            conmasge:{}
        }
    },
    methods: {
       async lelist(){
            let data = await axios.get('/api/v1.0/users/letter')
            this.reslists = data.data.resmsg
            this.sendlists = data.data.sendmsg
            console.log(this.reslists)
           for(var i=0; i<this.reslists.length;i++){
               this.conmasge[this.reslists[i].lecode] = this.reslists[i].content.replace(/<br>/gi,'')
               console.log( this.conmasge[this.reslists[i].lecode])
           }
       }
    },
    async mounted() {
        this.lelist()
    },
}
</script>


<style >
*{
    margin: 0;
    padding: 0;
}
.con{
    margin-top: 40px;
}
.hearticon{
     margin-left: 10px;
    font-size: 13pt;
}
.t-1{
    font-weight: bold;
    width: 50%;
}
.f-i{
    font-size: 17pt;
    margin-left: 10px;
}
.f-2{
    font-size: 17pt;
    margin-left: 10px;
}
.f-3{
    font-size: 17pt;
    margin-left: 12px;
}
.f-4{
    font-size: 17pt;
    margin-left: 16px;
}
.t-i{
    font-size: 10pt;
    margin-right: 10px;
    font-weight: bold;
}
.aple{
  
  min-width: 0;
  width:18px;
  height: 20px;
}
.con-1{
    font-size: 9pt;
    
}
.times{
    margin-left: 10px;
    font-size: 9pt;
    color: gray;
    width: 30px;

}
.v-list__tile{
    padding: 0;
}
.l-po{
    font-size: 10pt;
    font-weight: bold;
    padding-bottom:20px;
}
.lreject{
    font-size: 5pt;
    margin-bottom:3px;
}
.lcomfirm{
    font-size: 10pt;
    margin-bottom: 2px;
}
 li a {
    text-decoration: none;
 }
 .nuxt-link{
     text-decoration: none;
 }
</style>

