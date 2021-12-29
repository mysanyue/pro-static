## webpack 打包模块的源码 执行顺序

1. 把所有模块的代码放入到函数中，用一个数组保存起来
2. 根据 require 时的传入数组索引，能知道需要哪一段代码
3. 从数组中，根据索引取出包含我们代码的函数
4. 执行该函数，传入一个对象 module.exports
5. 我们的代码，按照约定，正好是用 module.exports = xxxx 进行赋值
6. 调用函数结束后，module.exports 从原来的空对象，赋有值了
7. 最终 return module.exports 作为 require 函数的返回值

## webpack.config.js 文件配置
- entry 是一个对象，程序的入口
  - key: 随意写
  - value: 入口文件
- output 是一个对象，产出的资源
  - key: fiename
  - value: 生成的 build.js
- module 模块（对象）
  - loaders: []

## Webpack 工作模式

> Webpack 针对不同环境的三组预设配置

- production 模式下<br />
  启动内置优化插件，自动优化打包结果，打包速度偏慢<br />
- development 模式下<br />
  自动优化打包速度，添加一些调试过程中的辅助插件以便于更好的调试错误<br />
- none 模式<br />
  运行原始的打包，不做任何额外处理，这种模式下一般需要分析我们模块的打包结果时会用到<br />


## 让配置文件支持智能提示
```js
// webpack.config.js
import { Configuration } from 'webpack';

/**
* @type { Configuration }
*/
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  }
}

module.exports = config;
```
## 插件最常见的应用场景
- 实现自动在打包之前清除 dist 目录（上一次打包的结果）
- 自动生成应用所需要的 HTML 文件
- 根据不同环境为代码注入类似 API 地址这种可能变化的部分
- 拷贝不需要参与打包的资源文件到输出目录
- 压缩 webpack 打包完成后输出的文件
- 自动发布打包结果到服务器实现自动部署
