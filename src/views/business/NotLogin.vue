<template>
  <div class="NotLogin" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="notlogin_box">
      <h3>{{$t('notlogin.f1')}}</h3>
      <div class="btn">
        <i><img src="@/assets/img/public/stram_icon.png" alt=""></i>
        <span>{{$t('notlogin.f2')}}</span>
      </div>
      <ul>
        <li>
          <i><img src="@/assets/img/public/step1.png" alt="" srcset=""></i>
          <p>{{$t('notlogin.f3')}}</p>
        </li>
        <li>
          <b><img src="@/assets/img/public/arrows_img1.png" alt="" srcset=""></b>
        </li>
        <li>
          <i><img src="@/assets/img/public/step2.png" alt="" srcset=""></i>
          <p>{{$t('notlogin.f4')}}</p>
        </li>
        <li>
          <b><img src="@/assets/img/public/arrows_img1.png" alt="" srcset=""></b>
        </li>
        <li>
          <i><img src="@/assets/img/public/step3.png" alt="" srcset=""></i>
          <p>{{$t('notlogin.f5')}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotLogin",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
    
    }
  },
  created() {},
  methods: {
   
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight-90;
  },

  
};
</script>

<style scoped lang="scss">
.NotLogin{
  width: 100%;
  background: url('../../assets/img/public/bg1.png') top center/100% #1d1f28 no-repeat;
  .notlogin_box{
    width: 520px;
    padding-top: 300px;
    h3{
      text-align: center;
      font-size: 32px;
      color: #ffffff;
      font-weight: normal;
    }
    .btn{
      margin-top: 50px;
      height: 44px;
      width: 280px;
      background-image: linear-gradient(-90deg, 
        #1c5ae4 0%, 
        #3780f6 100%);
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i{
        width: 16px;
        height: 16px;
        margin: 0;
      }
      span{
        margin: 0;
        color: #ffffff;
        font-size: 16px;
        padding-left: 10px;
      }
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 100px;
      li{
        margin: 0;
        height: 54px;
        display: flex;
        align-items: center;
        position: relative;
        flex: 1;
        i{
          width: 54px;
        }
        p{
          position: absolute;
          bottom: -160px;
          text-align: center;
          width: 100%;
          font-size: 14px;
          color: #6a81a9;
          height: 140px;
        }
      }
    }
  }
}
</style>
