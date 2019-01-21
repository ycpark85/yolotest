<template>
<v-container
    id="grid"
    fluid
    tag="section"
    class="con pa-0"
    
  >
     <v-layout row mt-2 >
      <v-flex xs1 ml-2 pl-0>
        <v-card color="primary" flat >
            <v-avatar >
            <img 
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
            </v-avatar>
        </v-card>
      </v-flex>
       <v-flex xs6 ml-3>
        <v-card color="primary" flat>
             <v-card-text >프로방스</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="secondary"  flat >
          <v-card-text class="one">1:1문의</v-card-text>
        
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
      v-for="(item,i) in items1"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
   <v-layout wrap row class="forth">
     <!-- <v-flex xs3 >
        <v-card  flat  >
          <v-card-text class="ico2"><v-icon class="ico3" >icon-activepurchese </v-icon>{{purnum}}</v-card-text>
        </v-card>
      </v-flex> -->
      <v-flex xs4 >
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">icon-activesmeilblue </v-icon> {{purnum}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4  @click="like">
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">{{istar}}</v-icon>{{purnum}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 >
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">icon-pacil </v-icon>{{purnum}}</v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   <v-layout wrap row class="" align-space-between column text-xs-center>
     <v-flex>
       <v-card  flat  >
          <v-card-text class="time1"><div class="title">슈가케익아트 원데이클래스</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card  flat class="time" >
          <v-card-text class="time1"><div class="subheading">2018.06.25.토/서울</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="title">￦20,000</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
        <v-btn outline color="black" class="aple">상세보기</v-btn>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="caption">#원데이클래스 #케익만들기 #서울취미</div></v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
 
  </v-container>
</template>
<script>
import axios from 'axios'
  export default {
   data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        
        ],
        items1: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        purnum:20,
        istar:'icon-star',
        postid:'p-1',
        userId:'u1'
        
      }
    },
    methods: {
      like(){
       if(this.istar=='icon-star'){
         this.istar='icon-activelikeblue'
         this.likeadd()
       }else{
         this.istar='icon-star'
         this.likedelete()
       }  
      },
      async likeadd(){
       
        let url='/api/v1.0/users/likeadd'
        let data = await axios.post(url,data={
          postid : this.postid,
          userid : this.userId
          
        })


      },
      async likedelete(){
        let url='/api/v1.0/users/likedelete'
        let data = await axios.post(url, data={
          postid:this.postid,
          userid:this.userId
        })
      }
      
        
    
    }
  }
</script>

<style scoped>
.con{
  max-width: 500px;
  min-width: 350px;
    border:1px solid black;
    margin-top: 60px;
    margin-bottom: 20px;
}.ava{
    margin-right: 10px;
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
</style>
