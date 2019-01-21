<template>
    <v-container class="con ">
        <v-layout align-space-around row fill-height mt-3>
    <v-flex xs4 class="pro">
        <v-card class="proimg">
            <img :src='"../../server/uploads/user/profile"+profile.image'> 
        </v-card>
        
    </v-flex>
    <v-flex xs8 class="pro1 " mt-3>
        <v-card flat>
            <v-card-title class="name">{{profile.nickname}}
                
            </v-card-title>
           
        </v-card >
        <v-card flat class="stm">매일매일 새롭게 시작하는 마음으로</v-card>
        <v-card flat>
            <v-card-title class="name1">
                <span>하비</span><span class="number">2</span>
                <span>프렌즈</span><span class="number">10</span>
                <span>호감도</span><span class="number">50</span>
            </v-card-title>
        </v-card>
        <v-card flat>
            <v-card-actions>
                 <v-btn flat icon @click="interfriend">
                <v-icon color="grey lighten-1" >{{ bookmark}}</v-icon>     
                
                </v-btn>
           
                 <v-btn flat icon >
                <v-icon color="grey lighten-1">icon-profile </v-icon>
                </v-btn>
            
                 <v-btn flat icon >
                <v-icon color="grey lighten-1">icon-letter</v-icon>
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-flex>
    </v-layout>
     <v-layout class="nail white elevation-1" mt-3>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid >
           <v-layout row wrap >
           
            <v-flex
              v-for="n in post"
              :key="n['postcode']"
              xs4
            >
              <v-card flat tile>
                <v-card-media
                  :src='"../../server/uploads/user/post"+n["mainimg"]'
                  height="120px"
                ></v-card-media>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>
    
            
    </v-flex>
  </v-layout >      
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    validate ({ params }) {
        return true
    },
    data(){
        return{
            post:[],
            userid:this.$route.params.id,
            userId:'',
            profile:{},
            bookmark:'icon-bookmark'
            
        }
    },
     async created () {
         let url = `/api/v1.0/users/detail?userid=${this.userid}`
         let data = await axios.get(url)
         this.post = data.data.posts
         this.profile = data.data.profile
         this.bookmark= data.data.interest
         this.userId=data.data.userid   
         console.log("포스트",this.post)
         console.log("관심유뮤",this.inter)
          
     },
     methods:{
        async interfriend(){
            let url ='/api/v1.0/friends/interfriend'
            let data = await axios.post(url,{
                targetid:this.userid,
                userid:this.userId
            })
           
           

            if(data.data.ifriend=='삭제됨'){
                this.bookmark='icon-bookmark'
                
            }else if(data.data.ifriend=='추가됨'){
                this.bookmark ='icon-mark'
                        }
        },
  
     }

}
</script>

<style>
.con{
   margin-top:60px; 
   max-width: 700px;
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
  margin-top: 10px;
}
.nail{
    background: gray;
    min-height: 500px;
}

</style>
