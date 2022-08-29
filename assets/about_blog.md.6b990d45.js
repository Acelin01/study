import{_ as s,L as n,K as a,a7 as p}from"./plugin-vue_export-helper.aa272829.js";var t="/study/assets/blog-index.624ec73c.jpg";const y='{"title":"\u5B66\u4E60\u5730\u5740","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B66\u4E60\u5730\u5740","slug":"\u5B66\u4E60\u5730\u5740"},{"level":2,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":2,"title":"\u9879\u76EE\u914D\u7F6E","slug":"\u9879\u76EE\u914D\u7F6E"},{"level":2,"title":"\u90E8\u7F72 github pages","slug":"\u90E8\u7F72-github-pages"},{"level":2,"title":"\u4EE3\u7801\u5C55\u5F00","slug":"\u4EE3\u7801\u5C55\u5F00"}],"relativePath":"about/blog.md","lastUpdated":1661686862099}',e={},o=p(`<h2 id="\u5B66\u4E60\u5730\u5740" tabindex="-1">\u5B66\u4E60\u5730\u5740 <a class="header-anchor" href="#\u5B66\u4E60\u5730\u5740" aria-hidden="true">#</a></h2><ul><li>\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://vitepress.vuejs.org/</a></li><li>\u6398\u91D1\u8BB2\u89E3\uFF1A<a href="https://juejin.cn/post/6965510644007665671#heading-48" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6965510644007665671#heading-48</a></li></ul><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA\u81EA\u5DF1\u7684\u9879\u76EE\u76EE\u5F55</li></ol><div class="language-shell"><pre><code><span class="token function">mkdir</span> blog-vitepress
<span class="token builtin class-name">cd</span> blog-vitepress
</code></pre></div><ol start="2"><li>\u521D\u59CB\u5316 <code>package.json</code>, \u5B89\u88C5 <code>vitepress</code></li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> vitepress
</code></pre></div><ol start="3"><li>\u5C06 <code>vitepress</code> \u6267\u884C\u547D\u4EE4\u6DFB\u52A0\u5230\u6267\u884C\u811A\u672C\u4E2D</li></ol><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs --open&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u6839\u76EE\u5F55\u521B\u5EFA <code>docs</code> \u76EE\u5F55\uFF0C\u521B\u5EFA\u7B2C\u4E00\u4E2A <code>md</code> \u6587\u4EF6\uFF08\u7F51\u7AD9\u9996\u9875\u7684\u914D\u7F6E\u548C\u5185\u5BB9\uFF09\uFF0C\u53EF\u4EE5\u547D\u4EE4\u884C\u6D3B\u5728\u6587\u4EF6\u4E2D\u624B\u52A8\u521B\u5EFA</li></ol><div class="language-shell"><pre><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello World&#39;</span> <span class="token operator">&gt;</span> docs/index.md
</code></pre></div><ol start="5"><li>\u542F\u52A8\u9879\u76EE</li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> run dev
</code></pre></div><h2 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u4E00\u4E9B\u5BFC\u822A\u5230\u6211\u4EEC\u7684\u7F51\u7AD9\u4FA7\u8FB9\u680F\u548C\u5BFC\u822A\u680F\u3002\u521B\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728docs\u4E2D\u65B0\u5EFA\u4E00\u4E2A <code>.vitepress</code> \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u521B\u5EFA\u4E00\u4E2A <code>config.js</code> \u6587\u4EF6</p><div class="language-js"><pre><code><span class="token comment">// vitepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span><span class="token comment">// \u7F51\u7AD9\u6807\u9898</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u7684vitepress\u535A\u5BA2.&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u7F51\u7AD9\u63CF\u8FF0</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//  \u90E8\u7F72\u65F6\u7684\u8DEF\u5F84 \u9ED8\u8BA4 /  \u53EF\u4EE5\u4F7F\u7528\u4E8C\u7EA7\u5730\u5740 /base/</span>
  <span class="token comment">// lang: &#39;en-US&#39;, //\u8BED\u8A00</span>
  <span class="token comment">// \u7F51\u9875\u5934\u90E8\u914D\u7F6E\uFF0C\u5F15\u5165\u9700\u8981\u56FE\u6807\uFF0Ccss\uFF0Cjs</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u6539\u53D8title\u7684\u56FE\u6807</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/linktolink.png&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u56FE\u7247\u653E\u5728public\u6587\u4EF6\u5939\u4E0B</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E3B\u9898\u914D\u7F6E</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;vuejs/vitepress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F60\u7684 github \u4ED3\u5E93\u5730\u5740\uFF0C\u7F51\u9875\u7684\u53F3\u4E0A\u89D2\u4F1A\u8DF3\u8F6C</span>
    <span class="token comment">//   \u5934\u90E8\u5BFC\u822A</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/about/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//   \u4FA7\u8FB9\u5BFC\u822A</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u7684&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/mine/&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9996\u9875\u7ED3\u6784(\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7528\u666E\u901A\u7684 markdown \u683C\u5F0F)</p><div class="language-js"><pre><code><span class="token comment">// docs/index.md</span>
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">heroAlt</span><span class="token operator">:</span> Logo image
<span class="token literal-property property">heroText</span><span class="token operator">:</span> Welcome<span class="token operator">!</span>
<span class="token literal-property property">tagline</span><span class="token operator">:</span> Hero subtitle
<span class="token literal-property property">actionText</span><span class="token operator">:</span> Get Started
<span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token operator">/</span>ts<span class="token operator">/</span>basics
<span class="token literal-property property">features</span><span class="token operator">:</span>
  <span class="token operator">-</span> title<span class="token operator">:</span> Simplicity First
    <span class="token literal-property property">details</span><span class="token operator">:</span> Minimal setup <span class="token keyword">with</span> markdown<span class="token operator">-</span>centered project structure helps you focus on writing<span class="token punctuation">.</span>
  <span class="token operator">-</span> title<span class="token operator">:</span> Vue<span class="token operator">-</span>Powered
    <span class="token literal-property property">details</span><span class="token operator">:</span> Enjoy the dev experience <span class="token keyword">of</span> Vue <span class="token operator">+</span> webpack<span class="token punctuation">,</span> use Vue components <span class="token keyword">in</span> markdown<span class="token punctuation">,</span> and develop custom themes <span class="token keyword">with</span> Vue<span class="token punctuation">.</span>
  <span class="token operator">-</span> title<span class="token operator">:</span> Performant
    <span class="token literal-property property">details</span><span class="token operator">:</span> VitePress generates pre<span class="token operator">-</span>rendered <span class="token keyword">static</span> <span class="token constant">HTML</span> <span class="token keyword">for</span> each page<span class="token punctuation">,</span> and runs <span class="token keyword">as</span> an <span class="token constant">SPA</span> once a page is loaded<span class="token punctuation">.</span>
<span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token constant">MIT</span> Licensed <span class="token operator">|</span> Copyright \xA9 <span class="token number">2019</span><span class="token operator">-</span>present Evan You
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre></div><p><img src="`+t+`" alt="image"></p><p>\u9879\u76EE\u7ED3\u6784</p><div class="language-js"><pre><code>vitepress
    \u2502
    \u251C\u2500\u2500\u2500 docs
    \u2502     \u2502
    \u2502     \u251C\u2500\u2500 <span class="token punctuation">.</span>vuepress
    \u2502     \u2502     \u2514\u2500\u2500 config<span class="token punctuation">.</span>js
    \u2502     \u251C\u2500\u2500 <span class="token keyword">public</span>
    \u2502     \u251C\u2500\u2500 about
    \u2502     \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2502     \u251C\u2500\u2500 mine
    \u2502     \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2514\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5934\u90E8\u5BFC\u822A\u4E0B\u62C9</p><div class="language-js"><pre><code><span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u6280\u672F&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;TS&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/ts/basics&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;^/ts/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/skills/vue/&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5934\u90E8\u5BFC\u822A\u548C\u4FA7\u8FB9\u680F\u5173\u8054</p><div class="language-js"><pre><code><span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u6280\u672F&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;TS&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/ts/basics&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;^/ts/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/skills/vue/&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>


<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/ts/&#39;</span><span class="token operator">:</span> <span class="token function">getTsSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTsSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840\u77E5\u8BC6&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/ts/basics&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// link \u548C \u5934\u90E8\u5BFC\u822A\u7684 link \u5BF9\u5E94\uFF0C \u8BBF\u95EE\u6587\u4EF6\u4E3A docs/ts/basics.md \u6587\u4EF6</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5185\u7F6E\u7C7B\u578B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/ts/inside-type&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></div><h2 id="\u90E8\u7F72-github-pages" tabindex="-1">\u90E8\u7F72 github pages <a class="header-anchor" href="#\u90E8\u7F72-github-pages" aria-hidden="true">#</a></h2><ol><li>\u5728 <code>docs/.vitepress/config.js</code> \u4E2D\u8BBE\u7F6E\u6B63\u786E\u7684base\u3002</li></ol><ul><li>\u5982\u679C\u8981\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.github.io/</code>\uFF0C\u5219\u53EF\u4EE5\u7701\u7565 <code>base</code>\uFF0C\u56E0\u4E3A\u5B83\u9ED8\u8BA4\u4E3A <code>\u201C/\u201D</code>\u3002</li><li>\u5982\u679C\u60A8\u6B63\u5728\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>\uFF0C\u4F8B\u5982\uFF0C\u60A8\u7684\u5B58\u50A8\u5E93\u4F4D\u4E8E <code>github.com/&lt;REPO&gt;/</code>\uFF0C\u7136\u540E\u5C06 <code>base</code> \u8BBE\u7F6E\u4E3A <code>/&lt;REPO&gt;/</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>vitepress \u9ED8\u8BA4\u6253\u5305\u540E\u7684 dist \u76EE\u5F55\u653E\u5728 .vitepress/dist/ \u4E0B\uFF0C\u5C0F\u7F16\u8FD9\u91CC\u53EA\u662F\u8BBE\u7F6E\u4E86 github pages\uFF08\u8BFB\u8005\u53EF\u81EA\u884C\u767E\u5EA6\u67E5\u627E\uFF09\uFF0C\u5199\u4E86\u4E2A\u811A\u672C\u628A\u6253\u5305\u5B8C\u540E\u7684 dist \u76EE\u5F55\u79FB\u5230\u4E86\u6839\u76EE\u5F55\u4E0B\uFF0Cgit push \u5230\u4ED3\u5E93\u4E2D\uFF0C\u76F4\u63A5\u901A\u8FC7 github \u5730\u5740\u8BBF\u95EE\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002</p></div><h2 id="\u4EE3\u7801\u5C55\u5F00" tabindex="-1">\u4EE3\u7801\u5C55\u5F00 <a class="header-anchor" href="#\u4EE3\u7801\u5C55\u5F00" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5 <code>vitepress-theme-demoblock</code> \u63D2\u4EF6, <a href="https://github.com/xinlei3166/vitepress-theme-demoblock" target="_blank" rel="noopener noreferrer">github \u5730\u5740</a></li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vitepress-theme-demoblock
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vitepress-theme-demoblock
</code></pre></div><ol start="2"><li>\u914D\u7F6E <code>config.js</code></li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vitepress-theme-demoblock&#39;</span><span class="token punctuation">)</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>demoBlockPlugin<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u6CE8\u5165\u4E3B\u9898\u4E0E\u63D2\u4EF6 \u5728 <code>docs/.vitepress/theme/index.ts</code> \u4E2D\u5199\u5165\u5982\u4E0B\u4EE3\u7801\uFF0C\u5176\u4E2D <code>register-components.js</code> \u4E0D\u9700\u8981\u81EA\u5DF1\u521B\u5EFA\uFF0C\u5728 <code>package.json</code> \u4E2D\u6CE8\u5165\u811A\u672C\uFF0C\u6267\u884C\u811A\u672C\u81EA\u52A8\u751F\u6210\u5728 <code>docs/.vitepress/theme</code> \u76EE\u5F55\u4E0B</li></ol><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;register:components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress-rc&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6267\u884C <code>npm run register:components</code></p><div class="language-js"><pre><code><span class="token comment">// docs/.vitepress/theme/index.ts</span>

<span class="token comment">// \u5BFC\u5165vitepress-theme-demoblock\u4E3B\u9898\uFF0C\u5E76\u6CE8\u518C\u7EC4\u4EF6(\u5305\u542B\u4E3B\u9898\u4E2D\u9ED8\u8BA4\u7684\u7EC4\u4EF6)\u3002</span>
<span class="token keyword">import</span> Theme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/dist/client/theme-default&#39;</span>

<span class="token comment">// \u5BFC\u5165\u4E3B\u9898\u6837\u5F0F</span>
<span class="token keyword">import</span> <span class="token string">&#39;vitepress-theme-demoblock/theme/styles/index.css&#39;</span>
<span class="token comment">// \u60F3\u5F15\u5165\u5168\u5C40\u81EA\u5DF1\u7684 css \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u5F15\u5165</span>

<span class="token comment">// \u5BFC\u5165\u63D2\u4EF6\u7684\u4E3B\u9898</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerComponents <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./register-components.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>Theme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">registerComponents</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u4F7F\u7528 \u5728\u9700\u8981\u5C55\u793A\u7684 <code>demo</code> \u4E2D\u7684 <code>index.md</code> \u6587\u4EF6\u4E2D\u4F7F\u7528\u7279\u5B9A\u7684\u8BED\u6CD5\u5305\u88F9\u4EE3\u7801\uFF0C\u53EF\u4EE5\u81EA\u52A8\u751F\u6210\u7EC4\u4EF6 <code>demo</code> \u5C55\u793A</li></ol><div class="language-vue"><pre><code># Button \u6309\u94AE

:::demo \u4F7F\u7528\`type\`\uFF0C\`plain\`\uFF0C\`round\`\u6765\u5B9A\u4E49 Button \u7684\u6837\u5F0F

\`\`\`vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u6309\u94AE1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">&gt;</span></span>
  Middle
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6309\u94AE2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">&gt;</span></span>
  Large
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span><span class="token punctuation">&gt;</span></span>\u6309\u94AE3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">&gt;</span></span>
  Disabled
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>\u6309\u94AE4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>:::</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u9ED8\u8BA4\u652F\u6301 <code>vue</code> \u8BED\u6CD5\uFF0C \u60F3\u4FEE\u6539\u7684\u8BDD\u9700\u8981\u4FEE\u6539\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code>md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>demoBlockPlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;ts&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F46\u662F\u8FD9\u91CC\u6709\u4E2A\u9650\u5236\uFF0C\u667A\u80FD\u8BC6\u522B\u4E00\u79CD\u8BED\u6CD5\u7ED3\u6784\uFF0C\u60F3\u5230\u4F1A\u6709 js\u3001 ts\u3001 json \u7B49\u591A\u79CD\u8BED\u6CD5\uFF0C\u6240\u4EE5\u6539\u4E86\u4E0B\u89E3\u6790\u7ED3\u6784\uFF0C\u6539\u6210\u4E86\u6570\u7EC4\uFF0C\u5927\u5BB6\u53EF\u4EE5\u770B\u4E0B\u6211\u7684 github \u4E0A\u7684\u5199\u6CD5</p></div>`,40),c=[o];function l(r,i,k,u,d,g){return a(),n("div",null,c)}var v=s(e,[["render",l]]);export{y as __pageData,v as default};
