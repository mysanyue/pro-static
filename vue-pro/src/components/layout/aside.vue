<template>
  <aside class="aside-menu">
    <el-menu :default-active="activeMenu" class="menu-wrap" :collapse="isCollapse" router>
      <template v-for="(item, index) in menuList">
        <el-submenu v-if="item.children" :index="item.link" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="subItem.link">
            {{ subItem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.link" :key="item.link">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>
<script>
import { menuList } from './component/menuData'

export default {
  props: {
    isCollapse: Boolean,
  },
  data() {
    return {
      menuList,
    }
  },
  computed: {
    activeMenu() {
      const { meta, path } = this.$route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins.scss';
.aside-menu {
  .el-menu {
    border-right: none;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item {
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
      height: 100%;
      border-right: 2px solid $themeColor;
      transform: scaleY(0.0001);
      opacity: 0;
      transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
        -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      content: '';
    }
  }
  .el-menu-item.is-active {
    background-color: rgba(83, 46, 159, 0.1);
    color: $themeColor;
    &:after {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
      transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
        -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  .el-submenu.is-active .el-submenu__title {
    background-color: rgba(83, 46, 159, 0.1);
    color: $themeColor;
    i {
      color: $themeColor;
    }
  }
}
</style>
