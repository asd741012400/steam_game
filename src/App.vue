<template>
  <div id="app">
    <GeminiScrollbar class="my-scroll-bar" :forceGemini="true" :style="'height: '+boxMaxHeight+'px;'">
    <router-view/>
    </GeminiScrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxMaxHeight:"",
    
    }
  },
   // 挂载结束状态
  mounted() {
    this.boxMaxHeight = window.innerHeight;
  },

}
</script>
<style lang="scss">

</style>

<style>

/* 背景色 */
.gm-scrollbar.-vertical {
    background-color: #151c2b;
}

/* 滚动轨迹 */
.gm-scrollbar.-horizontal {
    background-color: transparent;
}

/* 滚动条颜色 */
.gm-scrollbar .thumb {
    background-color: #397be6;
}
.gm-scrollbar .thumb:hover {
    background-color: #397be6;
}
</style>
