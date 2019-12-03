<template>
  <div class="Login" :style="'min-height: '+boxMaxHeight+'px;'">
   
      <div class="box">
          <!-- <a@click="$router.push({name:'Home'})">asdas</a> -->
            <el-form ref="form" :model="form" :rules="rules" class="add-form" label-width="60px">
                <el-form-item label="账号" prop="name">
                    <el-input type="text" v-model.trim="form.name" placeholder="请输入账号" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model.trim="form.password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
            </el-form>

            <div class="btn">
                <template v-if="disabled">
                    <el-button type="primary" disabled>登录中...</el-button>
                </template>
                <template v-else>
                    <el-button type="primary" @click="handleSubmit">登录</el-button>
                </template>
            </div>

      </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
        boxMaxHeight:'',
        disabled:false,
        form:{
            name:"",
            password:''
        },
        rules:{
            name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        },
    };
  },
  watch: {
      
  },

  components: {},
  methods: {
    
    // 提交表单
    handleSubmit() {

        this.$refs.form.validate((valid) => {
            if (valid) {
                console.log(this.form);
                this.disabled = true;
                this.$router.push({
                    name: "aaa",
                    // query: { id: id, type: 1 }
                });
            } 
        })
    },
  

  },

  // 创建前状态
  beforeCreate() {
    
  },

  // 创建完毕状态
  created() {},

  // 挂载前状态
  beforeMount() {},

  // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight;

    

  },

  // 更新前状态
  beforeUpdate() {},

  // 更新完成状态
  updated() {},

  // 销毁前状态
  beforeDestroy() {},

  // 销毁完成状态
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.Login{
    background: url("../../assets/img/login_bg.png") center center no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 300px;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        .btn{
            display: flex;
            button{
                width: 100%;;
            }
        }
    }
}
</style>




    
