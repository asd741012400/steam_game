<template>
  <div class="BindingAccount" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="bindingaccount_box">
      <h3>{{$t('bindingaccount.f1')}}</h3>
      <div class="import">
        <i><el-input v-model="input" clearable></el-input></i>
        <span>{{$t('bindingaccount.f2')}}</span>
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
  name: "BindingAccount",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      input:''
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
.BindingAccount{
  width: 100%;
  background: url('../../assets/img/public/bg2.png') top center/100% #1d1f28 no-repeat;
  .bindingaccount_box{
    width: 790px;
    padding-top: 200px;
    h3{
      text-align: center;
      font-size: 40px;
      color: #ffffff;
      font-weight: normal;
    }
    .import{
      margin-top: 50px;
      height: 50px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        width: 576px;
        height: 50px;
        background: #fff;
        margin: 0;
        border-radius: 25px 0 0 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-input{
          width: 92%;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          outline: medium;
          border: 0;
          background: none;
          .el-input__inner{
            border: 0 ;
          }
        }
      }
      span{
        margin: 0;
        color: #ffffff;
        background-image: linear-gradient(-90deg, 
        #1c5ae4 0%, 
        #3780f6 100%);
        font-size: 16px;
        height: 50px;
        flex: 1;
        line-height: 50px;
        text-align: center;
        border-radius: 0px 25px 25px 0px;
        cursor: pointer;
      }
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 100px;
      width: 520px;
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
          bottom: -44px;
          text-align: center;
          width: 100%;
          font-size: 14px;
          color: #6a81a9;
        }
      }
    }
  }
}
</style>
<style>
.BindingAccount .el-input__inner{
  border: 0 ;
}
</style>