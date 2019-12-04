<template>
  <div class="header">
    <div class="header_box">
      <div class="logo">
        <span>LOGO</span>
      </div>
      <ul>
        <li class="active">
          <span>{{$t('header.f1')}}</span>
          <em></em>
        </li>
        <li>
          <span>{{$t('header.f2')}}</span>
          <em></em>
        </li>
      </ul>
      <div class="user" v-if="login">
        <i><img src="@/assets/img/public/stram_icon.png" alt=""></i>
        <span>咩咩大魔王</span>
      </div>
      <div class="btn" v-else>
        <i><img src="@/assets/img/public/stram_icon.png" alt=""></i>
        <span>{{$t('header.f3')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {
  },
  data() {
    return {
      login:false
    }
  },
  created() {},
  methods: {
  },
  // 挂载结束状态
  mounted() {
  },

  
};
</script>

<style scoped lang="scss">
.header{
  height: 60px;
  background: #151c2b;
  width: 100%;
  position: fixed;
  top: 0;
  .header_box{
    width: 1200px;
    display: flex;
    align-items: center;
    height: 60px;
    .logo{
      font-size: 30px;
      color: #fff;
      margin: 0;
      flex: 1;
    }
    ul{
      display: flex;
      color: #ffffff;
      font-size: 16px;
      justify-content: space-between;
      li{
        text-align: center;
        line-height: 60px;
        position: relative;
        cursor: pointer;
        margin: 0;
        flex: 1;
        margin-right: 10px;
        span{
          width: 100%;
          height: 100%;
          display: block;
          padding: 0 10px;
        }
        em{
          position: absolute;
          bottom: 0;
          height: 2px;
	        background-color: #2260e7;
          width: 100%;
          left: 0;
          display: none;
          padding: 0 10px;
        }
        &.active{
          span{
           background-image: linear-gradient(rgba(#151c2b,0.3) , rgba(#2461e7,0.3));
          }
          em{
            display: block;
          }
        }
      }
    }
    .btn{
      height: 30px;
      background-image: linear-gradient(-90deg, 
        #1c5ae4 0%, 
        #3780f6 100%);
      border-radius: 15px;
      margin-left: 66px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 14px;
      cursor: pointer;
      i{
        width: 16px;
        height: 16px;
        margin: 0;
      }
      span{
        margin: 0;
        color: #ffffff;
        font-size: 14px;
        padding-left: 10px;
      }
    }
    .user{
      margin-left: 76px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i{
        width: 30px;
        height: 30px;
        margin: 0;
        overflow: hidden;
        border-radius: 50%;
      }
      span{
        margin: 0;
        color: #ffffff;
        font-size: 14px;
        padding-left: 10px;
      }
    }
  }
}
</style>>
