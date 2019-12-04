<template>
  <div class="InventoryList" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="inventorylist_box">
      <div class="tab">
        <span>CSGO</span>
        <span>DOTA</span>
      </div>
      <div class="header">
        <ul>
          <li>{{$t('inventorylist.f1')}}</li>
          <li>{{$t('inventorylist.f2')}}</li>
        </ul>
        <div class="header_box">
          <div class="sort">
            <span>{{$t('inventorylist.f3')}}</span>
            <span>{{$t('inventorylist.f4')}}</span>
          </div>
          <div class="check_all">
            <i><img src="@/assets/img/list/pitch_on_b.png" alt=""></i>
            <i><img src="@/assets/img/list/pitch_on_a.png" alt=""></i>
            <span>{{$t('inventorylist.f5')}}</span>
          </div>
          <div class="number">{{$t('inventorylist.f6')}}:{{number}}/{{list.length}}</div>
          <div class="btns">
            <span>{{$t('inventorylist.f6')}}</span>
            <a>{{$t('inventorylist.f7')}}(¥ 2345.00)</a>
          </div>
        </div>
      </div>


      <div class="pages" v-if="list.length > 0">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="pages.pageSize"
          layout="prev, pager, next"
          :total="list.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryList",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      number:0,
      list:[1,2,3,4,5,6,7,8,9],
      pages:{
        pagesIndex:1,
        pageSize:8
      }
    }
  },
  created() {},
  methods: {

    handleCurrentChange(val){
      this.pages.pagesIndex = val;
      console.log(this.pages);
    }
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight-90;
  },

  
};
</script>

<style scoped lang="scss">
.InventoryList{
  width: 100%;
  background: url('../../assets/img/public/bg4.png') top center/100% #101520 no-repeat;
  .inventorylist_box{
    padding-top: 100px;
    width: 1200px;


    .pages{
      display: flex;
      align-items: center;
      margin: 50px 0;
    }
  }
}
</style>
<style>

.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
  background:none;
  border: 1px solid #213b71;
  color: #385694;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background:#276aec;
}
</style>