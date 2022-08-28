<template>
  <el-menu
    default-active="2"
    class="app-menu"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    unique-opened>
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><ShoppingCartFull /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">商品列表</el-menu-item>
      <el-menu-item index="/product/product_classify">商品分类</el-menu-item>
      <el-menu-item index="/product/product_attr">商品规格</el-menu-item>
      <el-menu-item index="/product/product_reply">商品评论</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><ShoppingTrolley /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">订单列表</el-menu-item>
      <el-menu-item index="/order/offline">离线订单</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Promotion /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <!-- <el-menu-item index="4">
      <el-icon><Tools /></el-icon>
      <span>设置</span>
    </el-menu-item> -->
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Coin /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">角色</el-menu-item>
      <el-menu-item index="/permission/admin">管理员</el-menu-item>
      <el-menu-item index="/permission/rule">权限规则</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped>
.app-menu {
  border: none;
}
</style>
