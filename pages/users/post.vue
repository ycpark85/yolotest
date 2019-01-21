<template>
     <v-container fluid class="con elevation-1">
    <v-layout align-space-between column >
     <form @submit.prevent="postinsert" >   
    <v-textarea
    v-model="ptext"
      class="textar" 
     placeholder="내이야기를 해주세요."
      auto-grow
      value=""
      
    ></v-textarea>
    <v-combobox
    v-model="chips"
    :items="items"
    label="키워드로 태그해주세요."
    chips
    
    multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        
        close
        @input="remove(data.item)"
      >
        <span class="tag-1">#{{ data.item }}</span>&nbsp;
        
      </v-chip>
    </template>
  </v-combobox>
  <v-layout align-start row mt-4>
   <v-flex xs1 @click="$refs.fileimage.click()"><span class="icon-camera"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
   <input type="file" style="display:none" @change="onFileSelected" ref="fileimage" id="main_img" accept="image/x-png,image/jpeg" multiple>
   </v-flex>
  <!-- <v-flex xs1 pl-2  @click="$refs.filevideo.click()"><span class="icon-video"><span class="path1"></span><span class="path2"></span></span>
    <input type="file" style="display:none" @change="onFileSelected" ref="filevideo" id="main_img" accept="video/*">
   </v-flex>-->
   <v-flex xs1 pl-2></v-flex>
   <v-flex xs12 pl-4 class="cap"><img src="../../image/tag.png" alt=""></v-flex>
    </v-layout>
     <v-layout >
      <v-flex xs12 sm6 offset-sm3>
       <v-card flat>
        <v-container grid-list-xs fluid mt-4>
           <v-layout row wrap>
           
            <v-flex
              v-for="ma in mainimg"
              :key="ma"
              xs4 
            >
              <v-card flat tile>
                <v-card-media
                  :src=ma
                  height="120px"
                  
                ></v-card-media>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>
    
            
    </v-flex>
  </v-layout>      
    <v-flex class="up-btn" mt-4> 
        <v-btn type="submit" outline color="black" class="aple">올리기</v-btn>
    </v-flex>
     </form>
    </v-layout>
    
  </v-container>
</template>
<script>
import axios from 'axios'


export default {
    data(){
        return{
            ptext:'',
            mainimg:[],
            selfile:[],
            chips: [],
            items: [],
            tag:''
           
        }
        
    },
    methods:{
            async postinsert(){
              let fromData = new FormData();
              var len = this.selfile.length
              alert(len)
              for(var i=0; i<len; i++){
                  fromData.append('pimg',this.selfile[i])
              }
              for(var i=0; i<this.chips.length;i++){
               this.tag+='#'+this.chips[i]
           }
                    
                  fromData.append('ptext',this.ptext)
                  fromData.append('tag',this.tag)
              
               let data = await axios.post('/api/v1.0/users/postinsert', fromData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
                if(data.data.message=='success'){
                   this.$router.push({path:'/'})
                }
            
            },


           
                
          onFileSelected(e){
            var files = e.target.files || e.dataTransfer.files;
            var filesArr = Array.prototype.slice.call(files)
            alert(filesArr)
            
            if(files.length!==0){
            this.stauts1=files.length
            this.createImg(filesArr)
                
            }
            },

        createImg(filesArr){
            
           const image = new Image
           filesArr.forEach((f) => {
               const reader = new FileReader
               this.selfile.push(f)
              console.log(f)
                 reader.onload=(e)=>{
                 this.mainimg.push(e.target.result)             
            }
               
                 reader.readAsDataURL(f);
            })
        
           
            
        },
          remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
         }
             
             
             
         }   
            
           
        
       
}

</script>



<style scoped>
.con{
    
    max-width: 500px;
    min-width: 350px;
}

span{
    padding: 0;
    margin-top: 0;
    font-size: 18pt;
}
.tag-1{
    font-size: 10pt;
}
.cap{
    max-width: 300px;
}
.cap img{
    width: 100%;

}
.aple{
    width: 100%;
    margin: 0;
    max-width: 700px;
    height: 50px;
}

</style>

