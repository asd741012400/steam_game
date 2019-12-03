<template>
  <div class="aaa" :style="'min-height: '+boxMaxHeight+'px;'">
      asdasdasd
      <span @click="changeLanguage">12312312</span>
    <p>{{$t('dome.text')}}</p>
  </div>
</template>

<script>
export default {
  name: "aaa",
  components: {
  },
  data() {
    return {
      boxMaxHeight:"",
    
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

</style>
