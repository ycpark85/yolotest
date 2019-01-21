<template>
    <v-container id="grid"
     fluid
    tag="section"
    pa-0
    class="con"
    >
          
    <v-tabs 
    color="white"
    dark
   
  >
  <v-tabs-slider color="yellow"></v-tabs-slider>
    
      
        <v-tab href="#tab-1" class="t-1">
          내프로필
        </v-tab>
      
        <v-tab href="#tab-2"  class="t-1">
          친구매칭 설정
        </v-tab>
        <v-tab-item
        :id="'tab-1'"
        >
            <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card >
                        <v-card-text class="pname"><span>김미나</span><span>님의 프로필 입니다.</span></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout align-space-between row fill-height >
                <v-flex xs6 >
                    <v-card pr-2 >
                        <v-card-text class="pname"><span class="icon-basic"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>기본정보</v-card-text>
                    </v-card>
                    <v-btn flat icon class="btn"><v-icon> icon-setting </v-icon></v-btn>  
                    <v-card flat ml-2>김미나(여)</v-card>
                    <v-card flat ml-2>1990.01.01(28)</v-card>
                    <v-card flat ml-2>O형</v-card>
                    <v-card flat ml-2>서울거주</v-card>
                     
                    <v-card flat ml-2>프리랜서</v-card>
                    <v-card flat ml-2>미혼</v-card>
                     <v-card flat ml-2>연애중</v-card>
                     
                   
                </v-flex>
                <v-flex xs6 >
                    <v-card >
                        <v-card-text class="pname"><span class="icon-sosmeil"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span><span>외모</span></v-card-text>
                    </v-card>
                   
                    <v-card>
                       <v-btn flat icon class="btn"><v-icon> icon-setting </v-icon></v-btn>  
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                       
                    </v-card>
                    
                </v-flex>
            </v-layout>  
            <v-layout align-space-between row fill-height >
                <v-flex xs6 >
                    <v-card pr-2 >
                        <v-card-text class="pname"><span class="icon-soper"><span class="path1"></span><span class="path2"></span></span>성격</v-card-text>
                    </v-card>
                    
                     <v-card>
                         <v-btn flat icon class="btn"><v-icon> icon-setting </v-icon></v-btn>  
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>

                   
                </v-flex>
                <v-flex xs6 >
                    <v-card >
                        <v-card-text class="pname"><span class="icon-solike"><span class="path1"></span><span class="path2"></span></span><span>관심사</span></v-card-text>
                    </v-card>
                    
                    <v-card>
                        <v-btn flat icon class="btn"><v-icon> icon-setting </v-icon></v-btn>  
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>
                </v-flex>
            </v-layout> 
               <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card pl-2 >
                        <v-card-text class="pname"><v-icon>icon-soul  </v-icon>소울친구</v-card-text>
                    </v-card>
                </v-flex>  
            </v-layout> 
            <v-layout align-space-between row fill-height >
                <v-flex xs3 class="som">
                    <v-card class="sof">
                        <span class="">성&nbsp; 별</span>
                        
                    </v-card>
                    <v-card class="sof" >
                        <span>외&nbsp; 모</span>
                    </v-card>
                    <v-card class="sof" >
                        <span>성 &nbsp;격</span>
                    </v-card>
                    <v-card class="sof" >
                        <span>관심사</span>
                    </v-card>
                    <v-card class="sof" >
                        <span>지 &nbsp;역</span>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="som" >
                    
                    <v-card class="sof2">
                        
                        <span class="">여자/동성친구</span>
                        
                    </v-card>
                    
                    <v-card class="sof2" >
                        <span>상관없음, 패션감각</span>
                    </v-card>
                    <v-card class="sof2" >
                        <span>발랄,말잘들어줌,진솔한</span>
                    </v-card>
                    <v-card class="sof2" >
                        <span>봉사,애견,핸드메이드,여행,공연,파티</span>
                    </v-card>
                    
                    <v-card class="sof2" >
                        <span>서울,인천,경기</span>
                    </v-card>
                </v-flex>
                
            </v-layout> 
            <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card pl-2 >
                        <v-card-text class="pname"><span class="icon-sohobby"><span class="path1"></span><span class="path2"></span></span>하비정보</v-card-text>
                    </v-card>
                </v-flex>
                
            </v-layout>   
                <v-layout align-space-between row fill-height >
                <v-flex xs3 class="som">
                    <v-card class="sof">
                        <span class="">참여하비</span>
                        
                    </v-card>
                    <v-card class="sof" >
                        <span>관심하비</span>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="som" >
                    <v-card class="sof2">
                        <span class="">여자/동성친구</span>
                        
                    </v-card>
                    <v-card class="sof2" >
                        <span>상관없음, 패션감각</span>
                    </v-card>
                    
                </v-flex>
                
            </v-layout> 
            <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card pl-2 >
                        <v-card-text class="pname"><span class="icon-introduce"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>소개하는글</v-card-text>
                    </v-card>
                </v-flex>
                
            </v-layout>   
                <v-layout align-space-between row fill-height >
                <v-flex xs3 class="som">
                    <v-card class="sof">
                        <span class="">참여하비</span>
                        
                    </v-card>
                    <v-card class="sof" >
                        <span>관심하비</span>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="som" >
                    <v-card class="sof2">
                        <span class="">여자/동성친구</span>
                        
                    </v-card>
                    <v-card class="sof2" >
                        <span>상관없음, 패션감각</span>
                    </v-card>
                    
                </v-flex>
                
            </v-layout>             
        </v-tab-item>
        <v-tab-item
        :id="'tab-2'"
        >
       <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card >
                        <v-card-text class="pname"><span>나에게 딱맞는 </span><span>친구</span><span>를 매칭합니다. </span></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
           <v-layout>
         <v-flex xs12 >
                    <v-card pl-2 >
                        <v-card-text class="pname"><span class="icon-gender"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>소개하는글</v-card-text>
                    </v-card>
                </v-flex>
                
            </v-layout>   
                <v-layout align-space-between row fill-height >
                <v-flex xs3 class="som">
                    <v-card class="sof">
                        <span class="">참여하비</span>
                        
                    </v-card>
                    <v-card class="sof" >
                        <span>관심하비</span>
                    </v-card>
                </v-flex>
                <v-flex xs9 class="som" >
                    <v-card class="sof2">
                        <span class="">여자/동성친구</span>
                        
                    </v-card>
                    <v-card class="sof2" >
                        <span>상관없음, 패션감각</span>
                    </v-card>
                    
                </v-flex>
                
            </v-layout> 
             <v-layout align-space-between row fill-height >
                <v-flex xs6 >
                    <v-card pr-2 >
                        <v-card-text class="pname"><span class="icon-location"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>지역</v-card-text>
                    </v-card>
                     <v-card>
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>

                   
                </v-flex>
                <v-flex xs6 >
                    <v-card >
                        <v-card-text class="pname"><span class="icon-sosmeil"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span><span>외모</span></v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>
                    
                </v-flex>
            </v-layout> 
             <v-layout align-space-between row fill-height >
                <v-flex xs6 >
                    <v-card pr-2 >
                        <v-card-text class="pname"><span class="icon-soper"><span class="path1"></span><span class="path2"></span></span>성격</v-card-text>
                    </v-card>
                     <v-card>
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>

                   
                </v-flex>
                <v-flex xs6 >
                    <v-card >
                        <v-card-text class="pname"><span class="icon-solike"><span class="path1"></span><span class="path2"></span></span><span>관심사</span></v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-title class="apper">키가큼, 통통함, 큰눈, 패션감각</v-card-title>
                    </v-card>
                </v-flex>
            </v-layout> 
             <v-layout align-space-between row fill-height >
                <v-flex xs12 >
                    <v-card >
                        <v-card-text class="pname">기준이 단순할수록 원하는 친구와 매칭될 확률이 높아집니다. 매칭된 소울친구는[프랜즈채널]에서 확인할수 있습니다.</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>     
        </v-tab-item>
    </v-tabs>
 



    </v-container>
</template>

<style scoped>
.con{
    margin-top: 50px;
    max-width: 700px;
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
    background-color: pink;
    margin: 10px;
    text-align: center;
}
.som{
    background-color: hotpink;
}
.sof2{
    margin: 10px;
    color: white;
    
}
.btn{
    float: right;
    position: absolute;
    left: 150px;
}
</style>
