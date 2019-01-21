<template>
  <v-container
   id="grid"
    fluid
    tag="section"
    class="con pa-0"
    >
    <template v-for="post in posts"  >
     <v-container  :key="post['postcode']" class="elevation-1 con-1">
      <v-layout row mt-1 :key="post['postcode']">
      <v-flex xs1 ml-2 pl-0>
        <v-card  color="primary" flat >
            <v-avatar >
            <img 
               :src='"../../server/uploads/user/profile"+post["profile.image"]'
                alt="John"
            >
            </v-avatar>
        </v-card>
      </v-flex>
       <v-flex xs7 ml-3>
        <v-card  color="primary" flat>
             <v-card-text class="i-nick" >{{post['profile.nickname']}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-if="userid!=post['userid']">
        <v-card :to='{path: "/profile/" + post["userid"]}' color="secondary"  flat >
         
          <v-card-text class="one"><v-icon>icon-profile </v-icon></v-card-text>
         
        </v-card>
      </v-flex>
      <v-flex xs1 v-if="userid!=post['userid']">
        <v-card :to='{path: "/letter/send/" + post["userid"]}' color="secondary"  flat >  
          <v-card-text class="one"><v-icon>icon-letter </v-icon></v-card-text>
        </v-card>
      </v-flex>
     
    </v-layout>
    <v-layout wrap row>
      <v-flex>
        <v-carousel
        :cycle="false"
        hide-controls
         class="caro"
        >
    <v-carousel-item
      v-for="img in post['postimg']"
      :key="img"
      :src='"../../server/uploads/user/post"+img'
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
   <v-layout wrap row class="forth" >
     <v-flex xs3 @click="ilike2(post['postcode'])" >
        <v-card  flat>
          <v-card-text ><v-icon class="ico1">{{ilike[post['postcode']]}}</v-icon><span class="ico2"></span></v-card-text>
          
        </v-card>
      </v-flex>
      <v-flex xs3 >
        <v-card  flat :to='{path: "/post/" + post["postcode"]}'>
          <v-card-text ><v-icon color="black" class="ico1">icon-commet</v-icon><span class="ico2"></span></v-card-text>
        </v-card>
      </v-flex>
      
   </v-layout>
   <v-layout wrap row class="conten" align-space-between column mt-1>
     <v-flex>
      
     </v-flex>
     <v-flex>
       <v-card   flat class="time" >
          <v-card-text class="time1"><div class="u-c-con"><p class="original-text"> {{post['contents']}}</p></div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card  flat class="time" >
          <v-card-text class="time1"><div class="caption">{{post['hashtag']}}</div></v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   </v-container>
 </template>
  </v-container>
</template>
<script>
import axios from 'axios'
  export default {
    data(){
      return{
        posts:[],
        likes:[],
        ilike:{},
        userid:''
        
      }
    }
    ,
     
    async mounted () {
        let url1 = '/api/v1.0/users/session-check'
        let logincheck = await axios.get(url1)
        if(!logincheck.data){
            alert('로그인하여야 이용가능 합니다.')
             this.$router.push({path:'/login'})
        }else{
          
          this.postlist()
        
        }
    },
     
    methods: {
      async postlist(){
      let url = '/api/v1.0/users/postlist'
      let data = await axios.get(url)
      this.posts=data.data.post
      this.likes=data.data.likes
      this.userid=data.data.userid
      console.log(this.userid)

      for(var i=0; i<this.posts.length;i++){ 
       this.posts[i].postimg= this.posts[i].postimg.split('/').filter(x => x)
       this.ilike[this.posts[i].postcode]='icon-like'
      }
     for(var i=0; i<this.likes.length;i++){
        this.ilike[this.likes[i].postid]='icon-heart'
      }    
      
     },

     async ilike2(postcode){
     let url = '/api/v1.0/users/addlikes'
     let data = await axios.post(url, data={
        postcode:postcode
     })
      this.postlist()
     },

  },
    
  }
</script>

<style scoped>
.con{
    max-width: 500px;
    min-width: 370px;
    
    margin-top: 60px;
    margin-bottom: 20px;
}.ava{
    margin-right: 0;
}
.ico{
  text-align: right;
  padding-left:0;
}
.ico1{
 margin-right: 10px;
  font-size: 15pt;
}
.ico2{
  margin-right: 10px;
  font-size: 10pt;
}
.one{
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}
.caro{
  height: 350px;
}
.forth{
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}

.title, .subheading{
  font-weight: bold;
  
}
.time1{
  padding-bottom: 5px;
  padding-top: 0;
}
.aple{
  font-size: 15pt;
  font-weight: bold;
  width:200px;
}
.caption{
  color:gray;
}
.u-c-title{
  font-size: 16pt;
  font-weight: bold;

}
.u-c-con{
  width: 350px;
}
.con-1{
padding-left: 0;
padding-right: 0;
  
}
.i-nick{
  font-weight: bold;
  font-size:12pt;
}


</style>



