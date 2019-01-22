<template>

    <v-container 
    class="con">
          <v-layout>
            <v-flex xs12>
                <v-card flat>
                     <template v-for="item in info"> 
                   <v-card-text style="height: 300px;" 
                   class="elevation-1" :key="item">
                  
                    <v-layout row >
                        <v-flex xs5>
                            <v-card flat>
            <v-card-media 
          :src='"../../server/uploads/admin/thumimg"+item["admin_content.img"]'
            height="150px"
            width="100%"
            >
            </v-card-media>    

                            </v-card>
                        </v-flex>
                         <v-flex xs7 >
                <v-card class="mo-2" flat>
                    <v-card-text class="mo-1-title">{{item.title}}</v-card-text>
                    <v-card-text class="mo-1-text">모임 지역:&nbsp;{{item.adress}}</v-card-text>
                    <v-card-text class="mo-1-text">모임 일자:&nbsp;{{item.month}}월 {{item.day}}일</v-card-text>
                    <v-card-text class="mo-1-text">연 령 &nbsp;대:&nbsp;{{item.minage}}~{{item.maxage}}세</v-card-text>

                </v-card>   
            </v-flex>
                    </v-layout> 
           
                    <v-layout row>

                        <v-flex xs12>
                            <v-card flat>
                                <v-card-text>
                                    {{item.text}}
                                </v-card-text>
                            </v-card>

                        </v-flex>

                    </v-layout>
                 

                   </v-card-text>
   </template> 





       <v-bottom-sheet v-model="sheet" inset="true">
      <v-btn
        slot="activator"
        color="purple"
        dark
        class="joinlist"
      >
       참여회원 보기
      </v-btn>

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
    </v-bottom-sheet>

 <v-layout align-space-around column >
            <cmtbottom></cmtbottom>
            <v-flex class="po-comment" xs12>
                <v-card >
                    <v-card-title>comment {{cmtnum}}</v-card-title>
                </v-card>
            </v-flex>
            
           <v-layout align-space-around column >
               <template v-for="comt in comments">
                <v-layout  align-start row :key='comt["profileUserid"]' mb-3>
                 
               <v-flex xs2 pt-2 >
                  <v-avatar>
                <img :src='"../../server/uploads/user/profile"+comt["profile.image"]' alt="손나은">
                </v-avatar>
               </v-flex>
               <v-flex xs10 mt-3>
                   <v-card flat>
                      <span class="comname">{{comt["profile.nickname"]}}</span>
                   </v-card>
                   <v-card flat>
                       <span v-html='comt["comments"]'>
                           
                       </span>
                   </v-card>
               </v-flex>
             
               </v-layout>
                <v-divider :key='comt["profileUserid"]' ></v-divider>
               </template>
           </v-layout>
          
        
        </v-layout>

    
                </v-card>
            </v-flex>
        </v-layout>     
    </v-container>
</template>
<script>
import axios from 'axios'
import cmtbottom from '../../../components/joincom'
export default {
    layout: 'joincom',
     components:{
    cmtbottom
    },
    data(){
        return{
             sheet: false,
             comments:[],
             userid:'',
             postcode: this.$route.params.id,
            cmtnum:'',
            info:{},
            users:[],
            infriends:[],
            infriend:{},
            friends:[],
            frined:{}
        }
    },
    methods:{
    async comlist(){
           try{
            let url = `/api/v1.0/comment/joinlist?postcode=${this.postcode}`
            let data = await axios.get(url)        
              this.comments=data.data.comments,
              this.userid=data.data.userid,
              this.postimg=data.data.post.postimg.split('/').filter(x => x) 
              this.cmtnum=data.data.comments.length;  
             
            }catch(e){
             error({message:'뭔가 잘못됨.'})
              this.$router.push({path:'../../index'})
         }
         
        
    },async adduser(){
        let url = '/api/v1.0/moim//adduser'
        let data = await axios.post({
                moimcode:postcode
        })
    },
    async list(){
           
            let url='/api/v1.0/moim/userlist'
            let data = await axios.post(url,data={
                postcode:this.postcode
            })
            this.users = data.data.userlists
            this.userid = data.data.userid
            this.infriends=data.data.infriend
            this.friends = data.data.frined
            this.info = data.data.info
            console.log(this.users)
            console.log(this.userid)
            console.log(this.infriends)
            console.log(this.friends)
            console.log(this.info)

            this.comlist()
            this.adduser()
           
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

         
           
        },
        

    },
    mounted() {
        console.log("postcode"+this. postcode)
         this.list()  
    },
}
</script>


<style scoped>
.con{
    max-width: 500px;
    min-width: 370px;
    
    margin-top: 60px;
    margin-bottom: 20px;
}
.mo-2{
     height: 100px;
    padding-left:15px; 
}
.mo-1-title{
    font-size: 17pt;
    font-weight: bold;
    padding:10px;

}
.mo-1-text{
    padding: 5px;
    font-size: 10pt;
    font-weight: bold;
    color: gray;
}
.moim{
    font-size: 20px;
    font-weight: bold;
}
.v-dialog__container{
    width: 100%;
}
.joinlist{
    width: 100%;
    margin: 0;
}
</style>
