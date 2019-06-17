<template>
  <div>
    <img :src="newImg" @touchend="showImg" />
    <picture-show ref="imgx"></picture-show>
  </div>
</template>


<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
 
  @Component({
    components:{
    }
  })
  export default class HomePage extends Vue {
    newImg = ''
    showImg(){
      this.$refs.imgx.show({
        url:this.newImg,
        toolbar: true
      })
    }
    mounted() {
       this.newImg =  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559742663884&di=3165b46c638fcdedf714be2f9096f5ee&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20150312%2Fhaixinghezhenzhubeikeshiliangbeijing_3937174.jpg'       
    }
  }
</script>
<style lang="less" scoped>
  img{
    width: 200px;
  }
</style>