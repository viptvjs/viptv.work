import{_ as t,c,f as l,a as n,e,h as i,d as o,o as r,g as p}from"./app-asUk4_Dx.js";const d={};function u(v,s){const a=o("RouteLink");return r(),c("div",null,[s[4]||(s[4]=l('<h1 id="搭建越狱源" tabindex="-1"><a class="header-anchor" href="#搭建越狱源"><span>搭建越狱源</span></a></h1><blockquote><p>更新时间：2024-1-12</p></blockquote><div class="hint-container caution"><p class="hint-container-title">注意</p><p>本次仅讲解如何搬运插件，非编写插件！</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>有时候源太多了，插件使用起来觉得繁冗，就考虑是否能整合在一起</p><p>实际操作一遍后，搬运真的非常麻烦！所以不建议！！</p><p>仅此记录一下</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>',8)),n("ul",null,[n("li",null,[n("p",null,[e(a,{to:"/tutorial/website/Server/"},{default:i(()=>s[0]||(s[0]=[p("服务器")])),_:1})])]),n("li",null,[n("p",null,[e(a,{to:"/tutorial/website/shell/"},{default:i(()=>s[1]||(s[1]=[p("安装shell")])),_:1})])]),n("li",null,[n("p",null,[e(a,{to:"/tutorial/website/BT.html"},{default:i(()=>s[2]||(s[2]=[p("安装宝塔面板")])),_:1})])]),n("li",null,[n("p",null,[e(a,{to:"/tutorial/website/pages/github.html"},{default:i(()=>s[3]||(s[3]=[p("注册Github账号")])),_:1})])])]),s[5]||(s[5]=l(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.</span>
<span class="line">├─ debs</span>
<span class="line">│   └─ xx.deb</span>
<span class="line">├─ CydiaIcon.png</span>
<span class="line">├─ index.html</span>
<span class="line">├─ Packages</span>
<span class="line">├─ Packages.bz2</span>
<span class="line">├─ Packages.gz</span>
<span class="line">├─ Packages.xz</span>
<span class="line">└─ Release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">shell</a> 连接 <a href="#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">服务器（或虚拟机）</a>，然后进入 <a href="#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">宝塔面板</a></p><p>文件 - 根目录/www/wwwroot ，新建一个 <code>jbrepo</code> 文件夹</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我是准备部署到 Github Page 的，就随便命名了</p><p>如果你就准备放服务器上，不用新建，直接放域名文件夹里</p></div><figure><img src="https://img.viptv.work/viptv/repo/repo-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不要着急新建，我会逐一的分开讲解</p><figure><img src="https://img.viptv.work/viptv/repo/repo-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="debs" tabindex="-1"><a class="header-anchor" href="#debs"><span>debs</span></a></h3><p>新建插件文件夹，以 <a href="https://github.com/dayanch96/BHTikTok-Plus/releases" target="_blank" rel="noopener noreferrer">BHTikTok-Plus</a> 为例</p><figure><img src="https://img.viptv.work/viptv/repo/repo-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">说明</p><p><code>iphoneos-arm</code> 为 有根插件rootful，unc0ver越狱等专用</p><p><code>iphoneos-arm64</code> 为 无根插件rootless，多巴胺越狱等专用</p></div><p>如果你想要两个插件都保留，就分别新建文件夹</p><p><code>rootful</code> 放有根，<code>rootless</code> 放无根</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">.</span>
<span class="line">├─ debs</span>
<span class="line">│   └─ rootful</span>
<span class="line highlighted">│       └─ bhtiktok_2.3_iphoneos-arm.deb</span>
<span class="line">│   └─ rootless</span>
<span class="line highlighted">│       └─ rootless.bhtiktok_2.3_iphoneos-arm64.deb</span>
<span class="line">└─ ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>dylib插件打包成deb</summary><p>dylib是动态拓展库文件，只能由苹果的软件 <a href="https://developer.apple.com/cn/xcode/" target="_blank" rel="noopener noreferrer">Xcode</a> 打开或编译</p><p>如果你不懂得使用，请放弃</p></details><hr><h3 id="cydiaicon-png" tabindex="-1"><a class="header-anchor" href="#cydiaicon-png"><span>CydiaIcon.png</span></a></h3><p>这个是我们越狱源的头像，尺寸为64x64</p><hr><h3 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html"><span>index.html</span></a></h3><p>可选项，越狱源展示页，你也可以不弄</p><p>比如 <a href="https://github.com/opa334/opa334.github.io" target="_blank" rel="noopener noreferrer">opa334的插件源</a> 首页：<a href="https://opa334.github.io/" target="_blank" rel="noopener noreferrer">https://opa334.github.io/</a></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>I&#39;m yiov.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="packages" tabindex="-1"><a class="header-anchor" href="#packages"><span>Packages</span></a></h3><p>deb文件的control信息集合，不要直接复制了填，没用</p><p>了解下基础信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Package: 包名</span>
<span class="line">Version: 版本号</span>
<span class="line">Architecture: 架构(arm/arm64)</span>
<span class="line">Maintainer: 维护者</span>
<span class="line">Installed-Size: 安装包大小</span>
<span class="line">Depends: 依赖 mobilesubstrate (&gt;= 0.9.5000) , iOS 版本必须在 6.0 以上 firmware (&gt;=6.0)</span>
<span class="line">Filename: 文件路径</span>
<span class="line">Size: 文件大小字节</span>
<span class="line">MD5sum: MD5值</span>
<span class="line">SHA1: SHA1值</span>
<span class="line">SHA256: SHA256值</span>
<span class="line">Section: 分类名</span>
<span class="line">Description: 描述</span>
<span class="line">Author: 作者</span>
<span class="line">Name: 插件名</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 dpkg-dev ，获取即可生成</p><div class="hint-container tip"><p class="hint-container-title">说明</p><p>Debian/Ubuntu系统自带dpkg-dev和dpkg-scanpackages命令，无需安装</p></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> dpkg-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://img.viptv.work/viptv/repo/repo-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进 插件目录，根据刚开始 <a href="#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">自己建立的文件夹名</a> 来</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /www/wwwroot/jbrepo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><details class="hint-container details"><summary>进错目录怎么返回</summary><p>可以用 <code>cd ..</code> 返回上一层</p></details><p>打包</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dpkg-scanpackages <span class="token parameter variable">--multiversion</span> debs /dev/null <span class="token operator">&gt;</span> Packages</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line highlighted"><span class="token punctuation">[</span>root@yiov jbrepo<span class="token punctuation">]</span><span class="token comment"># dpkg-scanpackages --multiversion debs /dev/null &gt; Packages</span></span>
<span class="line">dpkg-scanpackages: warning: Packages <span class="token keyword">in</span> archive but missing from override file:</span>
<span class="line">dpkg-scanpackages: warning:   com.bandarhl.bhtiktok</span>
<span class="line">dpkg-scanpackages: info: Wrote <span class="token number">2</span> entries to output Packages file.</span>
<span class="line"></span></code></pre></div><p>查看文件内容就有了</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Package: com.bandarhl.bhtiktok</span>
<span class="line">Version: 2.3</span>
<span class="line">Architecture: iphoneos-arm</span>
<span class="line">Maintainer: dvntm</span>
<span class="line">Installed-Size: 1480</span>
<span class="line">Depends: mobilesubstrate</span>
<span class="line">Filename: debs/rootful/bhtiktok_2.3_iphoneos-arm.deb</span>
<span class="line">Size: 481732</span>
<span class="line">MD5sum: e5b410b6f43ac6146d8f506b1bd331a7</span>
<span class="line">SHA1: cdad39b612c61f6143c88f29e1302cf88f474ee8</span>
<span class="line">SHA256: 4bfeee68dff44248e0ee116b7745a788fac834a49735c6fdabe410918f7bba63</span>
<span class="line">Section: Tweaks</span>
<span class="line">Description: An awesome tweak for TikTok!</span>
<span class="line">Author: dvntm</span>
<span class="line">Icon: https://i.imgur.com/PKIhkrt.png</span>
<span class="line">Name: BHTikTok Plus</span>
<span class="line"></span>
<span class="line">Package: com.bandarhl.bhtiktok</span>
<span class="line">Version: 2.3</span>
<span class="line">Architecture: iphoneos-arm64</span>
<span class="line">Maintainer: dvntm</span>
<span class="line">Installed-Size: 1480</span>
<span class="line">Depends: mobilesubstrate</span>
<span class="line">Filename: debs/rootless/rootless.bhtiktok_2.3_iphoneos-arm64.deb</span>
<span class="line">Size: 481152</span>
<span class="line">MD5sum: 990bffab5b01644cb54add45328fa7a1</span>
<span class="line">SHA1: a229326f24196f037a56cbd8e34d866583e92a04</span>
<span class="line">SHA256: 0993c3730472bc7979dd760e120b83ad31c3cf2b72a2a6ab93166a3692d25d31</span>
<span class="line">Section: Tweaks</span>
<span class="line">Description: An awesome tweak for TikTok!</span>
<span class="line">Author: dvntm</span>
<span class="line">Icon: https://i.imgur.com/PKIhkrt.png</span>
<span class="line">Name: BHTikTok Plus</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>题外话：关于哈希值</summary><p>Hash Function，也叫hash值，类似于文件的身份证</p><p>而hash值的查看也非常简单，演示下deb插件的哈希值</p><p>比如：插件在F盘的debs文件夹内，然后在地址栏上方，输入 <code>CMD</code> 回车</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Microsoft Windows <span class="token punctuation">[</span>版本 <span class="token number">10.0</span>.19045.2965<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">(</span>c<span class="token punctuation">)</span> Microsoft Corporation。保留所有权利。</span>
<span class="line"></span>
<span class="line">F:<span class="token punctuation">\\</span>debs<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后分别用命令查看</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">certutil <span class="token parameter variable">-hashfile</span> 文件名 MD5</span>
<span class="line">certutil <span class="token parameter variable">-hashfile</span> 文件名 SHA1</span>
<span class="line">certutil <span class="token parameter variable">-hashfile</span> 文件名 SHA256</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">F:<span class="token punctuation">\\</span>debs<span class="token operator">&gt;</span>certutil <span class="token parameter variable">-hashfile</span> .<span class="token punctuation">\\</span>com.dayanch96.bhtiktok_2.3_iphoneos-arm64.deb MD5</span>
<span class="line"></span>
<span class="line">MD5 的 .<span class="token punctuation">\\</span>com.dayanch96.bhtiktok_2.3_iphoneos-arm64.deb 哈希:</span>
<span class="line">990bffab5b01644cb54add45328fa7a1</span>
<span class="line">CertUtil: <span class="token parameter variable">-hashfile</span> 命令成功完成。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>那怎么打包其他的压缩包格式呢，有很多方式</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">gzip</span> <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.gz</span>
<span class="line"><span class="token function">bzip2</span> <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.bz2</span>
<span class="line">xz <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.xz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>相关命令的使用</summary><div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">gzip / bzip2 / xz /指令参数：</span>
<span class="line"></span>
<span class="line">-c (--stdout) 标准压缩</span>
<span class="line">-d (--decompress) 强制解压缩</span>
<span class="line">​-f (--force) 强制覆盖输出文件</span>
<span class="line">-h (--help) 　显示帮助</span>
<span class="line">-k (--keep) 保留源文件</span>
<span class="line">-q (--quiet) 压制不重要的警告信息</span>
<span class="line">-r (--recursive) 递归,将指定目录下的所有文件及子目录一并处理</span>
<span class="line">-s (--small) 减少内存用量</span>
<span class="line">-t (--test) 检查指定文件的完整性，但并不对其解压缩</span>
<span class="line">-L (--license) 显示版本信息</span>
<span class="line">-V (--version) 显示版本信息</span>
<span class="line">-v (--verbose) 显示指令执行过程</span>
<span class="line">-z (--compress) -d 的补充，强制进行压缩操作</span>
<span class="line">-1 (-2、...、-9) 压缩率依次增大，速度依次减慢，默认为-6</span>
<span class="line"></span></code></pre></div><hr><div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"></span>
<span class="line">tar zcvf Packages.gz Packages</span>
<span class="line"></span>
<span class="line">tar指令参数：</span>
<span class="line"></span>
<span class="line">-A (--catenate，--concatenate) 将tar文件作为一个整体追加到另一个tar文件中</span>
<span class="line">-c (--create) 建立新的tar文件</span>
<span class="line">-d (--diff，--compare) 将文件系统里的文件和tar文件里的文件进行比较</span>
<span class="line">-f (--file) 指定要处理的文件名</span>
<span class="line">-k (--keep-old-files) 保留源有文件不覆盖</span>
<span class="line">-P (--absolute-names) 使用绝对路径</span>
<span class="line">-r (--append) 添加文件到已经压缩的tar文件</span>
<span class="line">-t (--list) 列出tar文件中包含的文件的信息</span>
<span class="line">-u (--update) 用已打包的文件的较新版本更新tar文件</span>
<span class="line">-v (--verbose) 列出每一步处理涉及的文件的信息，仅列出文件名</span>
<span class="line">-vv 列出权限、所有者、大小、时间、文件名等信息</span>
<span class="line">-x (--extract，--get) 解开tar文件</span>
<span class="line">-Z (--compress，--uncompress) 调用compress执行压缩或解压缩</span>
<span class="line"></span>
<span class="line">-z (--gzip，--gunzip，--ungzip) 支持gzip解压文件</span>
<span class="line">-j (--bzip2) 支持bzip2解压文件</span>
<span class="line">-J (--xz，--lzma) 调用XZ Utils执行压缩或解压缩。依赖XZ Utils。</span>
<span class="line"></span>
<span class="line">--delete 删除tar文件里的文件</span>
<span class="line"></span>
<span class="line"></span></code></pre></div><hr><p>Debian/Ubuntu系统 可以直接用cat打包</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cat Packages | xz &gt; Packages.xz</span>
<span class="line">cat Packages | bzip2 &gt; Packages.bz2</span>
<span class="line">cat Packages | gzip &gt; Packages.gz</span>
<span class="line">cat Packages | lzma &gt; Packages.lzma</span>
<span class="line">cat Packages | zstd &gt; Packages.zst</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><hr><h3 id="release" tabindex="-1"><a class="header-anchor" href="#release"><span>Release</span></a></h3><p>我们直接新建一个空白文件 <code>Release</code></p><p>按照格式进行修改：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Origin: 软件源名，可以使用中文</span>
<span class="line">Label: 同上</span>
<span class="line">Suite: 软件源的类型，比如正式源，测试源等，可以分别用stable, beta, unstable等来表示，一般填 stable 就可以了</span>
<span class="line">Version: 版本号</span>
<span class="line">Codename: 代码代号，只能用英文</span>
<span class="line">Architectures: 架构</span>
<span class="line">Components: main</span>
<span class="line">Description: 描述</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下就是修改好的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Origin: Yiov&#39;s Repo</span>
<span class="line">Label: Yiov&#39;s Repo</span>
<span class="line">Suite: stable</span>
<span class="line">Version: 1.0</span>
<span class="line">Codename: yiov</span>
<span class="line">Architectures: iphoneos-arm iphoneos-arm64</span>
<span class="line">Components: main</span>
<span class="line">Description: 自用搬运源，随缘更新</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>关于Release签名</summary><p>其实签不签名都可以用，既然说到了，就多学一个技能也无所谓</p><div class="hint-container tip"><p class="hint-container-title">说明</p><p>在此之前，先要关闭隧道，否则一会无法输入密码</p></div><p>对着服务器右键 <code>属性 - 隧道 - 取消勾选 转发X11连接到</code>，再点连接，确保重新连接后生效</p><figure><img src="https://img.viptv.work/viptv/repo/repo-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>生成一个密钥</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gpg --gen-key</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>按照提示 默认 <code>1</code> - 默认<code>2048</code> - 默认 <code>0</code> 永久有效 - 默认 <code>y</code></p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>root@yiov jbrepo<span class="token punctuation">]</span><span class="token comment"># gpg --gen-key</span></span>
<span class="line">gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.0</span>.22<span class="token punctuation">;</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2013</span> Free Software Foundation, Inc.</span>
<span class="line">This is <span class="token function">free</span> software: you are <span class="token function">free</span> to change and redistribute it.</span>
<span class="line">There is NO WARRANTY, to the extent permitted by law.</span>
<span class="line"></span>
<span class="line">Please <span class="token keyword">select</span> what kind of key you want:</span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> RSA and RSA <span class="token punctuation">(</span>default<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> DSA and Elgamal</span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> DSA <span class="token punctuation">(</span>sign only<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> RSA <span class="token punctuation">(</span>sign only<span class="token punctuation">)</span></span>
<span class="line highlighted">Your selection? <span class="token number">1</span></span>
<span class="line">RSA keys may be between <span class="token number">1024</span> and <span class="token number">4096</span> bits long.</span>
<span class="line highlighted">What keysize <span class="token keyword">do</span> you want? <span class="token punctuation">(</span><span class="token number">2048</span><span class="token punctuation">)</span> </span>
<span class="line">Requested keysize is <span class="token number">2048</span> bits</span>
<span class="line">Please specify how long the key should be valid.</span>
<span class="line">         <span class="token number">0</span> <span class="token operator">=</span> key does not expire</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>  <span class="token operator">=</span> key expires <span class="token keyword">in</span> n days</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>w <span class="token operator">=</span> key expires <span class="token keyword">in</span> n weeks</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>m <span class="token operator">=</span> key expires <span class="token keyword">in</span> n months</span>
<span class="line">      <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>y <span class="token operator">=</span> key expires <span class="token keyword">in</span> n years</span>
<span class="line highlighted">Key is valid for? <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> </span>
<span class="line">Key does not expire at all</span>
<span class="line highlighted">Is this correct? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y</span>
<span class="line"></span></code></pre></div><p>输入名字(5位以上)、邮箱、描述(随便)，输入 <code>o</code> OK</p><p>输入两次密码完成创建</p><figure><img src="https://img.viptv.work/viptv/repo/repo-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">GnuPG needs to construct a user ID to identify your key.</span>
<span class="line"></span>
<span class="line highlighted">Real name: yiovcopy</span>
<span class="line highlighted">Email address: ******@qq.com</span>
<span class="line highlighted">Comment: one</span>
<span class="line">You selected this <span class="token environment constant">USER</span>-ID:</span>
<span class="line">    <span class="token string">&quot;yiovcopy (one) &lt;******@qq.com&gt;&quot;</span></span>
<span class="line"></span>
<span class="line highlighted">Change <span class="token punctuation">(</span>N<span class="token punctuation">)</span>ame, <span class="token punctuation">(</span>C<span class="token punctuation">)</span>omment, <span class="token punctuation">(</span>E<span class="token punctuation">)</span>mail or <span class="token punctuation">(</span>O<span class="token punctuation">)</span>kay/<span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit? o</span>
<span class="line">You need a Passphrase to protect your secret key.</span>
<span class="line"></span>
<span class="line">We need to generate a lot of random bytes. It is a good idea to perform</span>
<span class="line">some other action <span class="token punctuation">(</span>type on the keyboard, move the mouse, utilize the</span>
<span class="line">disks<span class="token punctuation">)</span> during the prime generation<span class="token punctuation">;</span> this gives the random number</span>
<span class="line">generator a better chance to gain enough entropy.</span>
<span class="line">We need to generate a lot of random bytes. It is a good idea to perform</span>
<span class="line">some other action <span class="token punctuation">(</span>type on the keyboard, move the mouse, utilize the</span>
<span class="line">disks<span class="token punctuation">)</span> during the prime generation<span class="token punctuation">;</span> this gives the random number</span>
<span class="line">generator a better chance to gain enough entropy.</span>
<span class="line">gpg: key E238EC27 marked as ultimately trusted</span>
<span class="line">public and secret key created and signed.</span>
<span class="line"></span>
<span class="line">gpg: checking the trustdb</span>
<span class="line">gpg: <span class="token number">3</span> marginal<span class="token punctuation">(</span>s<span class="token punctuation">)</span> needed, <span class="token number">1</span> complete<span class="token punctuation">(</span>s<span class="token punctuation">)</span> needed, PGP trust model</span>
<span class="line">gpg: depth: <span class="token number">0</span>  valid:   <span class="token number">1</span>  signed:   <span class="token number">0</span>  trust: <span class="token number">0</span>-, 0q, 0n, 0m, 0f, 1u</span>
<span class="line">pub   2048R/E238EC27 <span class="token number">2024</span>-01-15</span>
<span class="line">      Key fingerprint <span class="token operator">=</span> 9E7B 7AAC 0E59 4BB7 683C  E7B7 E44C A28F E238 EC27</span>
<span class="line">uid                  yiovcopy <span class="token punctuation">(</span>one<span class="token punctuation">)</span> <span class="token operator">&lt;</span>******@qq.com<span class="token operator">&gt;</span></span>
<span class="line">sub   2048R/076007EB <span class="token number">2024</span>-01-15</span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>查看秘钥</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gpg <span class="token parameter variable">-k</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这就是我们的秘钥了</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line highlighted"><span class="token punctuation">[</span>root@yiov jbrepo<span class="token punctuation">]</span><span class="token comment"># gpg -k</span></span>
<span class="line">/root/.gnupg/pubring.gpg</span>
<span class="line">------------------------</span>
<span class="line">pub   2048R/E238EC27 <span class="token number">2024</span>-01-15</span>
<span class="line">uid                  yiovcopy <span class="token punctuation">(</span>one<span class="token punctuation">)</span> <span class="token operator">&lt;</span>******@qq.com<span class="token operator">&gt;</span></span>
<span class="line">sub   2048R/076007EB <span class="token number">2024</span>-01-15</span>
<span class="line"></span></code></pre></div><p>下面给Packages签个名，格式：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gpg <span class="token parameter variable">-abs</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;你的Real name&quot;</span> <span class="token parameter variable">-o</span> Release.gpg Release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入密码，签名成功</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line highlighted"><span class="token punctuation">[</span>root@yiov jbrepo<span class="token punctuation">]</span><span class="token comment"># gpg -abs -r &quot;yiovcopy&quot; -o Release.gpg Release</span></span>
<span class="line">gpg: WARNING: recipients <span class="token punctuation">(</span>-r<span class="token punctuation">)</span> given without using public key encryption</span>
<span class="line"></span>
<span class="line">You need a passphrase to unlock the secret key <span class="token keyword">for</span></span>
<span class="line">user: <span class="token string">&quot;yiovcopy (one) &lt;******@qq.com&gt;&quot;</span></span>
<span class="line"><span class="token number">2048</span>-bit RSA key, ID E238EC27, created <span class="token number">2024</span>-01-15</span>
<span class="line"></span>
<span class="line">File \`Release.gpg&#39; exists. Overwrite? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y</span>
<span class="line"></span></code></pre></div><p>目录下自动生成 <code>Release.gpg</code>，结束</p><figure><img src="https://img.viptv.work/viptv/repo/repo-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="hint-container details"><summary>删除秘钥</summary><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 先删除私钥</span></span>
<span class="line">gpg --delete-secret-key <span class="token string">&quot;你的Real name&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再删除公钥</span></span>
<span class="line">gpg --delete-key <span class="token string">&quot;你的Real name&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传"><span>上传</span></a></h2><p>我们将所有文件打包下载到桌面</p><figure><img src="https://img.viptv.work/viptv/repo/repo-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上传到github仓库</p><figure><img src="https://img.viptv.work/viptv/repo/repo-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你弄了主页，就在设置中将 Github Page 开启</p><figure><img src="https://img.viptv.work/viptv/repo/repo-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="成果" tabindex="-1"><a class="header-anchor" href="#成果"><span>成果</span></a></h2><p>我用 <a href="https://www.postbox.news/downloads" target="_blank" rel="noopener noreferrer">PostBox</a> 添加源，看看效果</p><div class="hint-container tip"><p class="hint-container-title">为什么只有1个呢，不是2个吗</p><p>deb插件中也有control信息，作者没有区分就只有1个</p></div><figure><img src="https://img.viptv.work/viptv/repo/repo-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正常来说是2个都有的，可以尝试手动编写</p><figure><img src="https://img.viptv.work/viptv/repo/repo-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h2><p>每次挨个弄真的很麻烦，我们直接用脚本</p><p>在服务器目录新建一个 <code>update.sh</code> ，粘贴如下命令</p><div class="hint-container tip"><p class="hint-container-title">说明</p><p>目录不同的，可以根据自己的来修改</p></div><p>::: code-group</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dpkg-scanpackages <span class="token parameter variable">--multiversion</span> debs /dev/null <span class="token operator">&gt;</span> Packages</span>
<span class="line"></span>
<span class="line"><span class="token function">gzip</span> <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.gz</span>
<span class="line"><span class="token function">bzip2</span> <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.bz2</span>
<span class="line">xz <span class="token parameter variable">-cf</span> Packages <span class="token operator">&gt;</span> Packages.xz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>cd 进入插件目录，然后再执行脚本</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> /www/wwwroot/jbrepo</span>
<span class="line"></span>
<span class="line"><span class="token function">sh</span> update.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76))])}const g=t(d,[["render",u],["__file","repo.html.vue"]]),h=JSON.parse('{"path":"/tutorial/iPhone/Jailbreak/repo.html","title":"搭建越狱源","lang":"zh-CN","frontmatter":{"description":"搭建越狱源 更新时间：2024-1-12 注意 本次仅讲解如何搬运插件，非编写插件！ 简介 有时候源太多了，插件使用起来觉得繁冗，就考虑是否能整合在一起 实际操作一遍后，搬运真的非常麻烦！所以不建议！！ 仅此记录一下 准备工作 目录结构 shell 连接 服务器（或虚拟机），然后进入 宝塔面板 文件 - 根目录/www/wwwroot ，新建一个 jb...","head":[["meta",{"property":"og:url","content":"https://www.viptv.work/tutorial/iPhone/Jailbreak/repo.html"}],["meta",{"property":"og:site_name","content":"VIPTV - 工作室"}],["meta",{"property":"og:title","content":"搭建越狱源"}],["meta",{"property":"og:description","content":"搭建越狱源 更新时间：2024-1-12 注意 本次仅讲解如何搬运插件，非编写插件！ 简介 有时候源太多了，插件使用起来觉得繁冗，就考虑是否能整合在一起 实际操作一遍后，搬运真的非常麻烦！所以不建议！！ 仅此记录一下 准备工作 目录结构 shell 连接 服务器（或虚拟机），然后进入 宝塔面板 文件 - 根目录/www/wwwroot ，新建一个 jb..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.viptv.work/viptv/repo/repo-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-26T02:18:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-26T02:18:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建越狱源\\",\\"image\\":[\\"https://img.viptv.work/viptv/repo/repo-01.png\\",\\"https://img.viptv.work/viptv/repo/repo-02.png\\",\\"https://img.viptv.work/viptv/repo/repo-03.png\\",\\"https://img.viptv.work/viptv/repo/repo-04.png\\",\\"https://img.viptv.work/viptv/repo/repo-06.png\\",\\"https://img.viptv.work/viptv/repo/repo-07.png\\",\\"https://img.viptv.work/viptv/repo/repo-08.png\\",\\"https://img.viptv.work/viptv/repo/repo-09.png\\",\\"https://img.viptv.work/viptv/repo/repo-10.png\\",\\"https://img.viptv.work/viptv/repo/repo-11.png\\",\\"https://img.viptv.work/viptv/repo/repo-12.png\\",\\"https://img.viptv.work/viptv/repo/repo-13.png\\"],\\"dateModified\\":\\"2024-11-26T02:18:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/about/us\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[{"level":3,"title":"debs","slug":"debs","link":"#debs","children":[]},{"level":3,"title":"CydiaIcon.png","slug":"cydiaicon-png","link":"#cydiaicon-png","children":[]},{"level":3,"title":"index.html","slug":"index-html","link":"#index-html","children":[]},{"level":3,"title":"Packages","slug":"packages","link":"#packages","children":[]},{"level":3,"title":"Release","slug":"release","link":"#release","children":[]}]},{"level":2,"title":"上传","slug":"上传","link":"#上传","children":[]},{"level":2,"title":"成果","slug":"成果","link":"#成果","children":[]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]}],"git":{"createdTime":1732587510000,"updatedTime":1732587510000,"contributors":[{"name":"github-actions[bot]","email":"28900094+github-actions[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.14,"words":2441},"filePathRelative":"tutorial/iPhone/Jailbreak/repo.md","localizedDate":"2024年11月26日","excerpt":"","autoDesc":true}');export{g as comp,h as data};
