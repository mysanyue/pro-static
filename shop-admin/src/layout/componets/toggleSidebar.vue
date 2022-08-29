<template>
  <el-icon @click="handleCollapse" :size="20">
    <Expand v-show="!isCollapse" />
    <Fold v-show="isCollapse" />
  </el-icon>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => {
  return !store.state.isCollapse
})

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
