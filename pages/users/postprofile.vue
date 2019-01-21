<template>
    <v-container class="con">
      
        <v-layout align-space-between row>
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-title class="pname">
                  <span class="icon-basic"><span class="path1"></span><span class="path2"></span>
              <span class="path3"></span><span class="path4"></span></span>&nbsp;기본정보
              <span class="info-1">이름,생년월일은 가입정보와 동일하며,변경할 수 없습니다.</span>
              </v-card-title>  
            </v-card>
            </v-flex>
        </v-layout>
        <v-layout  row fill-height wrap >
            <v-flex xs5>
                <v-card class="proimg">
                    <img src="" alt=""> 
                </v-card>
            </v-flex>
            <v-flex xs7 mt-4 flat>
                <v-card class="info-2"  flat>
                    <v-card-title>김미나(여)</v-card-title>
                    <v-card-title>1990.01.01(28)</v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap mt-4>
            <v-flex xs4 class="info-5">
                <v-card flat>
                    <v-card-title class="info-6">혈 액 형</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="info-4">
                <v-card flat >
                    <v-card-title class="info-3">
                        <select name="" id="" >
                            <option value="A">A형</option>
                            <option value="B">B형</option>
                            <option value="AB">AB형</option>
                            <option value="O">O형</option>

                        </select>

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap >
            <v-flex xs4 class="info-5">
                <v-card flat>
                    <v-card-title class="info-6">거 주 지</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="info-4">
                <v-card flat>
                    <v-card-title class="info-3">
                        <input type="text">
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap  >
            <v-flex xs4 class="info-5">
                <v-card flat>
                    <v-card-title class="info-6">직 &nbsp;&nbsp;&nbsp;&nbsp;업</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="info-4">
                <v-card flat>
                    <v-card-title class="info-3">
                        <select name="" id="" >
                            <input type="text">
                        </select>

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap>
            <v-flex xs4 class="info-5">
                <v-card flat>
                    <v-card-title class="info-6">결혼여부</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="info-4">
                <v-card flat>
                    <v-card-title class="info-3">
                        <v-radio-group v-model="gen" row>
                            <v-radio label="미혼" value="not" checked></v-radio>
                            <v-radio label="기혼" value="merred"></v-radio>
                            
                        </v-radio-group> 

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap  >
            <v-flex xs4 class="info-5">
                <v-card flat>
                    <v-card-title class="info-6">연애여부</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="info-4">
                <v-card flat>
                    <v-card-title class="info-3">
                        <v-radio-group v-model="gen" row>
                            <v-radio label="연애중" value="couple" checked></v-radio>
                            <v-radio label="솔로" value="solo"></v-radio>
                           
                        </v-radio-group> 

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center row mt-4>
            
                <v-btn>취소</v-btn>
                 <v-btn>다음</v-btn>
            
            
        </v-layout>
     
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>

<style scoped>
input, select{
    height: 30px;
    width: 500px;
    border: 1px solid;
}
.con{
    margin-top: 50px;
    min-width: 450px;
    max-width: 500px;
}
.pname{
    font-size: 20pt;
    font-weight: bold;
}
.basic{
    background-color: gray;
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
.pro-1{
    height: 30px;
}
.pro-1 input{
    width: 100%;
}
.info-1{
    font-size: 10pt;
    
    margin-top: 10px;
}
.info-2{
    font-size: 15pt;
    font-weight: bold;
    color: #6d6e6e;
}
.info-3,.info-6{
    height: 60px;
}
.info-4,.info-5{
     box-shadow: 
    1px 0 0 0 #888, 
    0 1px 0 0 #888, 
    1px 1px 0 0 #888,
    1px 0 0 0 #888 inset, 
    0 1px 0 0 #888 inset;
    color: #6d6e6e;
    font-weight: bold;
}
.info-5{
    background-color: #eeeeee;
    font-size: 12pt;
}
.info-6{
    margin-left: 15px;
}
.v-messages{
    min-height: 0;
}
.vcard{
     background-color: #eeeeee;
}
</style>
