<template>

    <v-container class="con" pa-0>
        <v-layout row>
            <v-list subheader>
          <v-list-tile
            avatar
               >
            <v-list-tile-avatar>
              <img :src='"../../server/uploads/user/profile"+pro.image'>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{pro.nickname}}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action class="send">
              <v-btn  outline color="gray"  small block class="aple" @click="leSend">보내기</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      
        </v-layout>
        <v-layout row wrap>

            <v-flex xs12 class="textbox" id="textbox">
                 <div id="wrap" v-bind:style="{backgroundColor:basic}">
            <div class="area dummy" id="dummy" v-html="recomment"></div>
            <textarea class="area" v-bind:style="{paddingTop:top+'px' }" v-on:keyup="change" v-model="comment"></textarea>
            </div>
                
            </v-flex>
                
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-text v-bind:value='lticket' class="le-s-t">쪽지이용권 {{lticket}}장</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap >
                <div class="co co1" id="co1" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co1}"></div>
                <div class="co co2" id="co2" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co2}"></div>
                <div class="co co3" id="co3" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co3}"></div>
                <div class="co co4" id="co4" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co4}"></div>
                <div class="co co5" id="co5" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co5}"></div>
                <div class="co co6" id="co6" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co6}"></div>
                <div class="co co7" id="co7" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co7}"></div>
                <div class="co co8" id="co8" @click="chagecol" v-bind:style="{backgroundColor:backcolor.co8}"></div>
                
        </v-layout>
           
    </v-container>
</template>
<script>
import axios from 'axios'
  export default {
     
    data () {
      return {
          basic:'#eeeded',
          backcolor:{
              co1:'#fcc5ec',co2:'#bcd3f9',co3:'#f3df83',co4:'#dbcdfe',co5:'#eeeded',
              co6:'#fac5d0',co7:'#a0f1d9',co8:' #87e6f4'
              },
          pro:{},
          userid:'',
          receiptid:'',
          comment:'',
          lticket:'',
          recomment:'&nbsp;',
          top:0,
          h:0,
          wraph:0,
          hei: 0, 
        
        
      }
    },
      
   
    methods:{
        formatText(text){
            return text.replace(/\n$/, '<br>&nbsp;').replace(/\n/g,'<br>')
        },
        textArea(){
            var wrap = document.getElementById('wrap')
            this.wraph = wrap.offsetHeight
            var textarea = document.getElementById('textarea')
            var dummy = document.getElementById('dummy')
            this.h  = dummy.offsetHeight
            this.top = Math.max(0,(this.wraph-this.h)*0.5)
            this.hei= this.wraph-this.top 
            this.recomment = this.formatText(this.comment)
            console.log(this.top,this.hei,this.comment)
        },
        change(){
           this.textArea()
            

        },
        chagecol(e){
            var id = e.target.getAttribute('id')
            this.basic=this.backcolor[id]
        },  

        async profile () {
        this.receiptid=this.$route.params.id
        let data= await axios.get(`/api/v1.0/users/profile?userid=${this.receiptid}`)
        this.pro = data.data.profile
        this.userid = this.pro.userid
        this.lticket =data.data.coupon.lticket
       },
      
        
       async leSend(){
          
           if(this.comment!==''){
               let url = '/api/v1.0/letter/send'
               let data = await axios.post(url,data={
                   receiptid:this.receiptid,
                   content:this.recomment,
                   color:this.basic
               })
               alert(data)
               if(data){
                 this.$nuxt.$router.replace({path:'/letter'})
               }else{
                   alert('오류')
               }
           }else{
               alert('내용을 입력해주세요.')
           }
        }
        
    },
     beforeMount(){
       this.profile()
    },
    
  }
</script>
<style>
.le-s-t{
    text-align: right;
}

.con{
    min-width: 350px;
    max-width:700px;
    margin-top: 60px;
}
.v-list{
    width: 100%;
    
    
}
.aple{
    font-weight: bold;
}

.letterinput{
    vertical-align: middle

}
textarea{
   
    resize: none;
     text-align: center;
     font-size: 15pt;
     font-weight: bold;
        
    
}
#wrap {
  width: 100%;
  position: relative;
  font-family: sans-serif;
  height: 500px;
 
}

#wrap .area {
  resize: none;
  outline: none;
  display: block;
  width: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  font-family: sans-serif;
  font-size: 20px;
  text-align: center;
}

#wrap textarea.area {
  left: 0;
  height: 100%;

  background: transparent;
}

#wrap .dummy {
    top: -99999999px;
  left: 100%;
    
}
.co{
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin-top: 10px;
     margin-left:10px; 

}



</style>
