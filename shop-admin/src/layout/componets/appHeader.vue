<template>
  <el-header>
    <div class="header-item">
      <toggleSidebar />
      <breadcrumb class="h-breadcurmb" />
    </div>
    <div class="header-item">
      <el-input v-model="searchKey" placeholder="请输入内容" :prefix-icon="Search" class="input-search" />
      <el-icon class="icon-item" @click="toggleFullScreen" :size="18"><FullScreen /></el-icon>
      <el-icon class="icon-item" :size="18"><Bell /></el-icon>
      <el-dropdown class="dropdown" trigger="click">
        <span class="el-dropdown-link">
          三月风
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import breadcrumb from './breadcrumb.vue'
import toggleSidebar from './toggleSidebar.vue'

const searchKey = ref('')

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen && document.exitFullscreen()
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 20px;
  .h-breadcurmb {
    margin-left: 20px;
  }
  .header-item {
    display: flex;
    align-items: center;
  }
  .input-search {
    margin-right: 15px;
  }
  .icon-item {
    margin: 0 15px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  .dropdown {
    margin-left: 15px;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
