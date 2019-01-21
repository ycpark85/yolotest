<template>
    <v-container class="con">
        <v-layout align-space-around justify-center column >
            <v-flex xs12>
                <v-card class="cu-1 t-1" flat>
                    보유포인트
                </v-card>
                 <v-card class="cu-1 t-2" flat>
                    5000
                </v-card>
                <v-card class="cu-1 t-3" flat>
                   충전
                </v-card>
                <v-card class="cu-1 t-4" flat>
                   포인트 이용내역
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
           <v-flex xs-8 class="po-0 po-b ">
               <v-card class="po-1" flat>
                   <span>쪽지 수랑(이진희)</span>
               </v-card>
               <v-card class="po-1 t-s" flat>
                   2018-06-01-14:12
               </v-card>
           </v-flex>
           <v-flex xs-4 class="po-0 po-c">
               <v-card class="po-2" flat>
                   <v-card-title><v-icon>icon-f-arrow2   </v-icon> 50</v-card-title>
               </v-card>
               
           </v-flex>
        </v-layout>
    </v-container>
</template>
<style scoped>
.con{
    margin-top: 60px;
}
.po-0{
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}
.po-b{
    border-left: 1px solid gray;
}
.po-c{
    border-right: 1px solid gray;
}
.po-1{
    margin-left: 10px;
    height: 25px;
}
.po-2{
    margin-left: 10px;
    height: 50px;
    font-size: 15pt;
}
.t-s{
    font-size: 9pt;
    color: gray;
}
.cu-1{
    text-align: center;

}
.t-1{
    font-size: 20pt;
    font-weight: bold;

}
.t-2{
    font-size: 25pt;
    color: aqua;
}
.t-3{
    margin-bottom: 30px;
}
.t-4{
    font-size: 15pt;
    color: gray;
    background-color: beige;
    margin-bottom: 10px;
}

</style>

