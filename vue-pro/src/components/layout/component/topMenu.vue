<template>
  <ul class="tx-right">
    <li :class="$style.infoItem">
      <el-badge :value="12" class="item">
        <i class="el-icon-bell" />
      </el-badge>
    </li>
    <li :class="$style.infoItem">
      <i class="el-icon-setting" />
    </li>
    <li :class="[$style.infoItem, $style.noPadding]">
      <el-dropdown placement="bottom" trigger="click" @command="dropdownHandler">
        <span :class="$style.username">{{ userName }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">用户信息</el-dropdown-item>
          <el-dropdown-item divided command="unLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
  </ul>
</template>

<script>
import session from '@/utils/sessionService'
import local from '@/utils/localService'

export default {
  computed: {
    userName() {
      return this.$store.getters.userInfo && this.$store.getters.userInfo.userName
    },
  },
  methods: {
    dropdownHandler(target) {
      switch (target) {
        case 'userinfo':
          this.$router.push('/upload/userInfo')
          break
        case 'unLogin':
          session.removeAll()
          local.removeAll()
          this.$router.go(0)
          break
      }
    },
  },
}
</script>

<style lang="scss" module>
@import '@/assets/scss/mixins.scss';
.info-item {
  display: inline-block;
  line-height: 32px;
  margin-left: 10px;
  vertical-align: middle;
  color: #fff;
  padding: 0 15px;
  cursor: pointer;
  @include transition;
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
.no-padding {
  padding: 0;
}
</style>
