# Vue 3 + TypeScript + Vite

## 使用 Vite 创建项目

> 参考 [Vite 官方指南](https://vitejs.cn/)。

```shell
npm init vite@latest

√ Project name: ... lagou-shop-admin
√ Select a framework: » vue
√ Select a variant: » vue-ts

Scaffolding project in C:\Users\lpz\Projects\lagou-shop-admin...

Done. Now run:

cd lagou-shop-admin
npm install
npm run dev
```

## 初始目录结构说明

```shell
.
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

在安装了 Vite 的项目中，可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：

```json
{
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 为生产环境构建产物
    "serve": "vite preview" // 本地预览生产构建产物
  }
}
```

可以指定额外的命令行选项，如 --port 或 --https。运行 npx vite --help 获得完整的命令行选项列表。

## 代码规范和 ESLint

1. 安装 ESLint 到项目中

```shell
npm install eslint --save-dev
```

2. 初始化 ESLint 配置

```shell
npx eslint --init

? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

 ? Which framework does your project use? ...
  React
> Vue.js
  None of these

? Does your project use TypeScript? » No / Yes

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node

? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

? Which style guide do you want to follow? ...
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

 ? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON

 Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest
? Would you like to install them now with npm?

+ eslint-plugin-import@2.23.4
+ eslint-plugin-node@11.1.0
+ eslint-config-standard@16.0.3
+ eslint-plugin-vue@7.11.1
+ eslint@7.29.0
+ @typescript-eslint/parser@4.27.0
+ @typescript-eslint/eslint-plugin@4.27.0
+ eslint-plugin-promise@5.1.0
```

3. ESLint 配置文件

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/essential',

    // 使用 Vue 3 规则
    // https://eslint.vuejs.org/user-guide/#bundle-configurations
    'plugin:vue/vue3-strongly-recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
}
```

4. 在 npm scripts 中添加验证脚本

```json
"scripts": {
	...
  "lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix",
}
```

> 注意：eslint 后面的路径最好加上引号，否则在类 Unix 系统（比如 macOS）中会报错说找不到资源。

## vue-eslint-plugin

> [https://eslint.vuejs.org](https://eslint.vuejs.org)

编译器宏和 defineProps、defineEmits、no-undef 规则警告

您需要定义全局变量 （打开新窗口）在您的 ESLint 配置文件中。

如果您不想定义全局变量，请使用 import { defineProps, defineEmits } from 'vue'.

示例 .eslintrc.js：

```js
module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
```
