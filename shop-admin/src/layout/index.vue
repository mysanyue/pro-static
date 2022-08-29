<template>
  <section class="common-layout">
    <el-container>
      <AppAside />
      <el-container>
        <app-header />
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Copyright ©2014-{{ new Date().getFullYear() }} myzony@qq.com, version 1.0.0</el-footer>
      </el-container>
    </el-container>
  </section>
</template>

<script lang="ts" setup>
import AppAside from './componets/appAside.vue'
import AppHeader from './componets/appHeader.vue'
</script>

<style lang="scss" scoped>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
}
.el-container {
  height: 100vh;
}
</style>
