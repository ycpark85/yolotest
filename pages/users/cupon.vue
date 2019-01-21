<template>
    <v-contain >
        <v-layout align-space-around justify-center column class="con">
            <v-flex xs12>
                <v-card class="cu-1">
                    보유쿠폰
                </v-card>
                 <v-card class="cu-1">
                    3장
                </v-card>
                <v-card class="cu-1">
                   사용완료 및 기간 만료된 쿠폰은 자동 삭제됩니다.
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout justify-center row >
            <v-flex xs8>
               <v-card>
                   6월 베스트 프렌드 1만원 할인
               </v-card>
               <v-card>
                   5만원이상시
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card class="cu-1">
                   D-30
               </v-card>
               <v-card class="cu-1">
                   기간:2018.06.01~06.31
               </v-card>
            </v-flex>
        </v-layout>
    </v-contain>
</template>
<style scoped>
.con{
    margin-top: 60px;
}
.cu-1{
    text-align: center;

}
</style>

