<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    document.querySelector('.init-loading').remove()
  },
}
</script>
