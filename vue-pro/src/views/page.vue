<template>
  <div :class="$style.homeContainer">
    <h1>封装的分页组件</h1>
    <tx-page :params="params" :total="total" @change="fetchData" />
  </div>
</template>

<script>
import txPage from '@/components/pagination'
export default {
  components: { txPage },
  data() {
    return {
      total: 0,
      params: { pageSize: 10, pageNo: 1 },
    }
  },
  methods: {
    fetchData() {},
  },
}
</script>

<style lang="scss" module>
.home-container {
  @include container;
  h1 {
    font-size: 18px;
  }
}
</style>
