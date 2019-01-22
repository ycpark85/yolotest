<template>
    <v-container class="logincon elevation-1">
        <v-layout align-space-between column class=" logl">
            <form @submit.prevent="companyinsert()" >  
            <v-layout align-center justify-center row>
            <v-flex xs1 class="si-1">
              <span>업체명 :</span>
          </v-flex>
            <v-flex xs6>
            <v-text-field
            v-model="name"
            class=""
             required
          ></v-text-field>

            </v-flex>
            </v-layout>
           <v-layout align-center justify-center row>
            <v-flex xs1 class="si-1">
              <span>주소 :</span>
          </v-flex>
            <v-flex xs6>
            <v-text-field
            v-model="adress"
            class=""
             required
          ></v-text-field>

            </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
            <v-flex xs1 class="si-1">
              <span>전화번호 :</span>
          </v-flex>
            <v-flex xs6>
            <v-text-field
            v-model="phone"
            class=""
             required
          ></v-text-field>

            </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
                 <v-flex xs2 class="si-1">
              <span>업체 이미지 :</span>
                </v-flex>
                 <v-flex xs1 @click="$refs.fileimage.click()"><span class="icon-camera"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                <input type="file" style="display:none" @change="onFileSelected" ref="fileimage" id="main_img" accept="image/x-png,image/jpeg" multiple>
                </v-flex>
                <v-flex xs1>
                <v-card-media
                :src="img2"
                height="120px"
                >

                </v-card-media>

        </v-flex>
   
             </v-layout>
             <v-layout align-center justify-center row>
             <v-flex class="" xs1 mt-4> 
        <v-btn type="submit" outline color="black" class="aple">업체등록</v-btn>
    </v-flex>
             </v-layout>
            </form>
        </v-layout>
        
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'test',
    data(){
        return{
           img2:'',
           name:'',
           phone:'',
           adress:'',
        }
    },
    methods:{
    async companyinsert(){
       
        let formData = new FormData();
        let fileDom = document.querySelector('#main_img')
        formData.append('img2',fileDom.files[0])
        formData.append('name',this.name)
        formData.append('phone',this.phone)
        formData.append('adress',this.adress)
        let url = '/api/v1.0/admin/companyinsert'
        let data = await axios.post(url,
        formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
         window.location.reload()
    },
   onFileSelected(e){
          const id = e.target.getAttribute('id')
            var files = e.target.files || e.dataTransfer.files;
            this.createImg(id,files[0])
                
        },
          createImg(id, file){
            const image = new Image
            const reader = new FileReader
      
            reader.onload=(e)=>{
             
                  this.img2 = e.target.result
                  alert(this.img2)
              
            }
            reader.readAsDataURL(file);
        }
    }

}
</script>

<style scoped>
.logincon{
    max-width: 1200px;
}
.icon-camera{
    font-size: 30pt;
}

</style>
