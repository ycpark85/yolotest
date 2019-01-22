<template>
    <v-container
    id="grid"
    fluid
    tag="section"
    class="con pa-0 elevation-1"
    
  >
  <template v-for="content in contents">
    <v-container :key="content['habi_code']" class="con-p-1" >
     <v-layout row mt-2 :key="content['habi_code']">
      <v-flex xs1 ml-2 pl-0>
        <v-card color="primary" flat >
            <v-avatar >
            <img 
                :src='"../../server/uploads/admin/profile"+content["company.img"]'
                alt="John"
            >
            </v-avatar>
        </v-card>
      </v-flex>
       <v-flex xs6 ml-3>
        <v-card color="primary" flat>
             <v-card-text class="cpanyname">{{content['company.name']}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="secondary"  flat >
          
        
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap row>
      <v-flex class="video">
       <video  controls="controls" controlsList="nodownload" preload="auto">

    <source :src='"../../server/uploads/admin/video"+content["video"]' type="video/mp4" />
    <source src="Kalimba.webm" type="video/webm" />
</video>
   </v-flex>
    </v-layout>
   <v-layout wrap row class="forth">
     <!-- <v-flex xs3 >
        <v-card  flat  >
          <v-card-text class="ico2"><v-icon class="ico3" >icon-activepurchese </v-icon>{{purnum}}</v-card-text>
        </v-card>
      </v-flex> -->
      <v-flex xs4 >
        <v-card flat :to='{path: "/userslist/" + content["habi_code"]}'>
          <v-card-text class="ico2"><v-icon class="ico3">icon-activesmeilblue </v-icon> {{number[content['habi_code']]}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4  @click="conilike2(content['habi_code'])">
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">{{
            conilike[content['habi_code']]}}</v-icon>
            {{purnum}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 >
        <v-card flat :to='{path: "/content/" + content["habi_code"]}'>
          <v-card-text class="ico2"><v-icon class="ico3">icon-pacil </v-icon>{{purnum}}</v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   <v-layout align-space-between column text-xs-center>
     <v-flex>
       <v-card  class="time" flat  >
          <v-card-text class="time1"><div class="title">{{content['title']}}</div></v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   <v-layout wrap  class=""  column >
     
     <v-flex>
       <v-card  flat  >
          <v-card-text class="time1"><div class="exp" v-html="content['exp']"></div></v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   <v-layout align-space-between column text-xs-center>
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="phone">문의전화 : {{content['company.phone']}}</div></v-card-text>
        </v-card>
     </v-flex>
    
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="caption">{{content['tag']}}</div></v-card-text>
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
            contents:[],
            conlike:[],
            conilike:{},
            userid:'',
            alllike:[],
            number:{},
            num:0

        }
    },
    methods: {
        async contentslist(){
            console.log('왔냐?')
            let url = '/api/v1.0/admin/contentslist'
            let data = await axios.get(url)
            this.contents =data.data.contents
            this.conlike  = data.data.conlikes
            this.alllike = data.data.alllike
            console.log(this.alllike.length)
             console.log(this.contents.length)
            for(var i=0; i<this.contents.length;i++){
              this.conilike[this.contents[i].habi_code]='icon-star'
           
            }
              for(var i=0; i<this.conlike.length;i++){
            this.conilike[this.conlike[i].adminContentHabiCode]='icon-activelikeblue'
          } 
            for(var i=0; i<this.contents.length;i++){
              var num=0
               console.log('여기도 왔어.')
            for(var a=0; a<this.alllike.length; a++){ 
               if(this.contents[i].habi_code==this.alllike[a].adminContentHabiCode){
                 num+=1
                 this.number[this.contents[i].habi_code]=num
                 
               }
                 }
            }
         
         
        },
        async conilike2(habicode){
          let url='/api/v1.0/admin/likeplus'
          let data = await axios.post(url,data={
            habicode:habicode
          })
          this.contentslist()
        },
    
    },
    mounted(){
        this.contentslist()
    }

}
</script>




<style scoped>
.con{
  max-width: 500px;
  min-width: 350px;
   
    margin-top: 70px;
    margin-bottom: 20px;
}.ava{
    margin-right: 10px;
}
video{
  max-width: 100%;
  min-height: 100%;
 
}

.ico{
  text-align: right;
  padding-left:0;
}
.ico1{
  font-size: 10pt;
}
.ico2{
  font-size: 10pt;
  color: gray;
}
.ico3{
  margin-right: 3px;
  font-size: 14pt;
  color: teal;
}
.one{
  padding-left: 0;
  padding-right: 0;
  text-align: right;
}
.caro{
  height: 350px;
}
.forth{
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}

.title{
  font-weight: bold;
  
}
.exp{
  text-align: left;
  font-size: 10pt;
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
.cpanyname{
    font-weight: bold;
}
.con-p-1{
padding: 0;
}
.phone{
  font-size: 11pt;
  font-weight: bold;
  
}
</style>
