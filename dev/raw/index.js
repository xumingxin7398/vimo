import { setupConfig } from './base/config'
import { setupPlatform } from './base/platform'
import { History } from './base/history'
// Core
import { App, Footer, Header } from './components/app'
import { Content } from './components/content'
import { Nav } from './components/nav'

import { Page } from './components/page'
/**
 * @name initVimo
 * @description Vimo框架安装
 */
import './util/polyfill'

export default {
  installed: false,
  version: '0.3.7',
  install (Vue, options = {}) {
    window.VM = {}
    // init base (config/platform)
    setupConfig(options.custConf, setupPlatform(options.pltConf))

    // 全局事件总线（各个组件共用）中央事件总线
    Vue.prototype.$eventBus = new Vue()
    Vue.prototype.$config = window.VM.config
    Vue.prototype.$platform = window.VM.platform
    // 监听route变化, 内建历史记录
    Vue.prototype.$history = window.VM.history = new History(Vue, options.router)

    // 安装必要组件
    if (!window.VM) {
      console.error('Component install need VM!::<Function>install()')
      return false
    }

    // 全局注册的组件(核心组件)
    Vue.component(App.name, App)
    Vue.component(Nav.name, Nav)
    Vue.component(Page.name, Page)
    Vue.component(Header.name, Header)
    Vue.component(Content.name, Content)
    Vue.component(Footer.name, Footer)

    // add logo
    addLogo()
  }
}

function addLogo () {
  // logo
  var vimoLogo = {
    info: '源代码请访问GitHub https://github.com/DTFE/Vimo \nPowered by Vue2.x',
    logo: '\n'
    + '  __      __ _____ __  __  ____   \n'
    + '  \\ \\    / /|_   _|  \\/  |/ __ \\  \n'
    + '   \\ \\  / /   | | | \\  / | |  | | \n'
    + '    \\ \\/ /    | | | |\\/| | |  | | \n'
    + '     \\  /    _| |_| |  | | |__| | \n'
    + '      \\/    |_____|_|  |_|\\____/    '
  }
  window.console && console.info && console.info(vimoLogo.logo + '\n' + vimoLogo.info)
}