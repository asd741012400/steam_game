<template>
  <div class="OrderList" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="orderlist_box">

      <div class="condition">
        <h3>{{$t('order.f1')}}</h3>
        <div class="search">
          <ul>
            <li>
              <el-select v-model="value" placeholder="">
                <el-option key :label="$t('order.f2')" value></el-option>
                <el-option
                  v-for="item in options"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </li>
            <li>
              <el-select v-model="value" placeholder="">
                <el-option key :label="$t('order.f3')" value></el-option>
                <el-option
                  v-for="item in options"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </li>
            <li>
              <span>{{$t('order.f8')}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="list">
        <div class="list_header">
          <p class="accessories">{{$t('order.f4')}}</p>
          <p class="price">{{$t('order.f5')}}</p>
          <p class="timer">{{$t('order.f6')}}</p>
          <p class="status">{{$t('order.f7')}}</p>
        </div>
        <div class="list_box">
          <div class="lists">
            <div class="accessories">
              <div>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
                <i><img src="@/assets/img/list/product_bg.png" alt=""></i>
              </div>
              <span>等12件</span>
            </div>
            <div class="price">￥12312783123</div>
            <div class="timer">2019-11-09 21:18</div>
            <div class="status">
              <p>已完成</p>
              <p>收款中</p>
              <p class="el-cursor"><a>待提交收款信息</a><b class="el-icon-arrow-right"></b></p>
              <p class="el-cursor"><a>待确认报价</a><b class="el-icon-arrow-right"></b></p>
              <p>已取消</p>
            </div>
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
  name: "OrderList",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      value:'',
      options:[1,2,3,5],
      list:[1,2,3,4,5,6,7,8,9,10],
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
.OrderList{
  width: 100%;
  background: url('../../assets/img/public/bg4.png') top center/100% #101520 no-repeat;
  .orderlist_box{
    padding-top: 100px;
    width: 1200px;
    .condition{
      background: rgba($color: #151c2b, $alpha: 0.6);
      padding: 0 30px;
      h3{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        font-weight: normal;
        border-bottom: 1px solid rgba($color: #16274a, $alpha: 0.6)
      }
      ul{
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        li{
          margin: 0;
          margin-right: 20px;
          span{
            width: 100px;
            height: 32px;
            line-height: 32px;
            background-image: linear-gradient(-90deg, 
              #1c5ae4 0%, 
              #3780f6 100%);
            border-radius: 20px;
            text-align: center;
            display: block;
            font-size: 14px;
            color: #ffffff;
            cursor: pointer;
          }
        }
      }
    }
    .list{
      margin-top: 20px;
      width: 1200px;
	    background-color: #151c2b;
      .list_header{
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        p{
          color: #bfcde3;
          font-size: 14px;
          margin: 0;
          flex: 1;
        }
        p.accessories{
          width: 480px;
          flex: none;
        }
      }
      .list_box{
        .lists{
          height: 80px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          >div{
            margin: 0;
            font-size: 14px;
            color: #bfcde3;
            flex: 1;
          }
          .accessories{
            display: flex;
            width: 480px;
            align-items: center;
            flex: none;
            div{
              max-width: 350px;
              height: 48px;
              overflow: hidden;
              margin: 0;
              i{
                width: 48px;
                float: left;
                margin-right: 10px;
              }
            }
            span{
              align-self: flex-end;
              margin: 0;
              font-size: 14px;
              color: #bfcde3;
            }
          }

        }

      }
    }

    .pages{
      display: flex;
      align-items: center;
      margin-top: 50px;
    }
  }
}
</style>
<style>
.OrderList .el-select .el-input input{
  border: 1px solid #16274a;
  background: none;
  color: #fff;
}
.OrderList .el-select .el-input .el-input__suffix .el-select__caret{
  color: #2260e7;
}
.el-select-dropdown{
  background-color: #151c2b;
	border: solid 1px #16274a;
}
.el-popper[x-placement^=bottom] .popper__arrow::after{
  border-bottom-color:#151c2b;
}
.el-popper[x-placement^=bottom] .popper__arrow{
  border-bottom-color:#16274a;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
  background-color:#2260e7;
}
.el-select-dropdown .el-scrollbar ul li{
  border-bottom: 1px solid #16274a;
}
.el-select-dropdown .el-scrollbar ul li:last-child{
  border-bottom:0;
}
.el-select-dropdown .el-scrollbar ul li span{
  color: #fff;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
  background:none;
  border: 1px solid #213b71;
  color: #385694;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background:#276aec;
}
</style>