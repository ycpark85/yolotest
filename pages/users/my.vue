<template>
    <v-container class="con">
        <v-layout align-space-around row fill-height >
    <v-flex xs4 class="pro">
        <v-card class="proimg">
             <v-card-media
              :src='"../../server/uploads/user/profile"+profile.image'
              height="120"
              class="grey darken-4"
            ></v-card-media>
         
        </v-card>
        
    </v-flex>
    <v-flex xs8 class="pro1">
        <v-card flat>
            <v-card-title class="name">{{profile.nickname}} <v-btn flat icon >
                <span class="icon-introduce nicon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
                </v-btn>
            </v-card-title>
           
        </v-card >
        <v-card flat class="stm">매일매일 새롭게 시작하는 마음으로</v-card>
        <v-card flat>
            <v-card-title class="name1">
                <span>하비</span><span class="number">2</span>
                <span>프렌즈</span><span class="number">10</span>
                <span>호감도</span><span class="number">50</span>
            </v-card-title></v-card>
        <v-card flat :to='"/profile/"+profile.userid'><v-btn color="blue" class="probtn">내프로필</v-btn></v-card>
    </v-flex>
    </v-layout>
     
      <v-tabs
       
        v-model="tabs"
        centered
        color="transparent"
      >
      <v-tab href="#mobile-tabs-5-1" class="primary--text">
          <v-icon>icon-dot</v-icon>
        </v-tab>

        <v-tab href="#mobile-tabs-5-2" class="primary--text">
          <v-icon>icon-dot</v-icon>
        </v-tab>

       
      </v-tabs>   
   
    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item
        :id="'mobile-tabs-5-1'"
      >
    <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <v-flex
              v-for="post in posts"
              :key="post['postcode']"
              xs4
            >
              <v-card flat tile :to='"/post/"+post["postcode"]'>
                <v-card-media
                  
                  :src='"../../server/uploads/user/post"+post["mainimg"]'
                  height="150px"
                ></v-card-media>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>
    
            
    </v-flex>
  </v-layout >      
      </v-tab-item>


       <v-tab-item
        :id="'mobile-tabs-5-2'"
      >
        <v-layout class="sec-con">
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-md fluid >
           <v-layout row wrap >
                <v-flex
             xs4
            >
              <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/setting.png')"
                 
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs4
            >
              <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/notice.png')"
                 
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs4
            >
              <!-- <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/questions1.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs3
            > -->
              <!-- <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/event.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs3
            > -->
              <!-- <v-card flat tile to="/coupon/user/coupon">
                <v-card-media
                  v-bind:src="require('../../image/cupone.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs3
            > -->
              <!-- <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/paylist.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex>
             <v-flex
             xs3
            > -->
              <!-- <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/point.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex>
            <v-flex
             xs3
            > -->
             <!-- <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/canpane.png')"
                  height="80px"
                ></v-card-media>
              </v-card>
            </v-flex><v-flex
             xs3
            >-->
              <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/myhobby.png')"
                 
                ></v-card-media>
              </v-card>
            </v-flex>
            <v-flex
             xs4
            >
              <v-card flat tile to="/users/game">
                <v-card-media
                  v-bind:src="require('../../image/soulmate.png')"
                  
                  
                ></v-card-media>
              </v-card>
            </v-flex>
            <v-flex
             xs4
            >
              <v-card flat tile  to="/letter">
                <v-card-media
                  v-bind:src="require('../../image/letter.png')"
                  
                  to="/letter"
                ></v-card-media>
              </v-card>
            </v-flex>
            <v-flex
             xs4
            >
              <v-card flat tile>
                <v-card-media
                  v-bind:src="require('../../image/present.png')"
                  
                ></v-card-media>
              </v-card>
            </v-flex>
            
            
          </v-layout>
          
          </v-container>  
            </v-card>
    
            
    </v-flex>
  </v-layout>      
      </v-tab-item>
    </v-tabs-items>
    <v-layout>
      <v-flex>
          <v-card flat><v-btn color="blue" class="probtn" @click="signout ">로그아웃</v-btn></v-card>
      </v-flex>
    </v-layout>
        
       
    </v-container>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        tabs: null,
        profile:{},
        posts:[]
      }
    },
    methods:{
      async my(){
        let url ='/api/v1.0/users/my'
        let data = await axios.get(url)
        this.profile=data.data.profile,
        this.posts = data.data.posts

      },
      async signout () {
            let url = '/api/v1.0/users/signout'
            let data = await axios.put(url)
            alert('로그아웃 되었습니다.')
            this.$nuxt.$router.replace({ path: '/login' })  // 메인페이지 이동

        }
    },
    mounted(){
        this.my()
    }
  }
</script>
<style scoped>
.v-carousel__controls{
    position: absolute;
   
}
.con{
   max-width: 500px;
   min-width: 350px;
   
    
}
.pro{
    margin-top: 10px;
    padding: px; 
}
.proimg{
    border-radius: 15px;
    padding: 0px;
    overflow: hidden;
    width: 120px;
    height: 120px;
}
.pro img{
   width: 100%;
   
}

.pro1{
   
   margin-left: 20px;
}
.name{
    font-size: 15pt;
    padding: 0;
}
.name1{
    font-size: 12pt;
    padding:0;
}
.probtn{
    margin-left: 0;
    padding-left: 0;
    color: white;
    width: 100%;
    font-weight: bold;
}
.nicon{
    font-size: 15pt;
}
.stm{
    font-size: 10pt;
    color: gray;
}
.number{
    color:blue;
}
.item1{
    text-align: center;
    font-size: 5pt;
}
.ite{
    text-align: center;
}
.sec-con{
  margin-bottom: 10px;
}
</style>

