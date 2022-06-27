import Vue from 'vue'
import { MarkdownPreview } from 'vue-meditor'
import CodeCollapse from './code-collapse'

Vue.component('MarkdownView', MarkdownPreview)
Vue.component(CodeCollapse.name, CodeCollapse)
