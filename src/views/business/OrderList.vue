<template>
  <div class="OrderList" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="orderlist_box">
      <div class="condition">
        <h3>{{$t('order.f1')}}</h3>
        <div>
           <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      value:'',
      options:[1,2,3,5]
    }
  },
  created() {},
  methods: {
      changeLanguage () {
        if (this.$i18n.locale == 'japanese') {
            this.$i18n.locale = 'chinese'
        } else {
            this.$i18n.locale = 'japanese'
        }
    }
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight-90;
  },

  
};
</script>

<style scoped lang="scss">
.OrderList{
  width: 100%;
  background: url('../../assets/img/public/bg4.png') top center/100% #101520 no-repeat;
  .orderlist_box{
    padding-top: 100px;
    width: 1200px;
  }
}
</style>
