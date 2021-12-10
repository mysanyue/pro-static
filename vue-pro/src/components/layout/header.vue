<template>
  <header class="tx-c" :class="{ [$style.layoutHeader]: true, [$style.headerCollapse]: isChangeMenu }">
    <section :class="$style.logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </section>
    <nav :class="$style.navbar">
      <div :class="$style.showMenu" class="tx-left">
        <span :class="$style.menuChange" @click="changeMenu">
          <i v-if="isChangeMenu" class="iconfont icon-caidandakai"></i>
          <i v-else class="iconfont icon-caidanzhedie"></i>
        </span>
      </div>
      <div :class="{ [$style.activeSearch]: isSearch, [$style.search]: true }">
        <span :class="$style.searchIcon">
          <i v-if="isSearch" class="el-icon-bottom" :class="$style.searchGoto"></i>
          <i v-else class="el-icon-search" :class="$style.searchGo"></i>
        </span>
        <el-input v-model="search" type="text" placeholder="搜索：组件、文档、工具" @focus="inputChange" @blur="inputChange" />
      </div>
      <div :class="$style.userinfo">
        <top-menu />
      </div>
    </nav>
  </header>
</template>

<script>
import TopMenu from './component/topMenu'
export default {
  props: {
    isCollapse: Boolean,
  },
  data() {
    return {
      search: '',
      isSearch: false,
      isChangeMenu: this.isCollapse,
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
  components: {
    TopMenu,
  },
}
</script>

<style lang="scss" module>
@import '@/assets/scss/mixins.scss';
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 60px;
  @include box-shadow;
  align-items: center;
  background: $themeColor;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 200;
  .logo {
    height: 100%;
    width: 200px;
    @include transition;
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
        @include transition;
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
      .search-icon {
        position: absolute;
        left: 0;
        width: 40px;
        line-height: 32px;
        z-index: 1;
        @include transition;
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
        @include transition;
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
    }
  }
}
.header-collapse {
  .logo {
    width: 64px;
  }
}
</style>
