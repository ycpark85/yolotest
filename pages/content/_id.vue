<template>
    <v-container
    class="con pa-0"
    >
    <v-layout>
      
         <v-flex xs12 >
        <v-card>
          <v-toolbar style="height: 60px;">
            <v-card-title class="moim">모임을 만들어 보세요.</v-card-title>
           
          </v-toolbar>
          
          <v-card-text style="height: 500px;" class="mop ">
       <template v-for="item in moimlists">
        <v-layout row class="mo" :key="item">
        <v-flex xs3 >
           <v-card class="mo-1">
            <v-card-media 
            :src='"../../server/uploads/admin/thumimg"+item["admin_content.img"]'
            height="100px"
            width="100%"
            >
            </v-card-media>
            </v-card>   
            </v-flex>
             <v-flex xs6 >
                <v-card class="mo-2">
                    <v-card-text class="mo-1-title">{{item.title}}</v-card-text>
                    <v-card-text class="mo-1-text">모임 지역:&nbsp;{{item.adress}}</v-card-text>
                    <v-card-text class="mo-1-text">모임 일자:&nbsp;{{item.month}}월 {{item.day}}일</v-card-text>
                    <v-card-text class="mo-1-text">연 령 &nbsp;대:&nbsp;{{item.minage}}~{{item.maxage}}세</v-card-text>

                </v-card>   
            </v-flex>
            <v-flex xs3>
                <v-card class="mo-2">
                    <v-btn color="pink" class="bnt"
                    :to='{path: "/moim/join/"+item.moimcode}'>참여하기</v-btn>
                </v-card>
            </v-flex>
            </v-layout>
       </template>
            </v-card-text>
          <v-card-text style="height: 0px; position: relative">
            <v-btn
            :to='{path: "/moim/post/"+this.$route.params.id}'
              absolute
              dark
              fab
              top
              right
              color="pink"
            >
              <v-icon>add</v-icon>
            </v-btn>
         

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          habicode:this.$route.params.id,
          moimlists:[],
          joiner:[]  
        }
    },
    methods: {
      async  moimlist(){
           let url = '/api/v1.0/moim/lists'
           let data = await axios.post(url,data={
               habicode:this.habicode
           })
           if(data.data.moimlist){
           this.moimlists = data.data.moimlist
           this.joiner = data.data.joiner
            console.log( this.moimlists)
            console.log(this.joiner)
           }
        }
    },
    mounted() {
         this.moimlist()
    },
}
</script>

<style scoped>
.con{
     max-width: 500px;
    min-width: 370px;
    margin-top: 80px;
    margin-bottom: 20px;
}
.mo{
    margin-bottom: 10px;
}
.mop{
    padding: 0;
}
.mo-1{
    height: 100px;
   
}
.mo-2{
     height: 100px;
    padding-left:10px; 
}
.mo-1-title{
    font-size: 15pt;
    font-weight: bold;
    padding:5px;

}
.mo-1-text{
    padding: 1px;
    font-size: 10pt;
    font-weight: bold;
    color: gray;
}
.moim{
    font-size: 20px;
    font-weight: bold;
}
.bnt{
    height: 80px;
    font-weight: bold;
    color: white;
}
</style>

