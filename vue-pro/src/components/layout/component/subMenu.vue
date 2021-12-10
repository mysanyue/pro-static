<template v-for="item in subMenuList">
  <el-submenu :index="item.link" :key="item.link">
    <template slot="title">
      <i class="el-icon-location" />
      <span slot="title">{{ item.name }}</span>
    </template>
    <el-menu-item v-for="subItem in item.list" :key="subItem.link" :index="subItem.link">
      {{ subItem.name }}
    </el-menu-item>
  </el-submenu>
</template>
<script>
export default {
  props: {
    subMenuList: Array,
  },
}
</script>
