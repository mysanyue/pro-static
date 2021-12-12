<template>
  <section :class="{ [$style.layout]: true, [$style.layoutCollapse]: isCollapse }">
    <layout-header :isCollapse.sync="isCollapse" />
    <layout-aside :class="$style.layoutAside" :isCollapse="isCollapse" />
    <section :class="$style.layoutBody">
      <nav-bar :isCollapse="isCollapse" :class="$style.layoutNavbar" />
      <section :class="$style.layoutContent">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="keepAlive">
            <router-view :key="$route.fullPath" />
          </keep-alive>
        </transition>
      </section>
      <layout-footer />
    </section>
  </section>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Aside from './aside.vue'
import NavBar from './component/navBar.vue'
export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: false,
    }
  },
  computed: {
    keepAlive() {
      return this.$store.getters.getKeepAlive
    },
  },
  components: {
    'layout-header': Header,
    'layout-footer': Footer,
    'layout-aside': Aside,
    NavBar,
  },
}
</script>

<style lang="scss" module>
@import '@/assets/scss/mixins.scss';
.layout {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow-x: hidden;
  .layout-aside {
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #ffff;
    border-right: solid 1px #e6e6e6;
    @include transition;
  }
  .layout-body {
    overflow: hidden;
    margin: 100px 0 0 201px;
  }
  .layout-content {
    padding: 15px 24px;
    min-height: calc(100vh - 171px);
  }
}
.layout-collapse {
  .layout-aside {
    width: 64px;
  }
  .layout-body {
    margin-left: 65px;
  }
  .layout-navbar {
    left: 65px;
  }
}
</style>
