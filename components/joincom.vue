<template>
    <v-container class="postid" >
        
           <v-layout class="postid" align-space-around justify-center row fill-height>
            <v-flex xs12>
              <v-card flat>
                <v-textarea
                    solo
                    autofocus
                     auto-grow
                        rows="1"
                        box
                        placeholder="댓글을 달아주세요."
                        background-color="white"
                        class="p_textarea elevation-1"
                        append-icon="send"
                        @click:append="cosend"
                        v-model="text"  
                    >
                    </v-textarea>         
              </v-card>
              
            </v-flex>             
           
           </v-layout>
        
    </v-container>
</template>
 <script>
 import axios from 'axios'
 export default {
     data(){
         return{
            text:''
         }
     },
     methods:{
        async cosend(){
           
            if(this.text!=''){

           
            let content= this.text.replace(/\n$/, '<br>&nbsp;').replace(/\n/g,'<br>')
             let data1 = await axios.post('/api/v1.0/comment/jcomadd',{
                    postid:this.$route.params.id,
                    content:content
             })
                window.location.reload()
            
            }else{
                console.log('아무것도 안적었잖아.')
            }
         }
     }
 }
 </script>
               
<style scoped>


.postid{
       
    position:relative;
    bottom: 0;
    padding: 0;
    margin: 0;
    max-width: 500px;
}
.combottom{
    padding-left: 10px;
    color: gray;
    font-weight: bold;
}
.p_textarea{
    background-color: white;
    
}
textarea{
    max-height: 100px;
}
.v-messages{
    min-height: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin:0;
    padding: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed {
    padding:0;
    margin: 0;
}
.v-input__slot{
    margin-bottom: 0;
    padding: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed .v-input__slot {
    padding: 0 0;
    margin: 0;
}

.v-card__title{
    padding: 5px;
}

.v-icon{
    vertical-align:middle;
}
</style>
