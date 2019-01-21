<template>
    <v-container class="con">
        <v-layout align-space-around justify-center column>
            <v-flex xs12 class="cou-title" align-center>
                <v-card>
                    <v-card-title class="cou-title">[현재나의 보유 사용권]</v-card-title> 
                    
                </v-card> 
            </v-flex>
        </v-layout>
        <v-layout>   
             <v-flex xs6 align-center>
                <v-card>
                    <v-card-title class="cou-title">프로필 이용권</v-card-title> 
                    
                </v-card> 
            </v-flex>   
            <v-flex xs6 align-center>
                <v-card>
                    <v-card-title class="cou-title" v-bind:value="coupon.pticket">{{coupon.pticket}}장</v-card-title> 
                    
                </v-card> 
            </v-flex>             
        </v-layout>
        <v-layout>   
             <v-flex xs6 align-center>
                <v-card>
                    <v-card-title class="cou-title">쪽지 이용권</v-card-title> 
                    
                </v-card> 
            </v-flex>   
            <v-flex xs6 align-center>
                <v-card>
                    <v-card-title class="cou-title" v-bind:value="coupon.lticket">{{coupon.lticket}}장</v-card-title> 
                    
                </v-card> 
            </v-flex>             
        </v-layout>
       <v-layout align-space-around justify-center column>
            이용권충전
        </v-layout>
         <v-layout align-space-around justify-center column>
             <v-app>
                <v-tabs
                    centered
                    color="gray"
                    dark
                    icons-and-text
                >
                    <v-tabs-slider color="cyan"></v-tabs-slider>

                <v-flex xs6>
                 <v-tab href="#tab-1" class="cou-tap">
                    쪽지
                    <v-icon>favorite</v-icon>
                    </v-tab>
    
                </v-flex>   

                <v-flex xs6>   
                    <v-tab href="#tab-2" class="cou-tap">
                    프로필
                    <v-icon>account_box</v-icon>
                    </v-tab>
                </v-flex>   
                 <v-tabs-items v-model="tabs" class="white elevation-1">
                        <v-tab-item
                           :id="'tab-1'"
                         >
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-title class="cou-1">1개</v-card-title> 
                                    
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('l',1,100)">100point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">30개</p>
                                    <span class="cou-p-2">(27개+<span class="cou-p-3">보너스3개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('l',30,2700)">2700point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                          <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">50개</p>
                                    <span class="cou-p-2">(44개+<span class="cou-p-3">보너스6개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('l',50,4400)">4400point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">100개</p>
                                    <span class="cou-p-2">(88개+<span class="cou-p-3">보너스12개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('l',100,8800)">8800point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>        
                         
                    </v-tab-item>
                    <v-tab-item
                           :id="'tab-2'"
                         >
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-title class="cou-1">1개</v-card-title> 
                                    
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('p',1,100)">100point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">30개</p>
                                    <span class="cou-p-2">(27개+<span class="cou-p-3">보너스3개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('p',30,2700)">2700point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                          <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">50개</p>
                                    <span class="cou-p-2">(44개+<span class="cou-p-3">보너스6개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('p',50,4400)">4400point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>
                         <v-layout>   
                            <v-flex xs6 align-center>
                                <v-card>
                                    <v-card-text class="cou-1"><p class="cou-p-1">100개</p>
                                    <span class="cou-p-2">(88개+<span class="cou-p-3">보너스12개</span>)</span>
                                    </v-card-text> 
                                </v-card> 
                            </v-flex>   
                            <v-flex xs6 align-center >
                                <v-card class="cou-2">
                                    <v-card-text class="cou-1 cou-2"><v-btn color="cyan" class="cou-btn" @click="addticket('p',100,8800)">8800point</v-btn></v-card-text> 
                                    
                                </v-card> 
                            </v-flex>             
                        </v-layout>        
                         
                    </v-tab-item>
                </v-tabs-items>   
                   
                </v-tabs>
                
            </v-app>
                       
        </v-layout>
       
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            coupon:{}
        }
    },
    methods:{
        async list(){
        let url='/api/v1.0/users/coupon'
        let data1= await axios.get(url)
        this.coupon = data1.data.coupon
        
        
    },
     async addticket(t,n,m){
        if(this.coupon.point>m){
                 if(t=='l'){
           
            let url='/api/v1.0/users/addlticket'
            let data =await axios.post(url,{
                count:n,
                point:m
            }).then((res)=>{
             console.log(res.data.coupon.lticket)
             this.coupon=res.data.coupon
             
            })
            
           
            
        }else if(t=='p'){
             
            let url='/api/v1.0/users/addpticket'
            let data =await axios.post(url,{
                count:n,
                point:m
        }).then((res)=>{
             console.log(res.data.coupon.pticket)
             this.coupon=res.data.coupon
             
            })
        
    }
        }else{
            alert('포인트가 부족합니다. ')
        } 
   
    },
    
    
},
mounted() {
        this.list()

    },
  
}

</script>

<style>
.con{
    min-width: 350px;
    max-width: 700px;
    margin-top: 60px;
}
.cou-title{
justify-content: center;
}
.cou-tap{
width: 100%;
}
.cou-1{
    height: 80px;

}
.cou-2{
text-align: right;
}
.cou-p-1{
    margin-bottom: 0;
}
.cou-p-2{
    font-size: 10pt;
    color: gray;
}
.cou-p-3{
    color: red;
}
.cou-btn{
    width: 100px;
}

</style>
