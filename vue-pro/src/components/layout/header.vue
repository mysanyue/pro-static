<template>
  <header :class="{ [$style.layoutHeader]: true, [$style.headerCollapse]: isChangeMenu }">
    <section :class="$style.logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </section>
    <nav :class="$style.navbar">
      <div :class="$style.showMenu" class="tx-left">
        <span :class="$style.menuChange" @click="changeMenu">
          <i v-if="isChangeMenu" class="iconfont icon-caidandakai" />
          <i v-else class="iconfont icon-caidanzhedie" />
        </span>
      </div>
      <div :class="{ [$style.activeSearch]: isSearch, [$style.search]: true }">
        <span :class="$style.searchIcon">
          <i v-if="isSearch" class="el-icon-bottom" :class="$style.searchGoto" />
          <i v-else class="el-icon-search" :class="$style.searchGo" />
        </span>
        <el-input v-model="search" type="text" placeholder="搜索：组件、文档、工具" @focus="inputChange" @blur="inputChange" />
      </div>
      <div :class="$style.userinfo">
        <span @click="drawer = true">三月风</span>
      </div>
    </nav>
    <el-drawer title="作者说" :visible.sync="drawer" direction="rtl" append-to-body>
      <div :class="$style.drawerContent">
        <h2>{{ hello }}</h2>
        <p>{{ content }}</p>
      </div>
    </el-drawer>
  </header>
</template>

<script>
import { hello, content } from './data'
export default {
  props: {
    isCollapse: Boolean,
  },
  data() {
    this.hello = hello
    this.content = content

    return {
      search: '',
      isSearch: false,
      isChangeMenu: this.isCollapse,
      drawer: false,
    }
  },
  methods: {
    changeMenu() {
      this.isChangeMenu = !this.isChangeMenu
      this.$emit('update:isCollapse', this.isChangeMenu)
    },
    inputChange() {
      this.isSearch = !this.isSearch
    },
  },
}
</script>

<style lang="scss" module>
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 60px;
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  align-items: center;
  background: $themeColor;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .logo {
    height: 100%;
    width: 200px;
    transition: all 0.2s linear;
    text-align: center;
    img {
      width: 50px;
    }
  }
  .navbar {
    flex: 1;
    height: 32px;
    display: flex;
    align-items: center;
    .show-menu {
      width: 70px;
      height: 100%;
      .menu-change {
        width: 50px;
        line-height: 32px;
        display: block;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s linear;
        text-align: center;
        &:hover {
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.2);
        }
        i {
          font-size: 20px;
        }
      }
    }
    .search {
      flex: 1;
      position: relative;
      overflow: hidden;
      text-align: center;
      .search-icon {
        position: absolute;
        left: 0;
        width: 40px;
        line-height: 32px;
        z-index: 1;
        transition: all 0.2s linear;
        transform: rotate(0);
        .search-go {
          color: #fff;
        }
        .search-goto {
          color: #595959;
        }
      }
      :global(.el-input input) {
        padding: 4px 11px 4px 40px;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        border: none;
        line-height: 1.5;
        transition: all 0.2s linear;
      }
      :global(.el-input input::-webkit-input-placeholder) {
        color: #fff;
        font-size: 14px;
      }
    }
    .active-search {
      .search-icon {
        transform: rotate(90deg);
      }
      :global(.el-input input) {
        background-color: #f3f3f3;
        color: #595959;
      }
      :global(.el-input input::-webkit-input-placeholder) {
        color: #595959;
      }
    }
    .userinfo {
      height: 100%;
      padding: 0 30px 0 10px;
      span {
        display: inline-block;
        line-height: 32px;
        margin-left: 10px;
        vertical-align: middle;
        color: #fff;
        padding: 0 15px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.2);
        }
        :global(.el-dropdown) {
          line-height: 32px;
          color: #fff;
        }
        .username {
          display: block;
          padding: 0 15px;
        }
      }
    }
  }
}
.header-collapse {
  .logo {
    width: 64px;
  }
}
.drawer-content {
  padding: 0 20px;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
}
</style>
