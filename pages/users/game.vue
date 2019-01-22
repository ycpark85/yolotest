<template>

    <v-container class="con" v-if="img3==''">
        <v-layout align-space-between justify-center column fill-height >
               <v-flex xs12 >
                    <v-card flat>
                        <v-card-title class="ques-1">Q1.이상형은?</v-card-title>
                    </v-card>
                </v-flex>
                <v-flex xs12 class="que-img" mt-4>
                    <img :src="img1" alt="" srcset="" @click="sel">
                </v-flex>
                <v-flex xs12 class="ques-2" align-center>
                <v-card flat class="ques-2">
                               
                </v-card>
                 </v-flex>
                <v-flex xs12 class="que-img" mt-3>
                    <img :src="img2" alt="" srcset="" @click="sel">
                </v-flex>
                <v-flex xs12 class="ques-2" align-center>
                <v-card flat class="ques-2">
                            
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
                            당신에게 어울리는 여행지는 ***입니다.
                             추천된 친구들과 친해지고 함께 여행지로 놀러가 보세요.
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
            gamesel:[],
            numsel:[],
            items: [{}]
        }
    },
    methods:{
        gameimg(){

            for(var i=1; i<=46; i++){
                var imgtx='../../uploads/'+i+'.jpg'
                this.gamesel.push(imgtx)
            }
            this.img1=this.gamesel[1]
             this.img2=this.gamesel[2]
            
           
          
            

        },
        sel(e){
            
            var choice = e.srcElement.src
            var word = choice.split('/')
           
           for(var i=1; i<this.gamesel.length;i++){
                  var word2= this.gamesel[i].split('/')
                  
                if(word[4]==word2[3]){
                   
                  if(i<15){
                   this.img1=this.gamesel[i*2+1]
                   this.img2=this.gamesel[i*2+2]
                   
                  }else if(i>=15){

                    this.img3=this.gamesel[i+16]
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
    font-size: 18pt;
    font-weight: bold;
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
img{width: 100%;}
</style>
