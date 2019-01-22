<template>
    <v-container class="con elevation-1 pa-1">
        <v-layout align-space-between row class="elevation-1 basic">
             
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-title class="pname info1 ">
                  <span class="icon-basic"><span class="path1"></span><span class="path2"></span>
              <span class="path3"></span><span class="path4"></span></span>&nbsp;기본정보
              </v-card-title>  
               
             </v-card>
            </v-flex>
         </v-layout>
        <v-layout class="elevation-1">
         
          <v-layout align-space-between row wrap class="pi-0">
          <v-flex xs6 pa-2 >
             <v-card  class="proimg">
            <img :src='"../../server/uploads/user/profile"+pro1.image'  alt=""> 
         </v-card>

          </v-flex>
          <v-flex xs4 mt-2 ml-3>
               <v-card  flat>
                   <div><span class="info1">{{name}}({{gender}})</span></div>
                   <div><span class="info1">{{birth}}({{age}})</span></div>
                   <div><span class="info1">{{pro1.blood}}</span></div>
                   <div><span class="info1">{{pro1.locate}}</span></div>
                   <div><span class="info1">{{pro1.job}}</span></div>
                   <div><span class="info1">{{marride}}</span></div>
                   <div><span class="info1">{{couple}}</span></div>
                </v-card>
          </v-flex>
        </v-layout>
        </v-layout>
        <v-layout align-space-between row fill-height >
                
                <v-flex xs12 >
                    <v-card >
                        <v-card-text class="pname info1"><span class="icon-sosmeil"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span><span>외모</span></v-card-text>
                    </v-card>
                    <v-card class="abc">
                        <v-card-title class="apper info">{{pro1.apear}}</v-card-title>
                    </v-card>
                    
                </v-flex>
            </v-layout>
             <v-layout align-space-between row fill-height >
                <v-flex xs12  >
                    <v-card pr-2  >
                        <v-card-text class="pname info1"><span class="icon-soper"><span class="path1"></span><span class="path2"></span></span>성격</v-card-text>
                    </v-card>
                     <v-card class="back-1">
                        <v-card-title class="apper info">{{pro1.charecter}}</v-card-title>
                    </v-card>

                   
                </v-flex>
               
            </v-layout> 
            <v-layout>
                 <v-flex xs12 >
                    <v-card >
                        <v-card-text class="pname info1"><span class="icon-solike"><span class="path1"></span><span class="path2"></span></span><span>관심사</span></v-card-text>
                    </v-card>
                    <v-card class="back-2">
                        <v-card-title class="apper info">{{pro1.interest}}</v-card-title>
                    </v-card>
                </v-flex>
                </v-layout>
                <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card pl-2 >
                        <v-card-text class="pname info1"><span class="icon-sohobby"><span class="path1"></span><span class="path2"></span></span>관심 활동</v-card-text>
                    </v-card>
                </v-flex>
                
            </v-layout>   
               
                    <v-card>
            <v-layout align-space-between row fill-height class="back-3 apper " >
                <template v-for="item in habi">

                                    
                <v-flex xs5 class="som"
                :key="item" >
                    <v-card class="sof back-3" flat
                    >
                        <span class="info">{{item.title}}</span>
                        
                    </v-card>
                </v-flex>
                </template>
                </v-layout>  
                </v-card>
           
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            pro1:{},
            userid:this.$route.params.id,
            name:'',
            gender:'',
            birth:'',
            age:'',
            habi:[],
            marride:'',
            couple:''
        }
    },
    methods:{
       async profile () {
        let url = `/api/v1.0/users/profile?userid=${this.userid}`
        let data = await axios.get(url)
        this.pro1 = data.data.profile
        this.name = data.data.name
        if(data.data.gender=='man'){
                this.gender = '남자'
            }else{
                this.gender = '여자'
            }
         if(this.pro1.marred=='merred'){
             this.marride = '기혼'
         }else{
             this.marride = '미혼'
         } 
         if(this.pro1.love=='solo'){
             this.couple='솔로'
         }else{
             this.couple='연애중'
         }
        this.habi = data.data.habi 
        console.log(this.habi )

        this.birth=data.data.birth
            let age2 = this.birth.split('.')
            console.log(age2 )
            this.age = 2019-Number(age2[0])+1 
        
        
        
    }
    },
    mounted(){
        this.profile()
    }
     


}
</script>


<style scoped>
.con{
    margin-top: 50px;
    min-width: 350px;
    max-width: 500px;
    padding: o;
}
.abc{
    border-radius: 10px;
    
     background-color: #f3dd75;
}
.back-1{
 border-radius: 10px;
    
    background-color: #f6bdc9;
}
.back-2{
 border-radius: 10px;
  
    background-color: #83dbe8;
}
.back-3{
 border-radius: 10px;
   
    background-color: #c6e78c;
}
.sotop{
    
    border: 1px solid;
    text-align: center;
    height: 30px;
}
.t-1{
  width: 50%;
}
.pname{
    text-align: center;
}
.apper{
    height: 125px;
}
.sof{
   
    margin: 10px;
    text-align: center;
}
.sof2{
    margin: 10px;
   
    
}
.proimg{
    border-radius: 15px;
    padding: 0px;
    overflow: hidden;
    width: 150px;
    height: 150px;
}
.proimg img{
   width: 100%;
   
}
.info{
    font-weight: bold;
    font-size: 12pt;
    color: white;
}
.info1{
    font-weight: bold;
    font-size: 12pt;
    
}


</style>
