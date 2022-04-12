<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer/>
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
