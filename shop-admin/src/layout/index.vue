<template>
  <section class="common-layout">
    <el-container>
      <el-aside>
        <app-menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Copyright ©2014-{{ new Date().getFullYear() }} myzony@qq.com, version 1.0.0</el-footer>
      </el-container>
    </el-container>
  </section>
</template>

<script lang="ts" setup>
import AppMenu from './componets/appMenu.vue'
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  width: 200px;
  background-color: #304156;
}
.el-main {
  background-color: #e9eef3;
}
.el-container {
  height: 100vh;
}
</style>
