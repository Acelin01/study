[如何利用VuePress和Github Page搭建一个轻量级博客](https://blog.51cto.com/u_15580809/5167706)
[LY的博客](https://acelin01.github.io/study/)
[我的仓库地址](https://github.com/Acelin01/study)
[VuePress 手摸手教你搭建一个类Vue文档风格的技术文档/博客](https://juejin.cn/post/6844903673672237069)
[vuepress使用简介及个人博客搭建](https://blog.csdn.net/xiaoxianer321/article/details/119548202)
[使用Vuepress搭建基于Vue 3.2的组件库（保姆级教程）](https://juejin.cn/post/7089313579169480711)

#### **安装**

`yarn add -D vuepress` # npm install -D vuepress 安装本地依赖
*注：官方不再推荐全局安装 npm install -g vuepress*
`yarn init -y` # npm init -y (-y免去确认) 将会创建一个package.json文件
将下面的script 添加到package.json中
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
**创建主页**
```
mkdir docs
echo '# Hello VuePress' > docs/README.md
```
`yarn docs:dev`运行命令启动local server

`npm run build`编译完成以后在 docs 文件夹下多了一个.vuepress 文件夹

**基础配置**
在docs目录下创建一个 .vuepress 目录，所有 VuePress 相关的文件都会被放在这里。
```
mkdir docs/.vuepress
touch docs/.vuepress/config.js
```

**config.js配置**
```
module.exports = {
    title: '漫步coding的博客',
    description: '公众号: 漫步coding, 欢迎大家关注， 一个聚焦于算法、数据库、架构的公众号',
    theme: 'reco',//设置主题
    base: '/study/',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { 
            text: '漫步coding 博客', 
            items: [
                { text: 'Github', link: 'https://github.com/easyhappy/travel-coding' },
                { text: '公众号', link: 'https://mp.weixin.qq.com/s/Npkk0oHEszZrUP2yRiTaSA' }
            ]
        }
      ],
      sidebar: [
          {
            title: 'mysql',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "前言", path: "/mysql/brief"},
            ]
          },
  
          {
            title: '关于我',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "公众号", path: "/about/brief"},
            ]
          }
        ]
    }
  }
```

**添加左侧边栏**
`cat > docs/about/brief.md`

`yarn add vuepress-theme-reco`设置博客主题

#### **发布到Github Page上**

`base: '/travel-coding/'`,// 路径名为 "/<您建的REPO名字>/"

将下面添加一些文件或者目录放到.gitignore文件中.
```
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```
然后我们在项目 vuepress-starter 目录下建立一个脚本文件：deploy.sh
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

### imporant 注意替换 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Acelin01/study.git master:main

cd -
```

#### **在本地安装博客模板**
```
# init
npm install @vuepress-reco/theme-cli -g
theme-cli init mjxWebBlog
 
# install
cd mjxWebBlog
npm install
 
# run
npm run dev
 
# build
npm run build
```