<template>
  <div id="app">
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 利用路由元信息，是否显示 -->
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header, Footer
  },
  mounted() {
    //获取三级列表数据
    this.$store.dispatch("home/getCategoryList");
  },
};
</script>

<style>
</style>
