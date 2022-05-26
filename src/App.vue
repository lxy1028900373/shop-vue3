<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    hanldeLogin() {
      console.log("click login");
      this.$router.push({ path: "/login" });
    },
    handleHome() {
      console.log("click home");
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style>
@import '//at.alicdn.com/t/font_2599341_lcxwqgmy1vi.css';
@import './assets/css/common.less';
#app {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #f6f6f6;
}
</style>
