import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.4b209731.js";const t={},o=e(`<h4 id="_1-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u7528" aria-hidden="true">#</a> 1.\u5E38\u7528</h4><p>1.\u751F\u6210\u914D\u7F6E\u6587\u4EF6 \u7EC8\u7AEF tsc --init</p><p>2.\u4FEE\u6539tsconfig.json\u914D\u7F6E &quot;outDir&quot;:&quot;./js&quot;</p><p>&quot;strict&quot;:&quot;false&quot;</p><p>3.\u542F\u52A8\u76D1\u89C6\u4EFB\u52A1</p><p>\u6253\u5F00\u7EC8\u7AEF \u8F93\u5165 <code>tsc -w </code></p><p>\u6216\u8005\uFF1Avscode\u9876\u90E8\u83DC\u5355\u680F\u7684\u7EC8\u7AEF --&gt;\u8FD0\u884C\u4EFB\u52A1 --&gt; \u76D1\u89C6tsconfig.json</p><h4 id="_2-ts-\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-ts-\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E-tsconfig-json" aria-hidden="true">#</a> 2.Ts \u914D\u7F6E\u6587\u4EF6\u8BF4\u660E(tsconfig.json)</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">// 	include	\u7528\u6765\u6307\u5B9A\u54EA\u4E9B ts\u6587\u4EF6\u9700\u8981\u88AB\u7F16\u8BD1</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;./src/**/* &quot;</span>  <span class="token comment">// **\u8868\u793A\u4EFB\u610F\u76EE\u5F55\uFF0C*\u8868\u793A\u4EFB\u610F\u6587\u4EF6</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//	exclude	\u6307\u5B9A\u54EA\u4E9Bts\u6587\u4EF6\u4E0D\u9700\u8981\u88AB\u7F16\u8BD1</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;./src/hello/**/* &quot;</span>
    <span class="token punctuation">]</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// outDir \u6307\u5B9A\u7F16\u8BD1\u540E\u6587\u4EF6\u6240\u5728\u76EE\u5F55</span>
     	<span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span><span class="token string">&quot;./dist&quot;</span>
    
    <span class="token comment">//	target	\u6307\u5B9A\u7F16\u8BD1\u7248\u672C</span>
    	<span class="token property">&quot;target&quot;</span><span class="token operator">:</span><span class="token string">&quot;ES6&quot;</span>  <span class="token comment">// &quot;ESnext&quot; --\u6700\u65B0\u7248ES</span>
    <span class="token comment">// 	module	\u6307\u5B9A\u6A21\u5757\u5316\u65B9\u6848</span>
    	<span class="token property">&quot;module&quot;</span><span class="token operator">:</span><span class="token string">&quot;commonJS&quot;</span> <span class="token comment">//ES2015</span>
    
    <span class="token comment">//	allowJS \u662F\u5426\u5728ts\u6587\u4EF6\u4E2D\u5BFC\u5165js\u6587\u4EF6,\u9ED8\u8BA4\u4E3Afalse</span>
    <span class="token comment">//	\u5373\uFF1A\u5C06js\u6587\u4EF6\u548C\u7F16\u8BD1\u540E\u7684js\u6587\u4EF6\u4E00\u8D77\u653E\u5230\u6307\u5B9A\u7684\u7F16\u8BD1\u76EE\u5F55\u4E2D</span>
    	<span class="token property">&quot;allowJS&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//  checkJS	\u662F\u5426\u68C0\u67E5js\u4EE3\u7801\u662F\u5426\u7B26\u5408\u8BED\u6CD5\u89C4\u8303\uFF0C\u9ED8\u8BA4false</span>
    	<span class="token property">&quot;checkJS&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	removeComments \u662F\u5426\u79FB\u9664\u6CE8\u91CA</span>
    	<span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	strict \u6240\u6709\u4E25\u683C\u68C0\u67E5\u7684\u603B\u5F00\u5173</span>
    <span class="token comment">//	\u5305\u62EC\u4E0B\u9762\u6709\u6807\u8BC6\u4E3A\u4E25\u683C\u68C0\u67E5\u7684\u6240\u6709\u9009\u9879,\u4EE5\u53CA\u6CA1\u6709\u63D0\u53CA\u7684 \u4E25\u683C\u68C0\u67E5\u9009\u9879</span>
    	<span class="token property">&quot;strict&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	\u662F\u5426\u4E25\u683C\u68C0\u67E5\u7A7A\u503C(\u4E25\u683C\u68C0\u67E5)</span>
    	<span class="token property">&quot;stricNullChecks&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	\u662F\u5426\u4E0D\u5141\u8BB8\u9690\u5F0F\u7684any\u7C7B\u578B(\u4E25\u683C\u68C0\u67E5)</span>
    	<span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
    
    <span class="token comment">// 	\u662F\u5426\u4E0D\u5141\u8BB8\u4E0D\u660E\u786E\u7C7B\u578B\u7684this(\u4E25\u683C\u68C0\u67E5)</span>
    	<span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	 \u662F\u5426\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F(\u4E25\u683C\u68C0\u67E5)</span>
    <span class="token comment">// 	 \u5F53\u6709\u5F15\u5165\u6A21\u5757\u65F6\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u4E3A\u4E25\u683C\u6A21\u5F0F(use &#39;strict&#39;\u53EF\u80FD\u4E0D\u4F1A\u663E\u793A\u51FA\u6765)</span>
    	<span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">//	\u662F\u5426\u4E0D\u751F\u6210\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\uFF0C\u9ED8\u8BA4false</span>
    	<span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    <span class="token comment">// 	\u5F53\u6709\u9519\u8BEF\u65F6\uFF0C\u662F\u5426\u4E0D\u751F\u6210\u7F16\u8BD1\u6587\u4EF6\uFF0C\u9ED8\u8BA4false</span>
    	<span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
    
    
    <span class="token comment">// outFile \u5C06\u4EE3\u7801\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6(\u6781\u5C11\u7528)</span>
    <span class="token comment">//\u8868\u793A\u5C06\u6240\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u4EE3\u7801\u5408\u5E76\u5230app.js\u8FD9\u4E2Ajs\u6587\u4EF6\u4E2D</span>
    	<span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span><span class="token string">&quot;./dist/app.js&quot;</span>  
    <span class="token comment">//  lib		\u7528\u6765\u6307\u5B9A\u9879\u76EE\u4E2D\u8981\u4F7F\u7528\u7684\u5E93\uFF08\u6BD4\u5982\u4EE3\u7801\u8865\u5168\u63D0\u793A\uFF09</span>
    	<span class="token string">&quot;lib&quot;</span>  <span class="token comment">// \u4E00\u822C\u4E0D\u4F1A\u52A8\u8FD9\u4E2A</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function p(i,c){return n(),a("div",null,l)}const d=s(t,[["render",p],["__file","Ts\u914D\u7F6E\u8BBE\u7F6E.html.vue"]]);export{d as default};
