import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.f66cef50.js";const t={},o=e(`<h4 id="_1-常用" tabindex="-1"><a class="header-anchor" href="#_1-常用" aria-hidden="true">#</a> 1.常用</h4><p>1.生成配置文件 终端 tsc --init</p><p>2.修改tsconfig.json配置 &quot;outDir&quot;:&quot;./js&quot;</p><p>&quot;strict&quot;:&quot;false&quot;</p><p>3.启动监视任务</p><p>打开终端 输入 <code>tsc -w </code></p><p>或者：vscode顶部菜单栏的终端 --&gt;运行任务 --&gt; 监视tsconfig.json</p><h4 id="_2-ts-配置文件说明-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-ts-配置文件说明-tsconfig-json" aria-hidden="true">#</a> 2.Ts 配置文件说明(tsconfig.json)</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">// 	include	用来指定哪些 ts文件需要被编译</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;./src/**/* &quot;</span>  <span class="token comment">// **表示任意目录，*表示任意文件</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//	exclude	指定哪些ts文件不需要被编译</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;./src/hello/**/* &quot;</span>
    <span class="token punctuation">]</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// outDir 指定编译后文件所在目录</span>
     	<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span><span class="token string">&quot;./dist&quot;</span>
    
    <span class="token comment">//	target	指定编译版本</span>
    	<span class="token property">&quot;target&quot;</span><span class="token operator">:</span><span class="token string">&quot;ES6&quot;</span>  <span class="token comment">// &quot;ESnext&quot; --最新版ES</span>
    <span class="token comment">// 	module	指定模块化方案</span>
    	<span class="token property">&quot;module&quot;</span><span class="token operator">:</span><span class="token string">&quot;commonJS&quot;</span> <span class="token comment">//ES2015</span>
    
    <span class="token comment">//	allowJS 是否在ts文件中导入js文件,默认为false</span>
    <span class="token comment">//	即：将js文件和编译后的js文件一起放到指定的编译目录中</span>
    	<span class="token property">&quot;allowJS&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//  checkJS	是否检查js代码是否符合语法规范，默认false</span>
    	<span class="token property">&quot;checkJS&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	removeComments 是否移除注释</span>
    	<span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	strict 所有严格检查的总开关</span>
    <span class="token comment">//	包括下面有标识为严格检查的所有选项,以及没有提及的 严格检查选项</span>
    	<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	是否严格检查空值(严格检查)</span>
    	<span class="token property">&quot;stricNullChecks&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	是否不允许隐式的any类型(严格检查)</span>
    	<span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	是否不允许不明确类型的this(严格检查)</span>
    	<span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	 是否使用严格模式(严格检查)</span>
    <span class="token comment">// 	 当有引入模块时，就会默认为严格模式(use &#39;strict&#39;可能不会显示出来)</span>
    	<span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	是否不生成编译后的文件，默认false</span>
    	<span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">// 	当有错误时，是否不生成编译文件，默认false</span>
    	<span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    
    <span class="token comment">// outFile 将代码合并为一个文件(极少用)</span>
    <span class="token comment">//表示将所有全局作用域中的代码合并到app.js这个js文件中</span>
    	<span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span><span class="token string">&quot;./dist/app.js&quot;</span>  
    <span class="token comment">//  lib		用来指定项目中要使用的库（比如代码补全提示）</span>
    	<span class="token string">&quot;lib&quot;</span>  <span class="token comment">// 一般不会动这个</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function p(i,c){return n(),a("div",null,l)}const d=s(t,[["render",p],["__file","Ts配置设置.html.vue"]]);export{d as default};
