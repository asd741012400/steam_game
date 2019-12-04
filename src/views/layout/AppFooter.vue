<template>
  <div class="footer">
    <div class="footer_box">
      <div class="footer_logo">LOGO</div>
      <div class="footer_text">
        <ul>
          <li>
            {{$t('footer.f1')}}
          </li>
          <li><span>|</span></li>
          <li>
            {{$t('footer.f2')}}
          </li>
          <li><span>|</span></li>
          <li>
            {{$t('footer.f3')}}
          </li>
        </ul>
        <p>{{$t('footer.f4')}}</p>
      </div>
      <em></em>
      <div class="footer_img">
        <p>{{$t('footer.f5')}}</p>
        <ul>
          <li>
            <img src="@/assets/img/public/icon_img3.png" alt="">
          </li>
          <li>
            <img src="@/assets/img/public/icon_img1.png" alt="">
          </li>
          <li>
            <img src="@/assets/img/public/icon_img2.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  components: {
  },
  data() {
    return {
     
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
.footer{
  height: 90px;
  background: #151c2b;
  width: 100%;
  overflow: hidden;
  .footer_box{
    width: 720px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    .footer_logo{
      font-size: 30px;
      color: #fff;
      margin: 0;
      align-self:flex-start
    }
    .footer_text{
      padding-left: 40px;
      margin: 0;
      ul{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #4c6083;
        li{
          margin: 0;
          span{
            display: block;
            margin: 0 5px;
          }
        }
      }
      p{
        font-size: 12px;
        color: #4c6083;
        padding-top: 20px;
      }
    }
    em{
      width: 1px;
      height: 50px;
      background-color: #242b38;
      margin: 0 20px;
    }
    .footer_img{
      ul{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #4c6083;
        li{
          width: 22px;
	        height: 22px;
          margin: 0;
        }
      }
      p{
        font-size: 14px;
        color: #4c6083;
        padding-bottom: 16px;
      }
    }
  }
}
</style>>
