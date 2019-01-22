<template>

    <v-container class="con elevation-1 con-1" v-if="img3==''">
        <v-layout align-space-between justify-center column fill-height >
               <v-flex xs12 >
                    <v-card flat>
                        <v-card-title class="ques-1">선호하는 활동을 선택하세요.</v-card-title>
                        <v-card-title class="ques-1-1">모든 선택을 완료하시면 최종친구를 추천해드립니다.</v-card-title>
                    </v-card>
                </v-flex>
                <v-flex xs12 class="que-img" mt-3>
                    <div class="gameimg">   
                    <img :src="img1" alt="" srcset="" @click="sel">
                    </div>
                </v-flex>
                <v-flex xs12 class="ques-2" align-center>
                <v-card flat class="ques-2">
                        {{text1}}         
                </v-card>
                 </v-flex>
                <v-flex xs12 class="que-img" mt-3>
                    <img :src="img2" alt="" srcset="" @click="sel">
                </v-flex>
                <v-flex xs12 class="ques-2" align-center>
                <v-card flat class="ques-2">
                       {{text2}}       
                </v-card>
                 </v-flex>
        
        </v-layout>
    </v-container>
    <v-container v-else class="con">
        <v-layout  align-space-around justify-start column>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        매칭결과
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12>
                    <img :src="img3" alt="" srcset="">
            </v-flex>
        </v-layout>
        <v-layout align-space-around justify-start column>
              <v-flex xs12>
                     <v-card>
                        <v-card-title>
                            {{text3}}
                        </v-card-title>
                    </v-card>
            </v-flex>
            </v-layout>  

            <v-layout align-center justify-center row>
            <v-flex xs3 v-for="item in items" :key="item['userid']">
            <v-list-tile-avatar >
                <img :src='"../../server/uploads/user/profile"+item["image"]'>
              </v-list-tile-avatar>
               
            </v-flex>
            </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    
    data(){
        return{
            el:0,
            imgsel:'0',
            matnum:0,
            cate:'matching',
            img1:'',
            img2:'',
            img3:'',
            semple:['0','실외활동','실내활동','자연활동','도시활동','활동적인','섬세한','여행','레저스포츠','파티',
            '워크아웃', '음악','운동','공방체험','요리체험','맛집탐방','명소탐방','수상스포츠','산악스포츠','컨셉파티','공연','라이딩','구기운동','악기','댄스','이종격투기','헬스','인테리어','케어용품','메인디쉬','디저트','맛집탐방을 선호하는 당신에게 친구와 콘텐츠를 추천해 드립니다.','관광명소를 선호하시는 당신에게 친구들을 추천드립니다.','해양스포츠를 선택한 당신에게 함께할 친구분들을 추천해 드려요.','산악스포츠를 선택한 당신에게 다음과 같은 친구분들을 추천드려요.','컨셉파티를 선택한 당신에게 욜로모여 협력업체인 솔게스트하우스와 함께하실 친구분들을 추천드려요.','공연을 선택하신 당신에게 함께 공연을 보러갈 친구를 추천드릴게요.','라이딩을 선택한 당신에게 함께 라이딩 할 친구분을 추천드릴게요','구기운동을 선택한 당신에게 함께 운동을 즐길 친구를 추천해 드릴게요.','악기연주를 선택한 당신에게 함께 밴드를 꾸릴수 있게 친구를 추천드립니다.','댄스를 선택한 당신에게 함께 춤출 파트너를 소개해 드릴게요.','이종격투기를 선택한 당신에게 스파링 파트너를 추천해드리요','헬스를 선택한 당신에게 쉽게 포기 할수 없도록 동료를 추천해드릴게요.','인테리어를 선택한 당신에게 컨텐츠와 함께할 친구를 추천드려요','케어용품을 선텍한 당신에게 함께 할 친구를 소개합니다.','메인디쉬를 선택한 당신에게 함께 식사를 할 친구분들을 추천 드릴게요','디저트를 선택한 당신에게 달달한 친구들을 추천드릴게요.'],

            gamesel:[],
            numsel:[],
            items: [{}],
            text1:'',
            text2:'',
            text3:'',

        }
    },
    methods:{
        gameimg(){

            for(var i=1; i<=46; i++){
                var imgtx='../../uploads/'+i+'.png'
                this.gamesel[i] = imgtx
                
            }
             this.img1=this.gamesel[1]
             this.text1 = this.semple[1]
             this.img2=this.gamesel[2]
             this.text2=this.semple[2]   
           
          
            

        },
        sel(e){
            
            var choice = e.srcElement.src
            var word = choice.split('/')
           
           for(var i=1; i<this.gamesel.length;i++){
                  var word2= this.gamesel[i].split('/')
                  
                if(word[4]==word2[3]){
                   
                  if(i<15){
                   this.img1=this.gamesel[i*2+1]
                   this.text1 = this.semple[i*2+1]
                   this.img2=this.gamesel[i*2+2]
                    this.text2=this.semple[i*2+2]  
                  }else if(i>=15){

                    this.img3=this.gamesel[i+16]
                    this.text3=this.semple[i+16]
                    this.matnum = i+16 
                    this.save()
                   
                  }
               }
           

           }             
        },
         async save(){
             let url='/api/v1.0/users/game'
             let data = await axios.post(url, data={
                    matnum:this.matnum,
                    cate:this.cate

             } )
             this.items = data.data.profile
            console.log(this.items)
         }
    },
    beforeMount(){
       this.gameimg()
    },

    async mounted () {
        let url1 = '/api/v1.0/users/session-check'
        let logincheck = await axios.get(url1)
        if(!logincheck.data){
            alert('로그인하여야 이용가능 합니다.')
             this.$router.push({path:'/users/login'})
        }
    }
}
</script>




<style scoped>
.con{
    margin-top: 60px;
     max-width: 500px;
    min-width: 350px;
    margin-bottom:30px;
}
.ques-1{
    margin-top: 10px;
    font-size: 15pt;
    font-weight: bold;
}
.ques-1-1{
    font-weight: bold;
    color: gray;
}
.ques-2{
    text-align: center;
    font-size: 15pt;
    font-weight: bold
}
.que-img1{
    max-width: 500px;
    min-width: 350px;
    height: 150px;
}
.gameimg{
    
}
img{
width: 100%;}
</style>
