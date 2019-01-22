<template>
    <v-container class="con" align-center>
      <v-layout align-space-around column  pa-5 >
      <form @submit.prevent="login">
      <v-flex class="rogo">
          <img src="../image/loginrogo.png" alt="">
      </v-flex>
      <v-flex>
         <v-text-field
           v-model="email"  
           placeholder="아이디"
           required
          ></v-text-field>
      </v-flex>
       <v-flex>
         <v-text-field
           v-model="password"  
           placeholder="비밀번호"
           :type="'password'"
           required
          ></v-text-field>
      </v-flex>
      <v-flex>
         <v-btn outline color="black" class="aple" type="submit">로그인</v-btn>
      </v-flex>  
   <v-layout align-center justify-center row mt-3>
   
   </v-layout>

   <v-layout align-center justify-space-between row mt-3 class="social">
   <v-flex xs4 pa-1 ><img src="../image/naver.png" alt="" ></v-flex>
   <v-flex xs4 pa-1><img src="../image/google.png" alt=""></v-flex>
     
   <v-flex xs4 pa-1 @click="kakao()" ><img src="../image/kakao.png" alt=""></v-flex>
    
   </v-layout>
     <v-flex >
     <v-card flat :to='{path:"/signup"}'>
         <v-btn outline color="black" class="aple">회원가입</v-btn>
     </v-card>
      </v-flex>
        
    </form>    
    </v-layout>
   



    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data: () => ({
      valid: false,
      email: '',
      password:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods:{
       async login(){
           let url = '/api/v1.0/users/login'
           let data = await axios.post(url,data={
               email:this.email,
               password:this.password
           })
            if(data.status ==201){
               alert('해당아이디는 이미 존재합니다.')
           }else if(data.status==200){
               
                this.$nuxt.$router.replace({path:'/'})
           }
        },
        kakao(){
            console.log('클릭')
            let url = 'api/v1.0/auth/kakao'
            let data =  axios.get(url)
        }

    }
}
</script>

<style scoped>
.rogo img{
    width: 50%;
}
.social img{
    width: 100%;
}

.con{
    min-width: 350px;
    margin-top: 60px;
    margin-bottom: 20px;    
    text-align: center;
    max-width: 500px;
}
.cap-1 img{
    width: 10%;
}
.aple{
    width: 100%;
    margin: 0;
    max-width: 500px;
    height: 50px;

    font-weight: bold;
    text-decoration: none;
}

.f1{
    max-width: 500px;
    margin-left: 0;
    text-align: center;

    
}
</style>
