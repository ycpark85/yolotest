<template>
<v-app>
    <v-container class="addcon elevation-1">
        <v-layout align-space-between column >
            <form @submit.prevent="moimcreate()" >
            <v-layout align-center justify-center row>
                <v-flex xs2>
                    <span>타이틀:</span>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                    v-model="title"
                    class=""
                    required
                ></v-text-field>
                </v-flex>
            </v-layout>  
            <v-layout align-center justify-center row>
                <v-flex xs2>
                    <span>지  역:</span>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                    v-model="adress"
                    class=""
                    required
                ></v-text-field>
                </v-flex>
            </v-layout>  
             <v-layout align-center justify-center row>
                <v-flex xs3>
                    <span>연령대</span>
                </v-flex>
                <v-flex xs2>
                     <v-text-field
                    v-model="minage"
                    class=""
                    required
                ></v-text-field>
              
                </v-flex>
                <v-flex xs1>
                    <v-card flat="">
                        <v-card-text>~</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex xs2>
                     <v-text-field
                    v-model="maxage"
                    class=""
                    required
                ></v-text-field>
                </v-flex>
            </v-layout> 
            
             <v-layout align-center justify-center row>
                <v-flex xs3>
                    <span>모임일자</span>
                </v-flex>
                <v-flex xs2>
                     <v-text-field
                    v-model="month"
                    class=""
                    required
                ></v-text-field>
              
                </v-flex>
                <v-flex xs1>
                    <v-card flat="">
                        <v-card-text>월</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex xs2>
                     <v-text-field
                    v-model="day"
                    class=""
                    required
                ></v-text-field>
                </v-flex>
                <v-flex xs1>
                    <v-card flat="">
                        <v-card-text>일</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout> 
            <v-layout align-center justify-center row>
           <v-flex xs2>
                    <span>설명:</span>
                </v-flex>
                <v-flex xs6>
                <v-textarea
                v-model="ctext"
                class="textar" 
                placeholder="모임 간단한 설명."
                auto-grow
                value=""
                v-on:keyup="change"
                ></v-textarea>
                </v-flex>
            </v-layout>
           
            
         
            <v-layout align-center justify-center row>
             <v-flex class="" xs1 mt-4> 
        <v-btn type="submit" outline color="black" class="aple">모임 만들기</v-btn>
    </v-flex>
             </v-layout> 
            </form>           
        </v-layout>
    </v-container>
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            habicode: this.$route.params.id,  
            ctext:'',
            title:'',
            address:'',
            minage:'',
            maxage:'',
            month:'',
            day:'',
            ccoment:'',

        }
    },
    methods: {
        formatText(text){
            return text.replace(/\n$/, '<br>&nbsp;').replace(/\n/g,'<br>')
        },
        change(){
            this.ccoment=this.formatText(this.ctext)
        },
      async moimcreate(){
          console.log(this.$route.params.id)
          let url = '/api/v1.0/moim/create'
          let data = await axios.post(url,data={
              habicode:this.habicode,
              text:this.ccoment,
              title:this.title,
              adress:this.adress,
              minage:this.minage,
              maxage:this.maxage,
              month:this.month,
              day:this.day,
          })
          if(data.data.result){
              
          }
      } 
    },
    mounted() {
        console.log(this.habicode)
    },
}
</script>
<style scoped>
.addcon{
    max-width: 500px;
    min-width: 370px;
    
    margin-top: 100px;
    margin-bottom: 20px;
}
</style>
