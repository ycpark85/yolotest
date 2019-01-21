<template>
<v-app>
    <v-container class="con">
        <v-layout align-space-around justify-center column>
            <template v-for="item in noti" >
              <v-flex :key="item.code">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{item.sub}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                            <v-icon color="grey lighten-1">info</v-icon>
                     </v-list-tile-action>
                 </v-list-tile>
            </v-flex>
            <v-divider :key="item"></v-divider>
            </template>
        </v-layout>
    </v-container>
</v-app>
</template>
<script>
export default {
    data(){
        return{
            noti:[
                {code:"a123",title:'7월이벤트',sub:"2017.08.03"},
                {code:"a124",title:'7월이벤트',sub:"2017.08.03"},
                {code:"a125",title:'7월이벤트',sub:"2017.08.03"},
                {code:"a126",title:'7월이벤트',sub:"2017.08.03"},
                {code:"a127",title:'7월이벤트',sub:"2017.08.03"},
                {code:"a128",title:'7월이벤트',sub:"2017.08.03"},
                 ],
        }
    }
}
</script>

<style>
.con{
    margin-top:50px;
}
.application--wrap{
    min-height: 0;
    background-color: white;
}
</style>
