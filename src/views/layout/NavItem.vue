<template>
  <div class="NavItem" :style="'min-height: '+boxMaxHeight+'px;'">
    <div class="NavItem_box">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#20222a"
        :unique-opened="true"
        text-color="#fff"
        router
        active-text-color="#ffd04b">
        <el-submenu v-for="(item , index) in list" :key="index" :index="item.key">
          <template slot="title">
            <i :class="item.icon" class="icon_fz20 iconfont"></i>
            <span>{{item.name}}</span>
          </template>
          <!-- <div v-for="(itemName , indexName) in item.rows" :key="indexName">
            <div v-if="itemName.list">
              <el-submenu :index="itemName.path">
                <template slot="title">{{itemName.name}}</template>
                <el-menu-item v-for="(itemValue , indexValue) in itemName.list" :key="indexValue" :index="itemValue.key">{{itemValue.name}}</el-menu-item>
              </el-submenu>
            </div>
            <div v-else>
              <el-menu-item-group>
                <el-menu-item :index="itemName.path">
                  {{itemName.name}}
                </el-menu-item>
              </el-menu-item-group>
            </div>
          </div> -->

          <el-menu-item-group>
            <el-menu-item v-for="(itemName , indexName) in item.rows" :key="indexName" :index="itemName.path">
            {{itemName.name}}
            </el-menu-item>
          </el-menu-item-group>
          
        </el-submenu>
        
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
      list:[
        {
          name:'回收管理',
          key :"1",
          icon:"icon-huishouzhan",
          rows:[
            {
              name:"白名单管理",
              key :"1-1",
              path:"/WhiteList",
            },
            {
              name:"回收价规则设置",
              key :"1-2",
              path:"/RecycleSet",
            },
            {
              name:"回收订单",
              key :"1-3",
              path:"/RecycleOrder",
            },
            {
              name:"回收饰品管理",
              key :"1-4",
              path:"/RecycleAccessories",
            },
            {
              name:"打款管理",
              key :"1-5",
              path:"/Remit",
            },
            {
              name:"库存管理",
              key :"1-6",
              path:"/Inventory",
            },
            {
              name:"汇率",
              key :"1-7",
              path:"/ExchangeRate",
            },
          ]
        },
        {
          name:'用户管理',
          key :"2",
          icon:"icon-yonghuguanli",
          rows:[
            {
              name:"用户列表",
              key :"2-1",
              path:"/UserList",
            },
          ]
        },
        {
          name:'机器人管理',
          key :"3",
          icon:"icon-jiqiren",
          rows:[
            {
              name:"机器人steam帐号管理",
              key :"3-1",
              path:"/RobotUser",
            },
            {
              name:"库存客户端管理",
              key :"3-2",
              path:"/InventoryClient",
            },
            {
              name:"回收报价管理",
              key :"3-3",
              path:"/RecycleQuote",
            },
            {
              name:"确认交易报价",
              key :"3-4",
              path:"/AffirmDeal",
            },
          ]
        },
        {
          name:'权限',
          key :"4",
          icon:"icon-ic_opt_feature",
          rows:[
            {
              name:"角色管理",
              key :"4-1",
              path:"/RoleManagement",
            },
            {
              name:"用户管理",
              key :"4-2",
              path:"/UserManagement",
            },
          ]
        },
      ]
    }
  },
  created() {},
  methods: {
    handleOpen(){},
    handleClose(){},
  },
  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight;
  },

  
};
</script>

<style scoped lang="scss">
.NavItem{
  width: 180px;
  background: #20222a;
  position: relative;
  .NavItem_box{
    position: fixed;
    top: 0;
    width: 180px;
  }
}
</style>
<style>
.NavItem .el-submenu .el-menu-item{
  min-width: 100px;
}
.NavItem .el-menu{
  border-right: 0;
}
</style>
