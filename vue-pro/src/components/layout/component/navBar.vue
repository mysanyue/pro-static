<template>
  <div>
    <el-tabs
      v-model="activeMenu"
      @tab-remove="removeTab"
      @tab-click="tabClick"
      :class="{ [$style.navTabs]: true, [$style.collapse]: isCollapse }"
    >
      <el-tab-pane v-for="(item, index) in listData" :closable="index !== 0" :key="item.name" :label="item.title" :name="item.name" />
    </el-tabs>
    <el-dropdown :class="$style.operation">
      <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right" /> </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="operation()">关闭其他</el-dropdown-item>
        <el-dropdown-item @click.native="operation('all')">关闭全部</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: { type: Boolean, required: true },
  },
  computed: {
    listData() {
      return this.$store.getters.getMenuList
    },
    activeMenu: {
      get: function () {
        return this.$store.getters.getActiveMenuName
      },
      set: function () {},
    },
  },
  methods: {
    tabClick(ev) {
      this.$store.commit('activeMenu', ev.name)
    },
    removeTab(name) {
      this.$store.commit('delMenuList', name)
    },
    operation(type) {
      if (type === 'all') {
        this.$store.commit('resetState')
      } else {
        this.$store.commit('delAllMenuList', this.activeMenu)
      }
    },
  },
}
</script>

<style lang="scss" module>
.nav-tabs {
  position: fixed;
  top: 60px;
  left: 201px;
  right: 80px;
  background: #fff;
  z-index: 181;
  @include transition;
  :global(.el-tabs__header) {
    margin: 0;
    padding: 0 10px;
    height: 38px;
    border-bottom: 2px solid #e4e7ed;
  }
  :global(.el-icon-close) {
    opacity: 0;
  }
  :global(.el-tabs__nav-wrap:after) {
    height: 0;
  }
  :global(.el-tabs__item.is-active, .el-icon-close) {
    opacity: 1;
  }
  :global(.el-tabs__item:hover, .el-icon-close) {
    opacity: 1;
  }
}
.collapse {
  left: 60px;
}
.operation {
  position: fixed;
  width: 80px;
  top: 60px;
  right: 0px;
  background: #fff;
  z-index: 181;
  height: 38px;
  line-height: 38px;
  border-bottom: 2px solid #e4e7ed;
  border-left: 1px solid #e4e7ed;
  text-align: center;
  cursor: pointer;
  i {
    margin-left: 4px;
  }
  :global(.el-dropdown-link) {
    display: inline-block;
    width: 80px;
  }
}
</style>
