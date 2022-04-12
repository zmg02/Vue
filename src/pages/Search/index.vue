<template>
  <div>
      <h1>search组件</h1>
      <p>params: {{keywords}}</p>
      <p>query: {{k}}</p>
      <TypeNav/>
  </div>
</template>

<script>
export default {
  props: ["keywords", "k"],
};
</script>

<style>
</style>