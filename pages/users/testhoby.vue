<template>
    <v-container
    id="grid"
    fluid
    tag="section"
    class="con pa-0 elevation-1"
    
  >
     <v-layout row mt-2 >
      <v-flex xs1 ml-2 pl-0>
        <v-card color="primary" flat >
            <v-avatar >
            <img 
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
            </v-avatar>
        </v-card>
      </v-flex>
       <v-flex xs6 ml-3>
        <v-card color="primary" flat>
             <v-card-text class="cpanyname">프로방스</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card color="secondary"  flat >
          
        
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap row>
      <v-flex class="video">
       <video  controls="controls" controlsList="nodownload" preload="metadata">

    <source src="../../server/uploads/admin/video/videoplayback5MB3WD0O.mp4" type="video/mp4" />

    <source src="Kalimba.webm" type="video/webm" />

</video>




      </v-flex>
    </v-layout>
   <v-layout wrap row class="forth">
     <!-- <v-flex xs3 >
        <v-card  flat  >
          <v-card-text class="ico2"><v-icon class="ico3" >icon-activepurchese </v-icon>{{purnum}}</v-card-text>
        </v-card>
      </v-flex> -->
      <v-flex xs4 >
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">icon-activesmeilblue </v-icon> {{purnum}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4  @click="like">
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">icon-star</v-icon>{{purnum}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 >
        <v-card flat >
          <v-card-text class="ico2"><v-icon class="ico3">icon-pacil </v-icon>{{purnum}}</v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
   <v-layout wrap row class="" align-space-between column text-xs-center>
     <v-flex>
       <v-card  flat  >
          <v-card-text class="time1"><div class="title">슈가케익아트 원데이클래스</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card  flat class="time" >
          <v-card-text class="time1"><div class="subheading">2018.06.25.토/서울</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="title">￦20,000</div></v-card-text>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
        <v-btn outline color="black" class="aple">상세보기</v-btn>
        </v-card>
     </v-flex>
     <v-flex>
       <v-card flat class="time" >
          <v-card-text class="time1"><div class="caption">#원데이클래스 #케익만들기 #서울취미</div></v-card-text>
        </v-card>
     </v-flex>
   </v-layout>
 
  </v-container>
</template>
<style scoped>
.con{
  max-width: 500px;
  min-width: 350px;
   
    margin-top: 70px;
    margin-bottom: 20px;
}.ava{
    margin-right: 10px;
}
video{
  max-width: 100%;
  min-height: 100%;
 
}

.ico{
  text-align: right;
  padding-left:0;
}
.ico1{
  font-size: 10pt;
}
.ico2{
  font-size: 10pt;
  color: gray;
}
.ico3{
  margin-right: 3px;
  font-size: 14pt;
  color: teal;
}
.one{
  padding-left: 0;
  padding-right: 0;
  text-align: right;
}
.caro{
  height: 350px;
}
.forth{
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
}

.title, .subheading{
  font-weight: bold;
  
}
.time1{
  padding-bottom: 5px;
  padding-top: 0;
}
.aple{
  font-size: 15pt;
  font-weight: bold;
  width:200px;
}
.caption{
  color:gray;
}
.cpanyname{
    font-weight: bold;
}
</style>
