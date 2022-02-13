<template>
    <div id="Software" class="flex-row flex-wrap">
        <div v-for="(item,index) in productList">
          <img class="w_260" :src="item.pic" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Product',
    data(){
        return{
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
          productList:[]
        }
    },
    mounted(options) {
      //获取url后面的参数
      let param = location.href.split("?")[1];
      console.log(param)
      if(param){
        let paramArr = param.split("&");

        if(paramArr.length > 0){
          this.getData(paramArr[0].split("=")[1]);
        }
      }
    },
    methods:{
      getData(type){
        console.log(type)
        if(type === "0"){
          this.productList = this.productList_2021
        }else if(type === "1"){
          this.productList = this.productList_yida
        }else if(type === "2"){
          this.productList = this.productList_shuizhu
        }else{
          this.productList = this.productList_aiqi
        }
      }
   }
}
</script>
<style scoped>
  .w_260{
    width: 260px;
  }
</style>

