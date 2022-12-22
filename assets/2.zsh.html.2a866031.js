import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,d as s,e as n,b as e,f as i,r as c}from"./app.f66cef50.js";const p={},r=s("h2",{id:"配置-powershell-终端-zsh",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置-powershell-终端-zsh","aria-hidden":"true"},"#"),n(" 配置 powershell --> 终端 zsh")],-1),d=s("h3",{id:"准备-安装-zsh",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#准备-安装-zsh","aria-hidden":"true"},"#"),n(" 准备 安装 "),s("code",null,"zsh")],-1),u=s("li",null,[s("p",null,[n("安装 git(不要用"),s("code",null,"scoop"),n("安装"),s("code",null,"git"),n("，后续会出现无法解决的乱码)")])],-1),h=s("code",null,"zsh-5.8-5-x86_64.pkg.tar.zst",-1),m=s("code",null,"zsh-xxx-x86_64.pkg.tar.zst",-1),v={href:"https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64",target:"_blank",rel:"noopener noreferrer"},b=s("li",null,[s("p",null,[n("解压后你的文件中应该包含 "),s("code",null,"etc"),n(" 和 "),s("code",null,"usr"),n(" 类似字眼。将解压出来的所有文件，包含刚刚说的文件。复制到 git-bash 安装的根目录。可能会提示冲突，选择覆盖文件即可。")])],-1),k={href:"https://link.juejin.cn?target=https%3A%2F%2Fpeazip.github.io%2F",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh" aria-hidden="true">#</a> 安装 oh-my-zsh</h3><p>如果想要默认使用 <code>zsh</code>。而不进入 <code>bash</code>。可以在 <code>.bashrc</code> 加上下面代码。(即使 git 由 scoop 安装， .bashrc 也要创建在 ~目录下)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-t</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> <span class="token function">zsh</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载-oh-my-zsh-下载到-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#下载-oh-my-zsh-下载到-oh-my-zsh" aria-hidden="true">#</a> 下载 oh-my-zsh，下载到 <code>~/.oh-my-zsh</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令可能随更新改变，详情查看官网(https://ohmyz.sh/#install)</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># 国内镜像</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置主题-powerlevel10k" tabindex="-1"><a class="header-anchor" href="#配置主题-powerlevel10k" aria-hidden="true">#</a> 配置主题 powerlevel10k</h3><ul><li><p>安装推荐字体，并设置为终端字体(不装会有符号缺失导致乱码问题，文件目录里有保存)</p></li><li><p>安装主题 <code>git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k</code></p></li><li><p>在 <code>.zshrc</code>文件中设置主题 <code>ZSH_THEME=&quot;powerlevel10k/powerlevel10k&quot;</code></p></li><li><p>启动终端，跟着提示进行配置即可（命令行键入<code>p10k configure</code>可以再次通过提示进行配置）</p><ul><li>如果提示配置符号显示乱码，检查终端字体设置，将其改为安装的推荐字体。</li><li>再检查 json 文件里的字体设置，如果有，将其删除</li></ul></li></ul><h3 id="主题、插件定制" tabindex="-1"><a class="header-anchor" href="#主题、插件定制" aria-hidden="true">#</a> 主题、插件定制</h3><ol><li>在 <code>~/.zshrc</code> 中键入</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;random&quot;</span>

<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token function">git</span>
  z <span class="token punctuation">(</span>快速跳转路径 z path,如果有不想要的路径,使用 z <span class="token parameter variable">-x</span> path<span class="token punctuation">)</span>
  <span class="token comment"># bundler</span>
  <span class="token comment"># dotenv</span>
  <span class="token comment"># macos</span>
  <span class="token comment"># rake</span>
  <span class="token comment"># rbenv</span>
  <span class="token comment"># ruby</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装 语法高亮 <code>zsh-syntax-highlighting</code> ：高亮代码提示，更直观的知道命令是否有输入错误</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git
<span class="token builtin class-name">echo</span> <span class="token string">&quot;source <span class="token variable">\${(q-)PWD}</span>/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${ZDOTDIR<span class="token operator">:-</span>$HOME}</span>/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装 自动补全/提示</li></ol><p><code>zsh-users/zsh-autosuggestions</code></p><p>在历史指令中找到与当前输入指令匹配的记录，并高亮显示，如果想直接使用，可以直接通过 右方向键 补全。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>plugins</code> 中添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token comment">#这里的插件放置~/.oh-my-zsh/custom/plugins目录下，然后在plugins后面追加插件名字即可</span>
    <span class="token comment"># other plugins...</span>
    zsh-autosuggestions
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-终端样式" tabindex="-1"><a class="header-anchor" href="#设置-终端样式" aria-hidden="true">#</a> 设置 终端样式</h3><ol><li>改变终端显示大小 <ol><li>在配置 json 文件中，</li></ol></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//...],</span>
<span class="token property">&quot;initialCols&quot;</span><span class="token operator">:</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token comment">// 列(121)，行(32)</span>
<span class="token property">&quot;initialRows&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
<span class="token property">&quot;initialPosition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-1,-1&quot;</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-zinit" tabindex="-1"><a class="header-anchor" href="#安装-zinit" aria-hidden="true">#</a> 安装 <code>zinit</code></h3><ol><li><code>bash -c &quot;$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)&quot;</code></li></ol>`,23);function z(_,f){const a=c("ExternalLinkIcon");return o(),t("div",null,[r,d,s("ul",null,[u,s("li",null,[s("p",null,[n("下载 "),h,n(" 文件。5.8-5 是版本号，当你看到这配文章的时候版本号可能已经发生改变，所以你只需要下载 "),m,n(" 即可。("),s("a",v,[n("安装包地址"),e(a)]),n(")")])]),b,s("li",null,[s("p",null,[n("这里推荐使用 "),s("a",k,[n("peazip.github.io/"),e(a)]),n(" 进行解压。当然如果你有其他的解压工具能解压也行。")])])]),g])}const q=l(p,[["render",z],["__file","2.zsh.html.vue"]]);export{q as default};
