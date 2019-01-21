<template>
    <v-container class="con elevation-1" >
        <v-app>
        <v-layout>
            <v-flex>
              <v-list two-line>
                  <v-list-tile>
              <v-list-tile-avatar>
                <img :src='"../../server/uploads/user/profile"+post["profile.image"]'  >
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title >{{post["profile.nickname"]}}</v-list-tile-title>
                <v-list-tile-sub-title class="postime">{{post.updatedAt}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

              </v-list>
            </v-flex>    
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card flat>
                    <v-card-text v-html="post.contents">
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>    
        <v-layout align-space-around column>
            <template v-for="post1 in postimg">
              
               <v-flex xs12 :key="post1">
                <v-card class="po-img" flat>
                   <img :src='"../../server/uploads/user/post"+post1' aspect-ratio="2.75">
                </v-card>
            </v-flex>
            </template>
        </v-layout>
        
        <v-layout align-space-around column >
            <cmtbottom></cmtbottom>
            <v-flex class="po-comment" xs12>
                <v-card >
                    <v-card-title>comment {{cmtnum}}</v-card-title>
                </v-card>
            </v-flex>
            
           <v-layout align-space-around column >
               <template v-for="comt in comments">
                <v-layout  align-start row :key='comt["profileUserid"]' mb-3>
                 
               <v-flex xs2 pt-2 >
                  <v-avatar>
                <img :src='"../../server/uploads/user/profile"+comt["profile.image"]' alt="손나은">
                </v-avatar>
               </v-flex>
               <v-flex xs10 mt-3>
                   <v-card flat>
                      <span class="comname">{{comt["profile.nickname"]}}</span>
                   </v-card>
                   <v-card flat>
                       <span v-html='comt["comments"]'>
                           
                       </span>
                   </v-card>
               </v-flex>
             
               </v-layout>
                <v-divider :key='comt["profileUserid"]' ></v-divider>
               </template>
           </v-layout>
        </v-layout>   
    </v-app>
    </v-container>
</template>
<script>
import axios from 'axios'
import cmtbottom from '../../components/cmtbottom'
export default {
    layout: 'commets',
    components:{
    cmtbottom
    },
    data(){
        return{
            comments:[],
            post:[],
            userid:'',
            postimg:[],
            postcode:this.$route.params.id,
            cmtnum:''
        }
    },
    methods:{
    async comlist(){
           try{
            let url = `/api/v1.0/comment/list?postcode=${this.postcode}`
            let data = await axios.get(url)
            console.log('data:'+data.data.post)
           
              this.comments=data.data.comments,
              this.post=data.data.post,
              this.userid=data.data.userid,
              this.postimg=data.data.post.postimg.split('/').filter(x => x) 
              this.cmtnum=data.data.comments.length;  
            
            }catch(e){
             error({message:'뭔가 잘못됨.'})
         }
        
    }
    },
    mounted() {
        this.comlist()
    },

  }

</script>

<style scoped>
.con{ 
    padding: 0px;
    min-width: 350px;
    max-width: 500px;
    margin-top: 60px;
}
.po-img{
    
}
 img{
    width: 100%;
}
.po-commet-img{
    width: 100px;
    height: 100px;
}
.application--wrap{
    min-height: 0;
    background-color: white;
}
.v-list--two-line .v-list__tile{
    height: 50px;
}
.postime{
    font-size: 10pt;
}
.comname{
    font-weight: bold;
}

</style>
