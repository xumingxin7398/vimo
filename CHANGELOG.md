## CHANGE LOG

#### NOTICE

Vimo Is still in development stage (2017/04/23), during which the project needs to be tested on this framework, some of which are bug fixes and API changes. I feel sorry for your inconvenience!

#### 注意

目前还在开发阶段(2017/04/23), 在此期间需要项目对此框架测试, 其中不乏一些组件的bug修复和API的变更, 如果对您的业务造成不便请谅解!

- 0.5.22 - 修复indicator在页面跳转过程没开启足够时间的bug
- 0.5.21 - 在$router中增加```pushWindow```属性, 用于开启新窗口
- 0.5.20 - Slides组件debug；Grid组件使用css样式。
- 0.5.19 - 文档修改. 手滑组件卡顿检查(Range组件)
- 0.5.18 - 修复InfiniteScroll组件在关闭时找不到_setListeners的问题
- 0.5.15 - 修复在钉钉中跳转多一个'/'无法跳转的问题
- 0.5.14 - 修复history中携带参数跳转参数丢失的bug; 钉钉平台增加右侧按钮同步功能
- 0.5.13 - 修复支付宝中actionsheet在title未传值的情况下的显示bug
- 0.5.12 - 增加babel编译后lib文件夹
- 0.5.10 - 在alipay和dingtalk平台, 如果切换路由则进入新的tab页面, 当然包括滑动返回的动画
- 0.5.9 - 增加Sheet组件
- 0.5.6 - fixed: infinite-scroll
- 0.5.3 - 增加了部分组件
- 0.5.2 - 增加theme定制
- 0.4.4 - 修复众多组件的bug; 将主题与组件框架分离; 增加对alipay/dingtalk等平台的适配, 如果在此平台则默认使用平台提供的原生方法.
- 0.4.3 - 修复modal组件弹出层显示的bug; 
- 0.4.2 - 增加noticebar/separation/slide-box组件; 修复微信等浏览器无法更新title的问题; 修复弹出层组件无法在created钩子中触发的bug;
- 0.4.1 - 修复slides的name问题
- 0.3.8 - 增加Pick/Datetime/Slid-lite等组件，并修复诸多组件bug.
- 0.3.7 - 增加Indicator组件.
- 0.3.3 - 增加item对路由的支持, 修复color设置的bug. List及其子组件的debug, 完成itemSliding组件. 修复array不支持find函数的问题
- 0.3.2 - 修复城市数据路中的显示bug,有些显示?x区
- 0.3.1 - loading/actionsheet/alert组件随url变化而关闭. 增加select组件. 修复三亚没有区县的显示bug
- 0.3.0 - loading增加最长开启时间, 默认为5000ms(获取数据的最长时间)
- 0.2.9 - 增加checkbox组件, 还未debug
- 0.2.7 - 城市三级组件修复页面切换不关闭的bug, platform组件debug
- 0.2.6 - 修复promise依赖的问题
- 0.2.5 - 弹出层组件优化实现逻辑. modal组件的onDismiss是在动画关闭后触发. 增加promise的polyfill. md模式下的button点击效果修复. actionsheet中button过多的显示bug修复. 修复城市三级联动组件无法正确显示三级的情况.
- 0.2.3 - 再次精简核心组件, 目前核心组件为: App/Nav/Page/Header/Content/Footer, 其余按需加载
- 0.2.2 - 修复modal打包后使用的bug
- 0.2.1 - 去除refresher组件的console信息, 增加refresher-content组件的组件依赖.
- 0.2.0 - bridge设计完成(plt.registerMethod/this.$platform.do); searchbar/input组件debug; 明确基本组件为: App, Header, Footer, Content, Page, Nav, Button, Navbar, Toolbar, ToolbarTitle, ToolbarButtons, 其余按需加载.
- 0.1.9 - platform增加onBridgeReady钩子, 平台初始化由platform自己完成, 其余的自定义部分由业务自己完成(比如: config配置, 分享配置等); 增加平台方法注册钩子`onBridgeReady`; 修复alert等组件的依赖关系.
- 0.1.8 - 修复`package.json`缺少依赖的问题
- 0.1.7 - Navbar引入基础组件, Icon组件剔除对ionicons的依赖, 如果项目需要则自行安装`npm install ionicons`, 之后`import 'ionicons/dist/css/ionicons.css'`即可
- 0.1.6 - 修复引用vimo后无法build的bug, 会因为源码为转为es5语法
- 0.1.5 - 修复dom中的transitionEnd在打包中的问题
- 0.1.4 - 调整button组件
- 0.1.3 - 三级城市选择的picker组件debug, 增加微信初始化的代码
- 0.1.2 - 增加了转场动画及三级城市选择的picker组件