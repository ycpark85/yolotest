<template>
<v-app>
    <v-container class="addcon elevation-1">
        <v-layout align-space-between column >
            <form @submit.prevent="addcontent()" >
            <v-layout align-center justify-center row>
                <v-flex xs1>
                    <span>타이틀:</span>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                    v-model="title"
                    class=""
                    required
                ></v-text-field>
                </v-flex>
            </v-layout>  
            <v-layout align-center justify-center row>
                <v-flex xs1>
                    <span>지  역:</span>
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
                <v-flex xs1>
                    <span>태 그:</span>
                </v-flex>
                <v-flex xs6>
                   <v-combobox
                    v-model="chips"
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
                </v-flex>
            </v-layout> 
            <v-layout align-center justify-center row>
           <v-flex xs1>
                    <span>설명:</span>
                </v-flex>
                <v-flex xs6>
                <v-textarea
                v-model="ctext"
                class="textar" 
                placeholder="콘텐츠 해설을 해주세요."
                auto-grow
                value=""
                v-on:keyup="change"
                ></v-textarea>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
            <v-flex xs1>
                 <span>영 상:</span>
            </v-flex>
            <v-flex xs6>
                <input type="file" ref="fileimage" id="convideo" accept="video/*" multiple>
            </v-flex>
            </v-layout>
            <v-layout align-center justify-center row>
                <v-flex xs1>
                    <span>업 체:</span>
                </v-flex>
               
                <v-flex xs6>
                   <v-card flat >
                    <v-card-title >
                       <v-select
                          v-model="select"
                          :items="companis"
                          item-text="name"
                          label="업체를 선택해주세요."
                          persistent-hint
                          return-object
                          single-line
                        ></v-select>

                    </v-card-title>
                </v-card>
                </v-flex>
               
            </v-layout>  
            <v-layout align-center justify-center row>
             <v-flex class="" xs1 mt-4> 
        <v-btn type="submit" outline color="black" class="aple">콘텐츠 등록</v-btn>
    </v-flex>
             </v-layout> 
            </form>           
        </v-layout>
    </v-container>
    </v-app>
</template>
<script>
import axios from 'axios'
export default {
     layout: 'test',
     data(){
         return{
         chips: [],
         ctext:'',
         ccoment:'',
         title:'',
         adress:'',
         tag:'',
        select: { name: '혈액형 선택해 주세요.',companycode:'ascd'},
        companis: [
                   
                   ]
                  
         }
     },
     methods:{
         remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
         },
         formatText(text){
            return text.replace(/\n$/, '<br>&nbsp;').replace(/\n/g,'<br>')
        },
        change(){
            this.ccoment=this.formatText(this.ctext)
        },
        async addcontent(){
           console.log('콘텐츠등록')
           console.log(this.select.companycode) 
           let formData =  new FormData();
           let fileDom = document.querySelector('#convideo')
           for(var i=0; i<this.chips.length;i++){
               this.tag+='#'+this.chips[i]
           }
           console.log(this.tag)
           console.log(this.ccoment)
           formData.append('convideo',fileDom.files[0])
           formData.append('title',this.title)
           formData.append('adress',this.adress)
           formData.append('coment',this.ccoment)
           formData.append('tag',this.tag)
           formData.append('companycode',this.select.companycode)
          let url = '/api/v1.0/admin/addcontents'
          let data = await axios.post(url,formData,{
                headers:{
                'Content-Type':'multipart/form-data'
            }
          })
          if(data){
               window.location.reload()
          }  
         
        },
        async companys(){
            console.log('된건가?')
            let url = '/api/v1.0/admin/comlist'
           let comlist= await axios.get(url)
           console.log(comlist.data.comlist.length)
           this.companis = comlist.data.comlist
           console.log(this.companis[0])
        } ,
        
     },
      mounted (){
           this.companys()
        } 
}
</script>

<style scoped>
.addcon{
     max-width: 1200px;
}

</style>
