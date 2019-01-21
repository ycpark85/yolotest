<template>
    <v-container class="con">
        <v-app>
        <form @submit.prevent="signup">
      <v-layout  align-center row wrap>
          <v-flex xs3 class="si-1">
              <span>이메일</span>
          </v-flex>
          <v-flex xs9 class="si-1">
            <v-text-field
            v-model="email"
            class="t2"
             required
            
          ></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout  align-center row wrap>
          <v-flex xs3 class="si-1">
              <span>비밀번호</span>
          </v-flex>
          <v-flex xs9 class="si-1">
               <v-text-field
             :type="'password'"
             required
             v-model="password"
          ></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout  align-center row wrap>
          <v-flex xs3 class="si-1">
              <span>비밀번호확인</span>
          </v-flex>
          <v-flex xs9 class="si-1">
               <v-text-field
             :type="'password'"
             required
             v-model="repass"
          ></v-text-field>
          </v-flex>
      </v-layout>
       <v-layout  align-center row wrap>
          <v-flex xs3 class="si-1">
              <span>이름</span>
          </v-flex>
          <v-flex xs9 class="si-1">
               <v-text-field
             v-model="name"
             required
          ></v-text-field>
          </v-flex>
      </v-layout>
      <v-layout  align-center row wrap>
          <v-flex xs3 class="si-1">
              <span>생년월일</span>
          </v-flex>
          <v-flex xs2 class="si-1">
            <v-text-field
             v-model="years"
             required
          ></v-text-field>
          </v-flex>
          <v-flex xs1 class="si-1">
              <span>연</span>
          </v-flex>
           <v-flex xs2 class="si-1">
            <v-text-field
             v-model="months"
             required
          ></v-text-field>
          </v-flex>
          <v-flex xs1 class="si-1">
              <span>월</span>
          </v-flex>
          <v-flex xs2 class="si-1">
            <v-text-field
             v-model="days"
             required
          ></v-text-field>
          </v-flex>
          <v-flex xs1 class="si-1">
              <span>일</span>
          </v-flex>
      </v-layout>
      
      <v-layout  align-center row wrap>
          <v-flex xs3 >
              <span>성별</span>
          </v-flex>
          <v-flex xs9 >
       <v-radio-group v-model="gen" row>
      <v-radio label="남자" value="man" checked></v-radio>
      <v-radio label="여자" value="woman"></v-radio>
    </v-radio-group> 
          </v-flex>
          <v-checkbox
              v-model="chek"      
              label="이용약관에 동의합니다."
              color="primary"
              value=true
              hide-details
            ></v-checkbox>
            
      </v-layout>
      <v-layout align-center row wrap>
          <v-flex xs11 >
         <v-btn outline color="black" class="aple" >이용약관보기</v-btn>
      </v-flex>
        <v-flex xs11>
         <v-btn outline color="black" class="aple" type="submit">회원가입</v-btn>
      </v-flex>    
      </v-layout>
      </form>
      </v-app>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data(){
      return{
          chek:null,
          gen:null,
          selected1:'',
          selected2:'',
        selected3:'',
        years:'',
        months:'',
        days:'',
        email:'',
        password:'',
        repass:'',
        name:'',
        birth:''

        }
  },
  methods:{
     
     async signup(){
              this.birth =this.years+"."+this.months+"."+this.days+"."  
              let url = '/api/v1.0/users/signup'
              let data = await axios.post(url, data={
                  email:this.email,
                  password:this.password,
                  name: this.name,
                  gender:this.gen,
                  chek:this.chek,
                  birth:this.birth
                  
              })
              if(data.status ==201){
               alert('해당아이디는 이미 존재합니다.')
           }else if(data.status==200){
               alert('가입되었습니다.')
                this.$nuxt.$router.push({path:'/users/profileinsert'})
           }
         
      }

  },
  beforeMount() {
     
  },
}
</script>


<style>
.con{
    min-width: 350px;
    max-width: 500px;
    margin-top: 60px;
}
.aple{
     min-width: 330px;
    width: 90%;
    margin: 0;
    max-width: 500px;
    height: 50px;
}


</style>

