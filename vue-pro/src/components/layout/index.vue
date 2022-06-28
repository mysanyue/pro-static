<template>
  <section :class="{ [$style.layout]: true, [$style.layoutCollapse]: isCollapse }">
    <LayoutHeader :isCollapse.sync="isCollapse" />
    <LayoutAside :class="$style.layoutAside" :isCollapse="isCollapse" />
    <section :class="$style.layoutBody">
      <section :class="$style.layoutContent">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </section>
      <LayoutFooter />
    </section>
  </section>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Aside from './aside.vue'
export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: false,
    }
  },
  components: {
    LayoutHeader: Header,
    LayoutFooter: Footer,
    LayoutAside: Aside,
  },
}
</script>

<style lang="scss" module>
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
    margin: 60px 0 0 201px;
  }
  .layout-content {
    padding: 15px;
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
}
</style>
