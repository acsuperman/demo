<script>
export default {
  name: "LayoutView.vue",
  methods: {
    onClick(now) {
      this.$router.push({
        path: "/layout/about",
        query: {
          query: now
        }
      }).catch((error) => {
        // 检查是否为 NavigationDuplicated 错误
        if (error.name === 'NavigationDuplicated') {
          // 忽略该错误
          return;
        }
        // 其他错误继续抛出
        throw error;
      });
    }
  }
}
</script>
<template>
  <div>
    <div style="height: 50%;width: 100%">
      <router-view></router-view>
    </div>

    <button @click="onClick('123')">123</button>
    <button @click="onClick('456')">456</button>
  </div>
</template>

<style scoped>

</style>