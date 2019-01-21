<template>
<v-app>
    <v-container class="con">
        <v-layout>
            <v-flex>
                <v-card flat >
                    <v-card-title class="qus-1">욜로모여 영업시간은 오전 10시 ~ 오후 5시</v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
             <v-layout class="qus-3" align-space-around justify-center row mb-3>
             <v-flex xs6>
                 <v-btn large class="qus-bnt" color="white">문의하기</v-btn>
             </v-flex>
             <v-flex xs6>
                <v-btn large class="qus-bnt" color="white">자주 묻는 질문</v-btn>
             </v-flex>
        </v-layout>   
        <v-divider></v-divider>  
        <v-layout>
            <v-flex xs8>
                <v-card class="qus-0">
                    <v-card-text class="qus-t-1">문의사항</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card class="qus-0">
                    <v-card-text class="qus-t-1">답변</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
         <v-divider></v-divider>  
         <v-layout align-space-around justify-center column>
            
             <template v-for="qut in quetions">
                 <v-layout :key="qut">
                 <v-flex xs8 >
                     <v-card class="qus-2" flat >
                     <v-list-tile>
                         <v-list-tile-content>
                            <v-list-tile-title class="qus-2-1">{{qut.title}}</v-list-tile-title>
                            <v-list-tile-sub-title class="qus-2-2">{{qut.date}}</v-list-tile-sub-title>
                         </v-list-tile-content>
                     </v-list-tile>
                     </v-card>
                 </v-flex>
                  
                 <v-flex xs4  >
                     <v-card class="qus-2" flat>
                     <v-card-text class="qus-2-4" v-if="qut.answer=='답변완료'">{{qut.answer}}</v-card-text>
                     <v-card-text class="qus-2-3" v-else-if="qut.answer=='검토중'">{{qut.answer}}</v-card-text>
                     </v-card>
                 </v-flex>
             </v-layout> 
             <v-divider :key="qut"></v-divider>  
             </template>
             
         </v-layout>
    

    </v-container>
</v-app>
    
</template>
<script>
export default {
    data(){
        return{
            quetions:[
                {title:'아 빨리 빨리 진행해야지.', date:'2018.06.01', answer:'검토중'},
                {title:'아 빨리 빨리 진행해야지.', date:'2018.06.01', answer:'답변완료'},
                {title:'아 빨리 빨리 진행해야지.', date:'2018.06.01', answer:'검토중'},
                {title:'아 빨리 빨리 진행해야지.', date:'2018.06.01', answer:'답변완료'},
                {title:'아 빨리 빨리 진행해야지.', date:'2018.06.01', answer:'답변완료'},
            ]
        }
    }

}
</script>


<style>
.con{
    padding: 0;
    margin-top: 60px;
}
.qus-0{
    
}
.qus-1{
    font-size: 12pt;
    font-weight: bold;
}
.qus-t-1{
    text-align: center;
    background-color: #eeeeee;
    color: #959595;
    font-size: 13pt;
    font-weight: bold;
}
.qus-2{
    height: 50px;
    border-right:1px solid;
    border-color: rgba(0, 0, 0, .12);
}
.qus-2-1{
font-size: 11pt;
column-rule: gray;
font-weight: bold;
}
.qus-2-2{
    font-size: 10pt;
    color: gray;
    

}
.qus-2-3{
    text-align: center;
    color: #ffcb09;
    font-weight: bold
}
.qus-2-4{
   text-align: center;
   color:  #0fbbef;
   font-weight: bold;
}
.application--wrap{
    min-height: 0;
    background-color: white;
}
.qus-3{
    
}
.qus-bnt{
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
    font-weight: bold;
}
</style>
