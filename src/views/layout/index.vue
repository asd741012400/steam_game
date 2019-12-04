<template>
    
    <el-container>

            <app-header></app-header>
            <el-container class="elContainer" :style="'height:'+minHeight+'px' ">
                <router-view></router-view>
                <!-- <app-header></app-header>
                <div :style="'min-height: '+minHeight+'px;width: 100%;background-color: #f8f8f8'">
                    <div class="contentRoute">
                        <div class="mainBackground">
                            <router-view></router-view>
                            <div class="fixed w50px h50px lh50px text-center radius1 pointer myBackTop" v-show="showBackTop" style="bottom: 66px; right: 40px; z-index:9999;" @click="backTop">
                                <i class="iconfont iconshouqi f24px"></i>
                            </div>
                        </div>
                    </div>
                </div> -->
            </el-container> 
            <app-footer></app-footer>

    </el-container>
   
</template>

<script>
  

    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'
    export default {
        name: "index",
        components: {
            AppHeader,
            AppFooter,
        },
        data() {
            return{
                minHeight:''
            }
        },
        methods: {
            backTop(){
                window.scrollTo(0,0)
            }
        },
        mounted(){

            let _this = this
            

            // window.onscroll = function (e) {

            //     if($(window).scrollTop() >= 300){
            //         _this.showBackTop = true
            //     }else{
            //         _this.showBackTop = false
            //     }
            // }
        },

        updated(){
           
        }
    }
</script>

    
<style scoped lang="scss">
.el-container{
    .my-scroll-bar{
    }
    flex-direction: column;
    .elContainer{
        width: 100%;
    }
}


</style>