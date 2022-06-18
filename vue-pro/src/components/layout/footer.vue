<template>
  <footer :class="$style.footer">
    <el-row>
      <el-col :span="12">Copyright ©2021-{{ date }} myzony@qq.com, version 1.0.0</el-col>
      <el-col :span="12" />
    </el-row>
  </footer>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      date: moment(new Date()).format('YYYY'),
    }
  },
}
</script>

<style lang="scss" module>
.footer {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #efe3e5;
  background-color: #fff;
  padding: 0 24px;
}
</style>
