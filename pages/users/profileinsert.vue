<template>
<v-container class="con" >
  
  <v-app> 
    <v-content>
   <v-stepper v-model="e1" class="step">
    
    <v-stepper-header>
      
      <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="e1 > 3"></v-stepper-step>
       <v-divider></v-divider>

      <v-stepper-step step="4"></v-stepper-step>
          
    </v-stepper-header>
     
    <v-stepper-items>
       <form @submit.prevent="profileadd">
      <v-stepper-content step="1" wrap>
         <v-layout align-space-between row>
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-title class="pname">
                  <span class="icon-basic"><span class="path1"></span><span class="path2"></span>
              <span class="path3"></span><span class="path4"></span></span>&nbsp;기본정보
              </v-card-title>  
               <span class="info-1">이름,생년월일은 가입정보와 동일하며,변경할 수 없습니다.</span>
             </v-card>
             
                
             
            </v-flex>
        </v-layout>
        <v-layout align-space-between row wrap class="pi-0">
          <v-flex xs4 pa-2 >
             <v-card  class="proimg">
            <img :src="img"  alt=""> 
         </v-card>
          <v-icon class="btn" @click="$refs.fileimage.click()" hover> add_a_photo </v-icon>
          <input type="file" style="display:none" @change="onFileSelected" ref="fileimage" id="proimg" accept="image/x-png,image/jpeg">
          </v-flex>
          <v-flex xs7 mt-2 ml-3>
               <v-card  flat>
                    <v-card-title class="pi-5">{{name}}({{gender}})</v-card-title>
                    <v-card-title class="pi-5">{{birth}}({{age}})</v-card-title>
                </v-card>
          </v-flex>
        </v-layout>
         <v-layout row fill-height wrap mt-4>
            <v-flex xs3 class="pi-1 pi-4">
                <v-card flat  >
                    <v-card-title class="pi-2">닉 &nbsp;네&nbsp;임</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 pi-4">
               <v-card flat>
                    <v-card-title >
                        <v-text-field
                          v-model="nickname"
                          :counter="10"
                           placeholder="10자이내로 입력해주세요."
                           required
                        ></v-text-field>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row fill-height wrap>
            <v-flex xs3 class="pi-1 pi-4">
                <v-card flat >
                    <v-card-title class="pi-2">혈 &nbsp;액 &nbsp;형</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 pi-4">
                <v-card flat >
                    <v-card-title >
                       <v-select
                          v-model="select"
                         
                          :items="items"
                          item-text="blood"
                          label="혈액형을 선택해주세요."
                          persistent-hint
                          return-object
                          single-line
                        ></v-select>

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap>
            <v-flex xs3 class="pi-1 pi-4">
                <v-card flat  >
                    <v-card-title class="pi-2">활동지역</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 pi-4">
                <v-card flat>
                    <v-card-title >
                        <v-select
                          v-model="sta_sel"
                          :items="states"
                          item-text="state"
                          label="활동지역을 선택하세요."
                          persistent-hint
                          return-object
                          single-line
                        ></v-select>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap>
            <v-flex xs3 class="pi-1 pi-4">
                <v-card flat  >
                    <v-card-title class="pi-2">직 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;업</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 pi-4">
               <v-card flat>
                    <v-card-title >
                        <v-text-field
                          
                          v-model="job"
                          :counter="10"
                        
                           placeholder="학생,회사원,프리랜서,무직"
                        
                          required
                        ></v-text-field>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap>
            <v-flex xs3 class="pi-1 pi-4">
                <v-card flat >
                    <v-card-title class="pi-2">결혼유무</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 pi-4">
                  <v-card flat>
                    <v-card-title >
                        <v-radio-group v-model="merred" row class="r-1">
                            <v-radio label="미혼" value="not" checked></v-radio>
                            <v-radio label="기혼" value="merred"></v-radio>
                            
                        </v-radio-group> 

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row fill-height wrap>
            <v-flex xs3 class="pi-1">
                <v-card flat  >
                    <v-card-title class="pi-2">연애유무</v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs8 class="pi-1 pi-3 ">
                 <v-card flat>
                    <v-card-title >
                        <v-radio-group v-model="love" row class="r-1">
                            <v-radio label="연애중" value="couple" checked></v-radio>
                            <v-radio label="솔로" value="solo"></v-radio>
                           
                        </v-radio-group> 

                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center row fill-height wrap mt-3>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
         다음
        </v-btn>
        </v-layout>
       
      </v-stepper-content>
      <v-stepper-content step="2">
           <v-layout align-space-between row>
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-title class="pname">
                  <span class="icon-char"><span class="icon-soper"><span class="path1"></span><span class="path2"></span></span></span>&nbsp;성격
              </v-card-title>
              <span class="info-1">성격의 유형을 선택해주세요(최대 5개까지 선택가능)</span>  
            </v-card>
            </v-flex>
        </v-layout>
          <v-layout mt-4>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <v-flex
              v-for="(char,index) in Character"
              :key="char"
              xs4
            >
              <v-card flat tile>
                 <v-btn v-if="char_sel.indexOf(index)<0" class="pro-btn" @click="charCheck(index)">{{char}}</v-btn>
                 <v-btn v-else class="pro-btn" @click="charCheck(index)" color="accent">{{char}}</v-btn>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout> 
  <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <div
              v-for="(con,index) in char_con"
              :key="con"
              xs3
            >
                <v-card flat tile>
                    <v-chip
                        class="chip"
                            close
                            color="orange"
                            label
                            outline
                            @input="Rem(index)"
                            >{{con}}</v-chip>
                </v-card>
            </div>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout>   
   <v-layout align-center justify-center row fill-height wrap mt-3>
         <v-btn
          
          @click="e1 = 1"
        >
          이전
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          다음
        </v-btn>
        </v-layout> 
      </v-stepper-content>
       <v-stepper-content step="3"> 
            <v-layout align-space-between row>
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-text class="pname">
                <span class="icon-solike"><span class="path1"></span><span class="path2"></span></span><span class="li">관심사</span>
              </v-card-text> 
              
                  
              
              <span class="info-1">관심사를 선택해주세요(최대 5개까지 선택가능)</span>  
            </v-card>
            </v-flex>
        </v-layout>
          <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <v-flex
              v-for="(imt,index) in  intr"
              :key="imt"
              xs4
            >
              <v-card flat tile>
                 <v-btn v-if="inter_sel.indexOf(index)<0" class="pro-btn" @click="interCheck(index)">{{imt}}</v-btn>
                 <v-btn v-else class="pro-btn" @click="interCheck(index)" color="accent">{{imt}}</v-btn>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout> 
  <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <div
              v-for="(con,index) in  inter_con"
              :key="con"
              
            >
                <v-card flat tile>
                    <v-chip
                            close
                            color="orange"
                            label
                            outline
                            @input="Rem1(index)"
                            >{{con}}</v-chip>
                </v-card>
            </div>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout>   
   <v-layout align-center justify-center row fill-height wrap mt-3>
         <v-btn
          
          @click="e1 = 2"
        >
         다음
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
         다음
        </v-btn>
        </v-layout> 
       </v-stepper-content>
           <v-stepper-content step="4"> 
            <v-layout align-space-between row>
            <v-flex xs12>
            <v-card pr-2 flat>
              <v-card-text class="pname">
                <span class="icon-sosmeil"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span><span class="li">매력포인트</span>
              </v-card-text> 
              
                  
              
              <span class="info-1">매력포인트를 선택해주세요(최대3개까지 선택가능)</span>  
            </v-card>
            </v-flex>
        </v-layout>
          <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <v-flex
              v-for="(ape,index) in apear"
              :key="ape"
              xs4
            >
              <v-card flat tile>
                 <v-btn v-if="apear_sel.indexOf(index)<0" class="pro-btn" @click="apearCheck(index)">{{ape}}</v-btn>
                 <v-btn v-else class="pro-btn" @click="apearCheck(index)" color="accent">{{ape}}</v-btn>
              </v-card>
            </v-flex>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout> 
  <v-layout>
      <v-flex xs12 >
       <v-card flat>
        <v-container grid-list-xs fluid pa-0>
           <v-layout row wrap pa-0>
           
            <div
              v-for="(con,index) in  apear_con"
              :key="con"
              
            >
             <v-card flat tile>
                    <v-chip
                            close
                            color="orange"
                            label
                            outline
                            @input="Rem2(index)"
                            >{{con}}</v-chip>
                </v-card>
            </div>
            
          </v-layout>
          
          </v-container>  
            </v-card>  
    </v-flex>
  </v-layout>   
   <v-layout align-center justify-center row fill-height wrap mt-3>
       
         <v-btn
          
          @click="e1 = 3"
        >
          이전
        </v-btn>
        <v-btn
          color="primary"
          type="submit"
        >
          확인
        </v-btn>
        </v-layout> 
       </v-stepper-content>
      </form>   
    </v-stepper-items>
  </v-stepper>
  </v-content>
 </v-app>
  </v-container>
</template>
<script>
import axios from 'axios'
  export default {
  data () {
    return{
        img:'../../uploads/나연1.png',
    nickname:'',
    love:null,
    merred:null,
    job:null,
    name:'',
    gender:'',
    birth:'',
    age:0,
    char_sel:[],
    char_con:[],
    inter_sel:[],
    inter_con:[],
    apear_sel:[],
    apear_con:[],
    e1: 0,
    Character:['친절', '착함','다정다감','차분함','신중','섬세','잘챙겨줌','털털함','대범함',
                '리더형','추진력','말을잘함','말잘들음','겸손','과묵','유머감각','솔직','진지','정의로움','정직','배려',
                '센스쟁이','눈치빠름','발랄','외향적','내향적','집순이','집돌이','근검절약','츤데레','로맨틱','시크','예의바름'    ],

    intr:['봉사','애견','애묘','동물','여행','공연관람','음악','패션','영화','수공예','운동','등산','다이어트','외국어','피트니스',
            '요리','자기개발','심리','문학','자연','과학','파티','수상레저','스키','뷰티','금융','제태크','캠핑','차','문화','예술','다도',
            '맛집','게임','쇼핑','식물'],
    apear:['잘생기','예쁨','귀여움','패션피플','꿀피부','강아지상','고양이상','큰키','작은키','아담함','늘씬함','마른체형','근육질','섹시','어깨깡패',
            '곰돌이배','무쌍','쌍커플','예쁜손','꿀성대','구리빛','우윳빛깔','서양몸매','베이글'

    ],       

    steps: [1, 2, 3, 4, 5],
    
     select: { blood: '혈액형 선택해 주세요.'},
        items: [
          { blood: 'A형' },
          { blood: 'B형' },
          { blood: 'O형' },
          { blood: 'AB' }
        ],
     sta_sel:{state:'활동지역을 선택해주세요.'},
        states:[
            {state:'서울'}, {state:'부산'}, {state:'인천'}, {state:'광주'}, {state:'대전'}, {state:'대구'}, {state:'울산'}, {state:'경기-일산'},
             {state:'경기-의정부'}, {state:'경기-안양'}, {state:'경기-분당'}, {state:'경기-수원'}, {state:'경기-기타'}, {state:'강원'}, {state:'충북'}, {state:'충남'}, {state:'전북'}, {state:'전남'}, {state:'경북'}, {state:'제주'}
        ]

    }
  },
  methods:{
     charCheck(index){
         const i = this.char_sel.indexOf(index)
         
        if(this.char_sel.length<5 || i>-1){         
        if(i>-1){
            this.char_sel.splice(i,1)
            this.char_con.splice(i,1)
        }else{
            this.char_sel.push(index)
            this.char_con.push(this.Character[index])
        }
        }else{
            alert('5개까지만 선택이 가능합니다.')
        }
        
      },
      interCheck(index){
        const i = this.inter_sel.indexOf(index)
            
            if(this.inter_sel.length<5 || i>-1){         
            if(i>-1){
                this.inter_sel.splice(i,1)
                this.inter_con.splice(i,1)
            }else{
                this.inter_sel.push(index)
                this.inter_con.push(this.intr[index])
            }
            }else{
                alert('5개까지만 선택이 가능합니다.')
            }
      },
      apearCheck(index){
                    const i = this.apear_sel.indexOf(index)
                    
                    if(this.apear_sel.length<3 || i>-1){         
                    if(i>-1){
                        this.apear_sel.splice(i,1)
                        this.apear_con.splice(i,1)
                    }else{
                        this.apear_sel.push(index)
                        this.apear_con.push(this.apear[index])
                    }
                    }else{
                        alert('3개까지만 선택이 가능합니다.')
                    }
      },
      Rem(index){
          const r= this.char_con.indexOf(index)
          this.char_sel.splice(r,1)
            this.char_con.splice(r,1)
      },
      Rem1(index){
          const r= this.inter_con.indexOf(index)
          this.inter_sel.splice(r,1)
            this.inter_con.splice(r,1)
      },
       Rem2(index){
          const r= this.inter_con.indexOf(index)
          this.apear_sel.splice(r,1)
            this.apear_con.splice(r,1)
      },
     async profileadd(){
            let formData = new FormData();
            let fileDom = document.querySelector('#proimg')

            formData.append('proimg',fileDom.files[0])
            formData.append('nickname',this.nickname)
             formData.append('blood',this.select.blood)
             formData.append('state',this.sta_sel.state)
             formData.append('job',this.job)
             formData.append('married',this.merred)
             formData.append('love',this.love)
             formData.append('char',this.char_con)
             formData.append('inter',this.inter_con)
             formData.append('apear',this.apear_con)




            let data = await axios.post('/api/v1.0/users/addprofile',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
                
            })
            if(data.status==200){
                alert('프로필 작성이 작성되었습니다.')
                 this.$nuxt.$router.replace({path:'/'})
            } 
            
            
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
                  this.img = e.target.result
            }
            reader.readAsDataURL(file);
        },
        async info(){
            let url = '/api/v1.0/users/info'
            let data = await axios.get(url)
            this.name = data.data.name
            if(data.data.gender=='man'){
                this.gender = '남자'
            }else{
                this.gender = '여자'
            }

            this.birth=data.data.birth
            let age2 = this.birth.split('.')
            console.log(age2 )
            this.age = 2019-Number(age2[0])+1 
            
        }
  },
      async mounted () {
        let url1 = '/api/v1.0/users/session-check'
        let logincheck = await axios.get(url1)
        if(!logincheck.data){
            alert('로그인하여야 이용가능 합니다.')
             this.$nuxt.$router.replace({path:'/login'})
        }else{
            this.info()
        }
    }
  }
</script>

<style scoped>

input, select{
  height:30px;
    width: 300px;
   
}
.con{
    margin-top: 50px;
    min-width: 350px;
    max-width: 700px;
}
.v-stepper__content{
    padding: 5px;
}
.pname{
    font-size: 20pt;
    font-weight: bold;
}
.basic{
    background-color: gray;
}
.pi-5{
    color:#6d6e6e;
    font-size: 12pt;
    font-weight: bold;
}
.info-1{
    font-size: 10pt;
    
    margin-top: 10px;
}

.proimg{
    
    border-radius: 15px;
    padding: 0px;
    overflow: hidden;
    width: 100px;
    height: 100px;
    
}
.proimg img{
  width: 100%; 
   
}
/*----------------------------------------------------------------------------------------*/
.pi-0{
  border-radius: 10px;
}

.pi-2{
  margin-left: 1px;
  
  padding-left: 10px;
 
  font-size: 10pt;
  font-weight: bold;
  color:#6d6e6e;
  
  
}
.pi-3{
  border-left: none;
}
.pi-4{
  border-bottom: none;
}
.r-1 label{
  font-size: 10.2pt;
  font-weight: bold;
}

.v-messages{
    min-height: 0;
}
.v-input{
  margin-top: 0;
}
.v-input__slot{
  margin-bottom: 0;
}
/*-------------------*/
.pro-btn{
    font-weight: bold;
}
.icon-char {
    font-size: 27pt;
}
.icon-sosmeil{
    font-size: 27pt;
      margin-right: 10px;
}
.icon-solike{
   
    font-size: 23pt;
   
    margin-right: 10px;
}
.btn{
    z-index: 1;
    width: 45px;
    height: 45px;
    background-color:teal;
    border-radius: 50px;
    float: right;
    position: absolute;
      left: 95px;
      top: 185px;
      font-size: 30pt;
}

.pro-btn{
    width: 80px;
}
</style>


              