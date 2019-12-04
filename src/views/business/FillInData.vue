<template>
  <div class="FillInData">
    
    <div class="fillIndata_box">
      <h3>{{$t('recycle.f1')}}</h3>
      <div class="content">
        <div class="header">
          <p>{{$t('recycle.f2')}}</p>
          <span>￥23,128,313</span>
        </div>
        <div class="content_box">
          <div class="way">
            <span class="text">{{$t('recycle.f3')}}:</span>
            <ul>
              <li>
                <div :class="tableIndex == 1? 'active' : ''" @click="tableChange(1)">
                  <i><img src="@/assets/img/recycle/bank_card.png" alt=""></i>
                  <span>{{$t('recycle.f5')}}</span>
                </div>
                <div :class="tableIndex == 2? 'active' : ''" @click="tableChange(2)">
                  <i><img src="@/assets/img/recycle/paypal.png" alt=""></i>
                  <span>{{$t('recycle.f6')}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="account" v-if="tableIndex == 1">
            <span class="text">{{$t('recycle.f4')}}:</span>
            <ul>
              <li><el-input v-model="input" clearable :placeholder="$t('recycle.f11')"></el-input></li>
              <li>
                <el-select v-model="value" :placeholder="$t('recycle.f12')">
                  <!-- <el-option key :label="$t('recycle.f2')" value></el-option> -->
                  <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </li>
              <li><el-input v-model="input" clearable :placeholder="$t('recycle.f13')"></el-input></li>
              <li><el-input v-model="input" clearable :placeholder="$t('recycle.f14')"></el-input></li>
              <li><el-input v-model="input" clearable :placeholder="$t('recycle.f15')"></el-input></li>
            </ul>
          </div>
          <div class="account" v-else>
            <span class="text">{{$t('recycle.f4')}}:</span>
            <ul>
              <li><el-input v-model="input" clearable :placeholder="$t('recycle.f7')"></el-input></li>
            </ul>
          </div>

          <p class="note">{{$t('recycle.f8')}}</p>

          <div class="btns">
            <span>{{$t('recycle.f9')}}</span>
            <p>
              <i><img src="@/assets/img/recycle/timer.png" alt=""></i>
              <b>{{$t('recycle.f10')}}</b>
            </p>
          </div>

        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "FillInData",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      input:"",
      value:'',
      options:[1,2,3,5,12,3423,4345,346,657,567,678,6789,456],
      tableIndex:1
    }
  },
  created() {},
  methods: {
    tableChange(index){
      console.log(index);
      this.tableIndex = index
    }
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight-90;
  },

  
};
</script>

<style scoped lang="scss">
.FillInData{
  width: 100%;
  background: url('../../assets/img/public/bg5.png') top center/100% #101520 no-repeat;
  .fillIndata_box{
    width: 855px;
    padding-top: 140px;
    margin-bottom: 160px;
    h3{
      text-align: center;
      font-size: 32px;
      color: #ffffff;
      font-weight: normal;
    }
    .content{
      margin-top: 80px;
      padding: 0 50px 50px;
      background: rgba($color: #151c2b, $alpha: 0.6);
      color: #bfcde3;
      .header{
        height: 100px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba($color: #16274a, $alpha: 0.6);
        p{
          flex: 1;
          font-size: 16px;
        }
        span{
          font-size: 24px;
          color: #d29208;
        }
      }
      .content_box{
        padding-top: 30px;
        >div{
          display: flex;
          .text{
            width: 120px;
            text-align: right;
          }
          ul{
            flex: 1;
            padding-left: 20px;
            display: flex;
            flex-wrap: wrap;
            li{
              margin: 0;
            }
          }
        }
        .way{
          ul{
            display: flex;
            justify-content: space-between;
            li{
              display: flex;
              align-items: center;
              width: 48%;
              justify-content: space-between;
              div{
                display: flex;
                width: 48%;
                margin: 0;
                justify-content: center;
                align-items: center;
                border: solid 1px #16274a;
                border-radius: 4px;
                height: 48px;
                color: #ffffff;
                cursor: pointer;
                i{
                  width: 30px;
                  margin: 0;
                  overflow: hidden;
                  img{
                    float: left;
                  }
                }
                span{
                  margin: 0;
                  font-size: 14px;
                  margin-left: 10px;
                }
              }
              .active{
                border: solid 1px #2260e7;
              }
            }
          }
        }
        .account{
          margin-top: 20px;
          ul{
            height: 200px;
            justify-content: space-between;
            li{
              width: 48%;
              margin-bottom: 20px;
            }
          }
        }
      }
      .note{
        padding-left: 140px;
        font-size: 14px;
        color: #575d69;
      }
      .btns{
        margin-top: 50px;
        padding-left: 140px;
        display: flex;
        align-items: center;
        span{
          padding: 0 24px;
          font-size: 14px;
          color: #fff;
          background-color: #397be6;
          border-radius: 22px;
          line-height: 44px;
          cursor: pointer;
        }
        p{
          display: flex;
          flex: 1;
          font-size: 14px;
          color: #bfcde3;
          justify-content: flex-end;
          align-items: center;
          i{
            margin: 0;
            overflow: hidden;
            padding-right: 5px;
            img{
              float: left;
            }
          }
          b{
            font-weight: normal;
            margin: 0;
          }
        }
      }
    }
    
  }
}
</style>
<style>
.FillInData .el-input__inner{
  border: 0 ;
  background: none;
  border: solid 1px #16274a;
  width: 100%;
  color: #fff;
  height: 48px;
}
.FillInData .el-select{
  width: 100%;
}

.FillInData .el-select .el-input .el-input__suffix .el-select__caret{
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