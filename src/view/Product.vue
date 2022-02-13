<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>产品</p>
                    <li v-for="(item,index) in productList"
                        :key="index" @click="getData(item.type)" :class="item.type === curType ? 'selected':''">
                      {{item.name}}
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
              <div class="flex-row flex-wrap">
                <div v-for="(item,index) in productDetailList">
                  <img class="w_260" :src="item.pic" />
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
          curType:0,
          productList: [
              {
                name: "2021茶吧机",
                path: "/product/detail",
                type:0
              },
              {
                name: "宜达茶吧机",
                path: "/product/detail",
                type:1
              },
              {
                name: "水柱款茶吧机",
                path: "/product/detail",
                type:2
              },
              {
                name: "爱妻茶吧机",
                path: "/product/detail",
                type:3
              }
            ],
          productList_2021:[
            {name:'',pic:require('../assets/img/2021/01.jpg')},
            {name:'',pic:require('../assets/img/2021/02.jpg')},
            {name:'',pic:require('../assets/img/2021/03.jpg')},
            {name:'',pic:require('../assets/img/2021/04.jpg')},
            {name:'',pic:require('../assets/img/2021/05.jpg')},
            {name:'',pic:require('../assets/img/2021/06.jpg')},
            {name:'',pic:require('../assets/img/2021/07.jpg')},
            {name:'',pic:require('../assets/img/2021/08.jpg')},
            {name:'',pic:require('../assets/img/2021/09.jpg')},
            {name:'',pic:require('../assets/img/2021/10.jpg')},
            {name:'',pic:require('../assets/img/2021/11.jpg')},
            {name:'',pic:require('../assets/img/2021/12.jpg')},
            {name:'',pic:require('../assets/img/2021/13.jpg')},
            {name:'',pic:require('../assets/img/2021/14.jpg')},
            {name:'',pic:require('../assets/img/2021/15.jpg')},
            {name:'',pic:require('../assets/img/2021/16.jpg')}
          ],
          productList_yida:[
            {name:'',pic:require('../assets/img/yida/17.jpg')},
            {name:'',pic:require('../assets/img/yida/18.jpg')},
            {name:'',pic:require('../assets/img/yida/19.jpg')},
            {name:'',pic:require('../assets/img/yida/20.jpg')}
          ],
          productList_shuizhu:[
            {name:'',pic:require('../assets/img/shuizhu/24.jpg')},
            {name:'',pic:require('../assets/img/shuizhu/25.jpg')},
            {name:'',pic:require('../assets/img/shuizhu/26.jpg')},
            {name:'',pic:require('../assets/img/shuizhu/27.jpg')},
          ],
          productList_aiqi:[
            {name:'',pic:require('../assets/img/aiqi/21.jpg')},
            {name:'',pic:require('../assets/img/aiqi/22.jpg')},
            {name:'',pic:require('../assets/img/aiqi/23.jpg')}
          ],
          productDetailList:[]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();

      //获取url后面的参数
      let param = location.href.split("?")[1];
      console.log(param)
      if(param){
          this.getData(parseInt(param.split("=")[1]));
      }else{
        this.getData(0)
      }
    },
  methods:{
    flushCom(){
      this.$router.go(0)
    },
    getData(type){
      console.log(type)
      this.curType = type
      if(type === 0){
        this.productDetailList = this.productList_2021
      }else if(type === 1){
        this.productDetailList = this.productList_yida
      }else if(type === 2){
        this.productDetailList = this.productList_shuizhu
      }else{
        this.productDetailList = this.productList_aiqi
      }
    }
  }
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #000000;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
    color: white;
}
#right{
    padding: 50px 0;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
  .w_260{
    width: 160px!important;
  }
}
.w_260{
  width: 260px;
}
  .selected{
    background: #928989;
    color: white;
  }


</style>

