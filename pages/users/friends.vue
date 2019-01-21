<template>
<v-container class="con">
  <v-app>
  
    <v-layout align-space-between column class="lay" mt-5>
       <v-expansion-panel
      v-model="panel"
     
    >
    
      <v-expansion-panel-content
       
      >
        <v-flex slot="header" ><v-icon class="f-icon">icon-f-plus</v-icon>친구요청</v-flex>
        <v-card>
           <v-list two-line>
          <template v-for="item in addfri">
            <v-list-tile
            :key='item["targetid"]'
              avatar
            >
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+item.profile.image'>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title >{{item.profile.nickname}}</v-list-tile-title>
                <v-list-tile-sub-title  v-if='item["type"]=="send"'><v-icon class="f-i">icon-f-arrow</v-icon></v-list-tile-sub-title>
                  <v-list-tile-sub-title v-else-if='item["type"]=="recept"'><v-icon class="f-i">icon-f-arrow2</v-icon></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action class="ac">
                <v-btn v-if='item["type"]=="recept"' outline color="gray"  small block class="aple" @click="recept(item['targetid'])">수락</v-btn>
              <v-btn v-else-if='item["type"]=="send"' outline color="gray" small block class="aple" @click="cancel(item['targetid'])">취소</v-btn>
              </v-list-tile-action>
              <v-list-tile-action class="ac">
                 <nuxt-link :to='{path: "/profile/" + item["targetid"]}'>
                <v-btn flat icon >
                <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
                 </nuxt-link>
              </v-list-tile-action>
              <v-list-tile-action class="ac">
                 <nuxt-link :to='{path: "/letter/send/" + item["targetid"]}'>
                <v-btn flat icon >
                 <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
                 </nuxt-link>
              </v-list-tile-action>
              <!-- <v-list-tile-action class="ac">
                <v-btn flat icon >
                 <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>
              </v-list-tile-action> -->

            </v-list-tile>
          </template>
        </v-list>
        </v-card>
      </v-expansion-panel-content>




      <v-divider></v-divider>
      <v-expansion-panel-content
       
      >
        <v-flex slot="header" ><v-icon class="f-icon">icon-heart</v-icon>내친구</v-flex>
        <v-card>
          <v-list two-line>
          <template v-for="item in friend">
            <v-list-tile
            :key="item['targetid']"
              avatar
            >
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+item["profile.image"]'>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title >{{item["profile.nickname"]}}</v-list-tile-title>
                <v-list-tile-sub-title >{{item["profile.interest"]}}</v-list-tile-sub-title>
                 
              </v-list-tile-content>

              <v-list-tile-action class="ac">
                 <nuxt-link :to='{path: "/profile/" + item["targetid"]}'>
                <v-btn flat icon >
                <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
                 </nuxt-link>
              </v-list-tile-action>
              <v-list-tile-action class="ac">
                 <nuxt-link :to='{path: "/letter/send/" + item["targetid"]}'>
                <v-btn flat icon >
                 <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
                 </nuxt-link>
              </v-list-tile-action>
              <v-list-tile-action class="ac">
                <v-btn flat icon >
                 <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>
          </template>
        </v-list>
        </v-card>
      </v-expansion-panel-content>
 
  
      <v-expansion-panel-content
       
      >
        <v-flex slot="header" ><v-icon class="f-icon">icon-mark</v-icon>관심친구</v-flex>
        <v-card>
             <v-list two-line>
          <template v-for="inter in interfri" >
            <v-list-tile
            :key="inter['targetid']"
              avatar
              
            >
             <nuxt-link :to='{path: "/timeline/" + inter["targetid"]}'>
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+inter["profile.image"]'>
              </v-list-tile-avatar>
             </nuxt-link> 
              <v-list-tile-content>
                <v-list-tile-title >{{inter['profile.nickname']}}</v-list-tile-title>
                <v-list-tile-sub-title >{{inter['profile.interest']}}</v-list-tile-sub-title>
                 
              </v-list-tile-content>
               <v-btn flat icon class="btn1" @click="addinfri(inter['targetid'])">
                <v-icon color="grey lighten-1">icon-mark</v-icon>
                </v-btn>
          
                <nuxt-link :to='{path: "/profile/" + inter["targetid"]}'>
                <v-btn flat icon class="btn1" >
               <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
                </nuxt-link>  
             
              
                 <nuxt-link :to='{path: "/letter/send/" + inter["targetid"]}'>
                <v-btn flat icon class="btn1">
                 <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
                </nuxt-link> 

                <v-btn flat icon class="btn1">
                 <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>

            </v-list-tile>
           
          </template>
           
        </v-list>
        </v-card>
      </v-expansion-panel-content>
    
      <v-expansion-panel-content
       
      >
      
        <v-flex slot="header" ><v-icon class="f-icon">icon-metching</v-icon>소울메이트</v-flex>
        <v-card >
          <v-list two-line class="btn1">
          <template v-if="soulfri!=null" v-for="soul in soulfri">
            <v-list-tile
            :key="soul['userid']"
              avatar 
              class="white elevation-1"
            >
            <nuxt-link :to='{path: "/timeline/" + soul["userid"]}'>
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+soul["image"]'>
              </v-list-tile-avatar>
            </nuxt-link>  

              <v-list-tile-content>
                <v-list-tile-title >{{soul['nickname']}}</v-list-tile-title>
                <v-list-tile-sub-title >{{soul['interest']}}</v-list-tile-sub-title>
                 
              </v-list-tile-content>
                <v-btn flat icon class="btn1" @click="addinfri(soul['userid'])">
                <v-icon color="grey lighten-1">{{souls[soul['userid']]}}</v-icon>
                </v-btn>
            
               
             
                <nuxt-link :to='{path: "/profile/" + soul["userid"]}'>
                <v-btn flat icon class="btn1" >
               <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
                </nuxt-link>  
             
              
                 <nuxt-link :to='{path: "/letter/send/" + soul["userid"]}'>
                <v-btn flat icon class="btn1">
                 <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
                </nuxt-link> 

                <v-btn flat icon class="btn1">
                 <v-icon color="grey lighten-1">more_vert</v-icon>
                </v-btn>
              
            </v-list-tile>
          </template>
          <template v-else>
            <span>추천된 친구가 없습니다.</span>
          </template>
        </v-list>
        </v-card>
        
      </v-expansion-panel-content> 
    </v-expansion-panel>
    </v-layout>
  
  </v-app>
</v-container>
</template>

<script>
import axios from 'axios'

  export default {
  
    data(){
      return{
        panel:[],
        soulfri:[],
        interfri:[],
        plusfri:[],
        friend:[],
        invitfri:[],
        addfri:[],
        souls:{},
        num:0

      }
    },
    

     methods:{
       async frilist(){
          let url='/api/v1.0/friends/list'
          let data= await axios.get(url)
          this.soulfri = data.data.soulfri
          this.interfri = data.data.interfri
          this.plusfri = data.data.plusfri
          this.friend  = data.data.friend
          this.invitfri = data.data.invitfri
          console.log(this.friend)
          this.num  = this.plusfri.length+ this.invitfri.length
            
          for(var i=0; i<this.plusfri.length; i++){
            this.addfri[i]=this.plusfri[i]
            this.addfri[i].type='send'
          }
          for(var i=this.plusfri.length; i<this.num; i++){
             this.addfri[i]=this.invitfri[i-this.plusfri.length]
             this.addfri[i].type='recept'
          }
           for(var i=0; i<this.soulfri.length;i++){
              this.souls[this.soulfri[i].userid] ="icon-bookmark"
           }
           for(var i=0; i<this.interfri.length;i++){
             this.souls[this.interfri[i].targetid] = "icon-mark"
           } 
           console.log(this.addfri)         
        },

        async addinfri(targetid){
            let url='/api/v1.0/friends/interfriend'
            let data = await axios.post(url,data={
                    targetid:targetid
            })
            this.frilist()
        },

        async cancel(targetid){
          let url='/api/v1.0/friends/cancelfriend'
          let data = await axios.post(url,data={
              targetid:targetid
          })
            alert(data.data.message)
             window.location.reload()
        },
        async recept(targetid){
          let url = '/api/v1.0/friends/receptfriend'
          let data = await axios.post(url,data={
            targetid:targetid
          })
          alert(data.data.message)
           window.location.reload()
        }
     },
     mounted() {
       this.frilist()
     },


  }
</script>

<style scoped>
.con{
  max-width: 500px;
  min-width: 350px;
  width: 100%;
  
}

.application.theme--light{
  background: none;
  
}
.t-1{
  width: 50%;
}
.f-icon{
  font-size: 15pt;
  margin-right: 20px;
}
.f-i{
  font-size: 10pt;
}
.aple{
  min-width: 0;
  width:20px;
}
.ac{
  width: 20px;

}
.chat{
  width: 400px;
}
.btn1{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
</style>
