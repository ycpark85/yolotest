<template>
    <v-app>
        <v-container class="con">
          
            <v-tabs color="white"
            slider-color="none"
            > 
            
            <v-flex xs6>
               <v-tab href="#1" class="even-1 ev-1" active-class=" even-2">
                진행중 이벤트
                </v-tab>
            </v-flex>
            <v-flex xs6>
                <v-tab href="#2" class="even-1 ev-2"  active-class=" even-2"> 
                참여&당첨내역
                </v-tab> 
            </v-flex> 
             <v-tab-item :id="'1'">
                <v-layout>
                    <v-flex xs12>
                        <v-carousel hide-controls>
                            <v-carousel-item
                               src="../../uploads/나연1.jpg"
                            ></v-carousel-item>
                        </v-carousel>
                    </v-flex>
                </v-layout>
            </v-tab-item>
           <v-tab-item :id="'2'">
               <v-layout>
                   
               </v-layout>
           </v-tab-item>    
             
            </v-tabs>
        </v-container>
    </v-app>
</template>
<style>

.even-1{
   
    font-weight: bold;
    width: 100%;
    max-width: 750px;
}
.even-2{
     width: 100%;
    font-weight: bold;
    color:tomato;
}
.ev-1{
   border:1px solid;
   border-color: rgba(0, 0, 0, .12);
}
.ev-2{
     border-top: 1px solid;
     border-bottom: 1px solid;
     border-right: 1px solid;
     border-color: rgba(0, 0, 0, .12);
}
.v-carousel__controls{
    background:none;
}


</style>
