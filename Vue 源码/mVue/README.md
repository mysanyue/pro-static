## mVue 手写简化版Vue

- 功能
  - 负责接收初始化的参数(选项)
  - 负责把 `data` 中的属性注入到 `Vue` 实例，转换成 `getter/setter`
  - 负责调用 `Observer` 监听 `data` 中所有的属性变化
  - 负责调用 `compiler` 解析指令/差值表达式

- 结构
  - $options
  - $el
  - $data
  - _proxyData()
