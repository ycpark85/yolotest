<template>
    <v-container class="con ">
        <v-app>
        <v-layout row align-space-between>
           <v-list class="vlist">
          <v-list-tile
            v-for="user in users"
            :key="user.profileUserid"
            avatar
            class="ac1"
          >
      
          <v-list-tile-avatar>
              <img :src='"/server/uploads/user/profile"+user["profile.image"]'>
            </v-list-tile-avatar>
             <v-list-tile-content>
              <v-list-tile-title v-text='user["profile.nickname"] ' class="nickname"></v-list-tile-title>
            </v-list-tile-content>
           <v-list-tile-action v-if="user['profile.userid']!=userid " class="ac" @click="addfri(user['profile.userid'])">
                <v-btn flat icon >
                <v-icon color="grey lighten-1">icon-f-plus</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action class="ac" v-if="user['profile.userid']!=userid" >
                <v-btn flat icon :to='{path: "/profile/" + user["profileUserid"]}' >
                <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action class="ac" v-if="user['profile.userid']!=userid" >
                <v-btn flat icon :to='{path: "/letter/send/" + user["profileUserid"]}'>
                 <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action class="ac" v-if="user['profile.userid']!=userid" @click="addinfri(user['profileUserid'])">
                <v-btn flat icon >
                <v-icon color="grey lighten-1">{{infriend[user['profileUserid']]}}</v-icon>
                </v-btn>
              </v-list-tile-action>
          </v-list-tile>
           
        </v-list>
        </v-layout>
        </v-app>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return{
            users:[],
            postcode:this.$route.params.id,
            userid:'',
            infriends:[],
            infriend:{},
            friends:[],
            frined:{}

           
        }
    },
    methods: {
        async list(){
           
            let url='/api/v1.0/admin/userlist'
            let data = await axios.post(url,data={
                postcode:this.postcode
            })
            this.users = data.data.userlists
            this.userid = data.data.userid
            this.infriends=data.data.infriend
            this.friends = data.data.frined

           
            for(var i=0; i<this.users.length;i++){
              this.infriend[this.users[i].profileUserid]="icon-bookmark"
              
            }
            for(var i=0; i<this.infriends.length;i++){
               this.infriend[this.infriends[i].targetid]="icon-mark"
               
            }
            for(var i=0; i<this.friends.length;i++){
                this.frined[this.frineds[i].targetid]=this.this.frineds[i].targetid
            }
           
        },
        async addinfri(targetid){
            let url='/api/v1.0/friends/interfriend'
            let data = await axios.post(url,data={
                    targetid:targetid
            })
            this.list()
        },

        async addfri(targetid){
            let url='/api/v1.0/friends/addfriends'
            let data = await axios.post(url,data={
                    targetid:targetid
            })
                alert(data.data.message)

         
           
        }
    },
    mounted() {
        this.list()
    },
}
</script>


<style scoped>
.con{ 
    padding: 0px;
    min-width: 350px;
    max-width: 500px;
    margin-top: 70px;
}
.ac1{
    box-shadow:0.5px 0.2px 0.2px 0px;
}
.vlist{
    width: 100%;
}
.nickname{
    font-weight: bold;

}
</style>
