<template>
  <div :class="$style.codeCollapse">
    <div :class="$style.exampleBox">
      <slot />
    </div>
    <AnimateTransition>
      <div :class="$style.codeBox" v-show="isShow">
        <slot name="code" />
      </div>
    </AnimateTransition>
    <div :class="$style.previewControl" @click="handClick">
      <i :class="isShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" />
      <span>{{ isShow ? '隐藏代码' : '显示代码' }}</span>
    </div>
  </div>
</template>

<script>
import AnimateTransition from './animate'

export default {
  components: { AnimateTransition },
  name: 'CodeCollapse',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    handClick() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style lang="scss" module>
.code-collapse {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-bottom: 24px;
  .example-box {
    padding: 24px;
  }
  .code-box {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 100%;
    :global(.desc) {
      margin: 10px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      background-color: #fff;
    }
    :global(.markdown-preview) {
      background-color: #fafafa;
      padding: 0 10px !important;
    }
  }
  .preview-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
    }
    span {
      position: absolute;
      transform: translateX(10px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      opacity: 0;
    }
  }
}
.code-collapse:hover {
  box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
  .preview-control i {
    transform: translateX(-40px);
  }
  .preview-control span {
    opacity: 1;
    transform: translateX(-30px);
  }
}
</style>
