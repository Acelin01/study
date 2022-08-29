const { getTsSidebar, getAboutSidebar, getBrowserSidebar, getReactSidebar, getGulpSidebar, getSourceCodeSidebar } = require('./sidebar')
module.exports = {
  title: 'LY的笔记',
  description: '学习记录，欢迎指正',
  base: '/study/',
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: '/img', // 图片放在 public 文件夹下
  //     }
  //   ]
  // ],
  themeConfig: {
    repo: 'Bluestar123/day-blog/tree/master',
    // 头部导航
    nav: [
      {text: '首页', link: '/'},
      {text: '区块链', link: '/about/blog', activeMatch: '^/about/'},
      {text: '前端技术', items: [
        { text: 'TS', link: '/ts/basics', activeMatch: '^/ts/' },
        { text: 'vue', link: '/react/ts', activeMatch: '^/react/' },
        { text: 'uniapp', link: '/gulp/index', activeMatch: '^/gulp/' },
      ]},
      {text: '后端技术', items: [
        { text: 'node', link: '/browser/index', activeMatch: '^/browser/' },
        { text: 'python', link: '/source-code/index', activeMatch: '^/source-code/' },
        { text: '面试题', link: '/source-code/index', activeMatch: '^/source-code/' },
      ]}
    ],
    // 侧边导航
    sidebar: {
      '/ts/': getTsSidebar(),
      '/react': getReactSidebar(),
      '/gulp': getGulpSidebar(),

      '/about': getAboutSidebar(),

      '/browser': getBrowserSidebar(),
      '/source-code': getSourceCodeSidebar()
    }
    // sidebar: [
    //   {text: '我的', link: '/mine/'},
    // ]
  },
  markdown: {
    config: (md) => {
      const {
        langList,
        demoBlockPlugin
      } = require('../../demoblock')//require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        lang: langList
      })
    }
  }
}


