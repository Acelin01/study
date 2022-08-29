import{_ as e,L as n,K as t,a7 as r}from"./plugin-vue_export-helper.aa272829.js";const m='{"title":"\u5B89\u88C5","description":"","frontmatter":{},"relativePath":"about/author.md","lastUpdated":1661689247589}',o={},s=r(`<p><a href="https://blog.51cto.com/u_15580809/5167706" target="_blank" rel="noopener noreferrer">\u5982\u4F55\u5229\u7528VuePress\u548CGithub Page\u642D\u5EFA\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u535A\u5BA2</a><a href="https://acelin01.github.io/study/" target="_blank" rel="noopener noreferrer">LY\u7684\u535A\u5BA2</a><a href="https://github.com/Acelin01/study" target="_blank" rel="noopener noreferrer">\u6211\u7684\u4ED3\u5E93\u5730\u5740</a><a href="https://juejin.cn/post/6844903673672237069" target="_blank" rel="noopener noreferrer">VuePress \u624B\u6478\u624B\u6559\u4F60\u642D\u5EFA\u4E00\u4E2A\u7C7BVue\u6587\u6863\u98CE\u683C\u7684\u6280\u672F\u6587\u6863/\u535A\u5BA2</a><a href="https://blog.csdn.net/xiaoxianer321/article/details/119548202" target="_blank" rel="noopener noreferrer">vuepress\u4F7F\u7528\u7B80\u4ECB\u53CA\u4E2A\u4EBA\u535A\u5BA2\u642D\u5EFA</a><a href="https://juejin.cn/post/7089313579169480711" target="_blank" rel="noopener noreferrer">\u4F7F\u7528Vuepress\u642D\u5EFA\u57FA\u4E8EVue 3.2\u7684\u7EC4\u4EF6\u5E93\uFF08\u4FDD\u59C6\u7EA7\u6559\u7A0B\uFF09</a></p><h4 id="\u5B89\u88C5" tabindex="-1"><strong>\u5B89\u88C5</strong> <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h4><p><code>yarn add -D vuepress</code> # npm install -D vuepress \u5B89\u88C5\u672C\u5730\u4F9D\u8D56 <em>\u6CE8\uFF1A\u5B98\u65B9\u4E0D\u518D\u63A8\u8350\u5168\u5C40\u5B89\u88C5 npm install -g vuepress</em><code>yarn init -y</code> # npm init -y (-y\u514D\u53BB\u786E\u8BA4) \u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2Apackage.json\u6587\u4EF6 \u5C06\u4E0B\u9762\u7684script \u6DFB\u52A0\u5230package.json\u4E2D</p><div class="language-"><pre><code>{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre></div><p><strong>\u521B\u5EFA\u4E3B\u9875</strong></p><div class="language-"><pre><code>mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre></div><p><code>yarn docs:dev</code>\u8FD0\u884C\u547D\u4EE4\u542F\u52A8local server</p><p><code>npm run build</code>\u7F16\u8BD1\u5B8C\u6210\u4EE5\u540E\u5728 docs \u6587\u4EF6\u5939\u4E0B\u591A\u4E86\u4E00\u4E2A.vuepress \u6587\u4EF6\u5939</p><p><strong>\u57FA\u7840\u914D\u7F6E</strong> \u5728docs\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A .vuepress \u76EE\u5F55\uFF0C\u6240\u6709 VuePress \u76F8\u5173\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\u3002</p><div class="language-"><pre><code>mkdir docs/.vuepress
touch docs/.vuepress/config.js
</code></pre></div><p><strong>config.js\u914D\u7F6E</strong></p><div class="language-"><pre><code>module.exports = {
    title: &#39;\u6F2B\u6B65coding\u7684\u535A\u5BA2&#39;,
    description: &#39;\u516C\u4F17\u53F7: \u6F2B\u6B65coding, \u6B22\u8FCE\u5927\u5BB6\u5173\u6CE8\uFF0C \u4E00\u4E2A\u805A\u7126\u4E8E\u7B97\u6CD5\u3001\u6570\u636E\u5E93\u3001\u67B6\u6784\u7684\u516C\u4F17\u53F7&#39;,
    theme: &#39;reco&#39;,//\u8BBE\u7F6E\u4E3B\u9898
    base: &#39;/study/&#39;,
    themeConfig: {
      nav: [
        { text: &#39;\u9996\u9875&#39;, link: &#39;/&#39; },
        { 
            text: &#39;\u6F2B\u6B65coding \u535A\u5BA2&#39;, 
            items: [
                { text: &#39;Github&#39;, link: &#39;https://github.com/easyhappy/travel-coding&#39; },
                { text: &#39;\u516C\u4F17\u53F7&#39;, link: &#39;https://mp.weixin.qq.com/s/Npkk0oHEszZrUP2yRiTaSA&#39; }
            ]
        }
      ],
      sidebar: [
          {
            title: &#39;mysql&#39;,
            path: &#39;/&#39;,
            collapsable: false, // \u4E0D\u6298\u53E0
            children: [
                { title: &quot;\u524D\u8A00&quot;, path: &quot;/mysql/brief&quot;},
            ]
          },
  
          {
            title: &#39;\u5173\u4E8E\u6211&#39;,
            path: &#39;/&#39;,
            collapsable: false, // \u4E0D\u6298\u53E0
            children: [
                { title: &quot;\u516C\u4F17\u53F7&quot;, path: &quot;/about/brief&quot;},
            ]
          }
        ]
    }
  }
</code></pre></div><p><strong>\u6DFB\u52A0\u5DE6\u4FA7\u8FB9\u680F</strong><code>cat &gt; docs/about/brief.md</code></p><p><code>yarn add vuepress-theme-reco</code>\u8BBE\u7F6E\u535A\u5BA2\u4E3B\u9898</p><h4 id="\u53D1\u5E03\u5230github-page\u4E0A" tabindex="-1"><strong>\u53D1\u5E03\u5230Github Page\u4E0A</strong> <a class="header-anchor" href="#\u53D1\u5E03\u5230github-page\u4E0A" aria-hidden="true">#</a></h4><p><code>base: &#39;/travel-coding/&#39;</code>,// \u8DEF\u5F84\u540D\u4E3A &quot;/&lt;\u60A8\u5EFA\u7684REPO\u540D\u5B57&gt;/&quot;</p><p>\u5C06\u4E0B\u9762\u6DFB\u52A0\u4E00\u4E9B\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u653E\u5230.gitignore\u6587\u4EF6\u4E2D.</p><div class="language-"><pre><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728\u9879\u76EE vuepress-starter \u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\uFF1A<a href="http://deploy.sh" target="_blank" rel="noopener noreferrer">deploy.sh</a></p><div class="language-"><pre><code>#!/usr/bin/env sh

# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set -e

# \u751F\u6210\u9759\u6001\u6587\u4EF6
npm run docs:build

# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939
cd docs/.vuepress/dist

git init
git add -A
git commit -m &#39;deploy&#39;

### imporant \u6CE8\u610F\u66FF\u6362 \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:Acelin01/study.git master:main

cd -
</code></pre></div><h4 id="\u5728\u672C\u5730\u5B89\u88C5\u535A\u5BA2\u6A21\u677F" tabindex="-1"><strong>\u5728\u672C\u5730\u5B89\u88C5\u535A\u5BA2\u6A21\u677F</strong> <a class="header-anchor" href="#\u5728\u672C\u5730\u5B89\u88C5\u535A\u5BA2\u6A21\u677F" aria-hidden="true">#</a></h4><div class="language-"><pre><code># init
npm install @vuepress-reco/theme-cli -g
theme-cli init mjxWebBlog
 
# install
cd mjxWebBlog
npm install
 
# run
npm run dev
 
# build
npm run build
</code></pre></div>`,22),a=[s];function i(d,c,p,l,u,g){return t(),n("div",null,a)}var b=e(o,[["render",i]]);export{m as __pageData,b as default};
