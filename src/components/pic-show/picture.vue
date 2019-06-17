<template>
  <div>
    <div v-if="showWin" class="picture-win" @touchend="hide">
      <img :src="data.url" alt="" :style="styleObject"/>
      <div v-if="data.toolbar" class="picture-tool">
        <span v-for="tool in data.tools" @touchend.stop="tool.fun">
          {{tool.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
  })
  export default class PictureShow extends Vue {
    showWin = false
    rot = 0
    sle = 1
    styleObject={
      'transform': 'rotate(0deg) scale(1,1)'
    }
    data = {
      url: "111",
      toolbar:false,
      onClose:() => {},
      tools: [{
          "name":'放大',
          "fun":() => { this.scaleImg(0.1) }
        },{
          "name":'旋转',
          "fun":() => { this.rotateImg() }
        },{
          "name":'缩小',
          "fun":() => { this.scaleImg(-0.1) }
        }]
    }
    show(params){
      this.showWin=true
      this.data = Object.assign({},this.data,params);
    }
    hide(){
      this.showWin=false
    }
    rotateImg(){
      this.rot += 90;
      this.styleObject.transform = `rotate(${this.rot}deg) scale(${ this.sle })`;
    }
    scaleImg(c){
      this.sle += c;
      this.styleObject.transform = `rotate(${this.rot}deg) scale(${ this.sle })`;
    }
    mounted(){
      
    }
  }
</script>
<style lang='less' scoped>
  .picture-win{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    z-index: 9;
    img{
      width: 100%;
      position: absolute;
      top: 50%;
      margin-top: -50%;
      // transform: translateY(-50%);
    }
    .picture-tool{
      position: fixed;
      width: 160px;
      height: 36px;
      left: calc(~"50% - 60px");
      bottom: 50px;
      color:#fff;
      span{
        background: #000;
        line-height: 36px;
        box-sizing: border-box;
        height: 36px;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        &:first-child{
          width:60px;
          border-radius: 20px 0 0 20px;
          padding-left:15px;
        }
        &:nth-child(2){
          width:40px;
          text-align:center;
        }
        &:last-child{
          width:60px;
          padding-left: 15px;
          border-radius: 0 20px 20px 0;
        }
      }
    }
  }
</style>
