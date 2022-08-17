<template>
  <section class="home"></section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  // setup 是组合式 API 的入口函数
  setup() {
    const count = ref(0)
    function updateCount() {
      count.value++
    }
  },
})
</script>
