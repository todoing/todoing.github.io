import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,d as s,e as n,b as t,f as a,r as i}from"./app.02ae940c.js";const l={},u=a(`<h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// fetch \u662F\u539F\u751Fjs\uFF0Chttp\u6570\u636E\u8BF7\u6C42\u7684\u4E00\u79CD\u65B9\u5F0F</span>
<span class="token comment">// fetch \u8FD4\u56DE Promise\u5BF9\u8C61</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token string">&quot;https://api.uomg.com/api/rand.music?sort=%E7%83%AD%E6%AD%8C%E6%A6%9C&amp;format=json&quot;</span>
<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// res.json \u5C06\u54CD\u5E94\u7684body\uFF0C\u89E3\u6790json\u7684promise</span>

    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>await \u8BED\u6CD5\u6539\u5199</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span>
        <span class="token string">&quot;https://api.uomg.com/api/rand.music?sort=%E7%83%AD%E6%AD%8C%E6%A6%9C&amp;format=json&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Request Failed&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u60C5" aria-hidden="true">#</a> \u8BE6\u60C5</h1><h2 id="\u4E00\u3001\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u672C\u7528\u6CD5</h2><p><code>fetch()</code>\u7684\u529F\u80FD\u4E0E XMLHttpRequest \u57FA\u672C\u76F8\u540C\uFF0C\u4F46\u6709\u4E09\u4E2A\u4E3B\u8981\u7684\u5DEE\u5F02\u3002</p><p>\uFF081\uFF09<code>fetch()</code>\u4F7F\u7528 Promise\uFF0C\u4E0D\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u56E0\u6B64\u5927\u5927\u7B80\u5316\u4E86\u5199\u6CD5\uFF0C\u5199\u8D77\u6765\u66F4\u7B80\u6D01\u3002</p><p>\uFF082\uFF09<code>fetch()</code>\u91C7\u7528\u6A21\u5757\u5316\u8BBE\u8BA1\uFF0CAPI \u5206\u6563\u5728\u591A\u4E2A\u5BF9\u8C61\u4E0A\uFF08Response \u5BF9\u8C61\u3001Request \u5BF9\u8C61\u3001Headers \u5BF9\u8C61\uFF09\uFF0C\u66F4\u5408\u7406\u4E00\u4E9B\uFF1B\u76F8\u6BD4\u4E4B\u4E0B\uFF0CXMLHttpRequest \u7684 API \u8BBE\u8BA1\u5E76\u4E0D\u662F\u5F88\u597D\uFF0C\u8F93\u5165\u3001\u8F93\u51FA\u3001\u72B6\u6001\u90FD\u5728\u540C\u4E00\u4E2A\u63A5\u53E3\u7BA1\u7406\uFF0C\u5BB9\u6613\u5199\u51FA\u975E\u5E38\u6DF7\u4E71\u7684\u4EE3\u7801\u3002</p><p>\uFF083\uFF09<code>fetch()</code>\u901A\u8FC7\u6570\u636E\u6D41\uFF08Stream \u5BF9\u8C61\uFF09\u5904\u7406\u6570\u636E\uFF0C\u53EF\u4EE5\u5206\u5757\u8BFB\u53D6\uFF0C\u6709\u5229\u4E8E\u63D0\u9AD8\u7F51\u7AD9\u6027\u80FD\u8868\u73B0\uFF0C\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u5BF9\u4E8E\u8BF7\u6C42\u5927\u6587\u4EF6\u6216\u8005\u7F51\u901F\u6162\u7684\u573A\u666F\u76F8\u5F53\u6709\u7528\u3002XMLHTTPRequest \u5BF9\u8C61\u4E0D\u652F\u6301\u6570\u636E\u6D41\uFF0C\u6240\u6709\u7684\u6570\u636E\u5FC5\u987B\u653E\u5728\u7F13\u5B58\u91CC\uFF0C\u4E0D\u652F\u6301\u5206\u5757\u8BFB\u53D6\uFF0C\u5FC5\u987B\u7B49\u5F85\u5168\u90E8\u62FF\u5230\u540E\uFF0C\u518D\u4E00\u6B21\u6027\u5410\u51FA\u6765\u3002</p><p>\u5728\u7528\u6CD5\u4E0A\uFF0C<code>fetch()</code>\u63A5\u53D7\u4E00\u4E2A URL \u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u5411\u8BE5\u7F51\u5740\u53D1\u51FA GET \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\u3002\u5B83\u7684\u57FA\u672C\u7528\u6CD5\u5982\u4E0B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u53D6 JSON \u6570\u636E\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.github.com/users/ruanyf&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Request Failed&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=s("code",null,"fetch()",-1),d=s("code",null,"response",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"response.json()",-1),m=a(`<p>Promise \u53EF\u4EE5\u4F7F\u7528 await \u8BED\u6CD5\u6539\u5199\uFF0C\u4F7F\u5F97\u8BED\u4E49\u66F4\u6E05\u6670\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&quot;https://api.github.com/users/ruanyf&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Request Failed&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>await</code>\u8BED\u53E5\u5FC5\u987B\u653E\u5728<code>try...catch</code>\u91CC\u9762\uFF0C\u8FD9\u6837\u624D\u80FD\u6355\u6349\u5F02\u6B65\u64CD\u4F5C\u4E2D\u53EF\u80FD\u53D1\u751F\u7684\u9519\u8BEF\u3002</p><p>\u540E\u6587\u90FD\u91C7\u7528<code>await</code>\u7684\u5199\u6CD5\uFF0C\u4E0D\u4F7F\u7528<code>.then()</code>\u7684\u5199\u6CD5\u3002</p><h2 id="\u4E8C\u3001response-\u5BF9\u8C61-\u5904\u7406-http-\u56DE\u5E94" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001response-\u5BF9\u8C61-\u5904\u7406-http-\u56DE\u5E94" aria-hidden="true">#</a> \u4E8C\u3001Response \u5BF9\u8C61\uFF1A\u5904\u7406 HTTP \u56DE\u5E94</h2><h3 id="_2-1-response-\u5BF9\u8C61\u7684\u540C\u6B65\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-1-response-\u5BF9\u8C61\u7684\u540C\u6B65\u5C5E\u6027" aria-hidden="true">#</a> 2.1 Response \u5BF9\u8C61\u7684\u540C\u6B65\u5C5E\u6027</h3>`,6),h=s("code",null,"fetch()",-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u524D\u9762\u8BF4\u8FC7\uFF0CResponse \u5305\u542B\u7684\u6570\u636E\u901A\u8FC7 Stream \u63A5\u53E3\u5F02\u6B65\u8BFB\u53D6\uFF0C\u4F46\u662F\u5B83\u8FD8\u5305\u542B\u4E00\u4E9B\u540C\u6B65\u5C5E\u6027\uFF0C\u5BF9\u5E94 HTTP \u56DE\u5E94\u7684\u6807\u5934\u4FE1\u606F\uFF08Headers\uFF09\uFF0C\u53EF\u4EE5\u7ACB\u5373\u8BFB\u53D6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/readme.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>response.status</code>\u548C<code>response.statusText</code>\u5C31\u662F Response \u7684\u540C\u6B65\u5C5E\u6027\uFF0C\u53EF\u4EE5\u7ACB\u5373\u8BFB\u53D6\u3002</p><p>\u6807\u5934\u4FE1\u606F\u5C5E\u6027\u6709\u4E0B\u9762\u8FD9\u4E9B\u3002</p><p><strong>Response.ok</strong></p><p><code>Response.ok</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C<code>true</code>\u5BF9\u5E94 HTTP \u8BF7\u6C42\u7684\u72B6\u6001\u7801 200 \u5230 299\uFF0C<code>false</code>\u5BF9\u5E94\u5176\u4ED6\u7684\u72B6\u6001\u7801\u3002</p><p><strong>Response.status</strong></p><p><code>Response.status</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u8868\u793A HTTP \u56DE\u5E94\u7684\u72B6\u6001\u7801\uFF08\u4F8B\u5982 200\uFF0C\u8868\u793A\u6210\u529F\u8BF7\u6C42\uFF09\u3002</p><p><strong>Response.statusText</strong></p><p><code>Response.statusText</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A HTTP \u56DE\u5E94\u7684\u72B6\u6001\u4FE1\u606F\uFF08\u4F8B\u5982\u8BF7\u6C42\u6210\u529F\u4EE5\u540E\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE&quot;OK&quot;\uFF09\u3002</p><p><strong>Response.url</strong></p><p><code>Response.url</code>\u5C5E\u6027\u8FD4\u56DE\u8BF7\u6C42\u7684 URL\u3002\u5982\u679C URL \u5B58\u5728\u8DF3\u8F6C\uFF0C\u8BE5\u5C5E\u6027\u8FD4\u56DE\u7684\u662F\u6700\u7EC8 URL\u3002</p><p><strong>Response.type</strong></p><p><code>Response.type</code>\u5C5E\u6027\u8FD4\u56DE\u8BF7\u6C42\u7684\u7C7B\u578B\u3002\u53EF\u80FD\u7684\u503C\u5982\u4E0B\uFF1A</p><ul><li><code>basic</code>\uFF1A\u666E\u901A\u8BF7\u6C42\uFF0C\u5373\u540C\u6E90\u8BF7\u6C42\u3002</li><li><code>cors</code>\uFF1A\u8DE8\u57DF\u8BF7\u6C42\u3002</li><li><code>error</code>\uFF1A\u7F51\u7EDC\u9519\u8BEF\uFF0C\u4E3B\u8981\u7528\u4E8E Service Worker\u3002</li><li><code>opaque</code>\uFF1A\u5982\u679C<code>fetch()</code>\u8BF7\u6C42\u7684<code>type</code>\u5C5E\u6027\u8BBE\u4E3A<code>no-cors</code>\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u8FD9\u4E2A\u503C\uFF0C\u8BE6\u89C1\u8BF7\u6C42\u90E8\u5206\u3002\u8868\u793A\u53D1\u51FA\u7684\u662F\u7B80\u5355\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u7C7B\u4F3C<code>&lt;form&gt;</code>\u8868\u5355\u7684\u90A3\u79CD\u8DE8\u57DF\u8BF7\u6C42\u3002</li><li><code>opaqueredirect</code>\uFF1A\u5982\u679C<code>fetch()</code>\u8BF7\u6C42\u7684<code>redirect</code>\u5C5E\u6027\u8BBE\u4E3A<code>manual</code>\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u8FD9\u4E2A\u503C\uFF0C\u8BE6\u89C1\u8BF7\u6C42\u90E8\u5206\u3002</li></ul><p><strong>Response.redirected</strong></p><p><code>Response.redirected</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BF7\u6C42\u662F\u5426\u53D1\u751F\u8FC7\u8DF3\u8F6C\u3002</p><h3 id="_2-2-\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F" aria-hidden="true">#</a> 2.2 \u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F</h3><p><code>fetch()</code>\u53D1\u51FA\u8BF7\u6C42\u4EE5\u540E\uFF0C\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u6CE8\u610F\u70B9\uFF1A\u53EA\u6709\u7F51\u7EDC\u9519\u8BEF\uFF0C\u6216\u8005\u65E0\u6CD5\u8FDE\u63A5\u65F6\uFF0C<code>fetch()</code>\u624D\u4F1A\u62A5\u9519\uFF0C\u5176\u4ED6\u60C5\u51B5\u90FD\u4E0D\u4F1A\u62A5\u9519\uFF0C\u800C\u662F\u8BA4\u4E3A\u8BF7\u6C42\u6210\u529F\u3002</p><p>\u8FD9\u5C31\u662F\u8BF4\uFF0C\u5373\u4F7F\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u662F 4xx \u6216 5xx\uFF0C<code>fetch()</code>\u4E5F\u4E0D\u4F1A\u62A5\u9519\uFF08\u5373 Promise \u4E0D\u4F1A\u53D8\u4E3A <code>rejected</code>\u72B6\u6001\uFF09\u3002</p><p>\u53EA\u6709\u901A\u8FC7<code>Response.status</code>\u5C5E\u6027\uFF0C\u5F97\u5230 HTTP \u56DE\u5E94\u7684\u771F\u5B9E\u72B6\u6001\u7801\uFF0C\u624D\u80FD\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\u3002\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/readme.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>response.status</code>\u5C5E\u6027\u53EA\u6709\u7B49\u4E8E 2xx \uFF08200~299\uFF09\uFF0C\u624D\u80FD\u8BA4\u5B9A\u8BF7\u6C42\u6210\u529F\u3002\u8FD9\u91CC\u4E0D\u7528\u8003\u8651\u7F51\u5740\u8DF3\u8F6C\uFF08\u72B6\u6001\u7801\u4E3A 3xx\uFF09\uFF0C\u56E0\u4E3A<code>fetch()</code>\u4F1A\u5C06\u8DF3\u8F6C\u7684\u72B6\u6001\u7801\u81EA\u52A8\u8F6C\u4E3A 200\u3002</p><p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u5224\u65AD<code>response.ok</code>\u662F\u5426\u4E3A<code>true</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u8BF7\u6C42\u6210\u529F } else { // \u8BF7\u6C42\u5931\u8D25 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-response-headers-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-3-response-headers-\u5C5E\u6027" aria-hidden="true">#</a> 2.3 Response.headers \u5C5E\u6027</h3>`,27),g=s("code",null,"Response.headers",-1),y={href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>Headers \u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528<code>for...of</code>\u5FAA\u73AF\u8FDB\u884C\u904D\u5386\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// \u6216\u8005 for (let [key, value] of response.headers.entries()) { console.log(\`\${key} : \${value}\`); }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Headers \u5BF9\u8C61\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u7528\u6765\u64CD\u4F5C\u6807\u5934\u3002</p><ul><li><code>Headers.get()</code>\uFF1A\u6839\u636E\u6307\u5B9A\u7684\u952E\u540D\uFF0C\u8FD4\u56DE\u952E\u503C\u3002</li><li><code>Headers.has()</code>\uFF1A \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5305\u542B\u67D0\u4E2A\u6807\u5934\u3002</li><li><code>Headers.set()</code>\uFF1A\u5C06\u6307\u5B9A\u7684\u952E\u540D\u8BBE\u7F6E\u4E3A\u65B0\u7684\u952E\u503C\uFF0C\u5982\u679C\u8BE5\u952E\u540D\u4E0D\u5B58\u5728\u5219\u4F1A\u6DFB\u52A0\u3002</li><li><code>Headers.append()</code>\uFF1A\u6DFB\u52A0\u6807\u5934\u3002</li><li><code>Headers.delete()</code>\uFF1A\u5220\u9664\u6807\u5934\u3002</li><li><code>Headers.keys()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\uFF0C\u53EF\u4EE5\u4F9D\u6B21\u904D\u5386\u6240\u6709\u952E\u540D\u3002</li><li><code>Headers.values()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\uFF0C\u53EF\u4EE5\u4F9D\u6B21\u904D\u5386\u6240\u6709\u952E\u503C\u3002</li><li><code>Headers.entries()</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\uFF0C\u53EF\u4EE5\u4F9D\u6B21\u904D\u5386\u6240\u6709\u952E\u503C\u5BF9\uFF08<code>[key, value]</code>\uFF09\u3002</li><li><code>Headers.forEach()</code>\uFF1A\u4F9D\u6B21\u904D\u5386\u6807\u5934\uFF0C\u6BCF\u4E2A\u6807\u5934\u90FD\u4F1A\u6267\u884C\u4E00\u6B21\u53C2\u6570\u51FD\u6570\u3002</li></ul><p>\u4E0A\u9762\u7684\u6709\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u4FEE\u6539\u6807\u5934\uFF0C\u90A3\u662F\u56E0\u4E3A\u7EE7\u627F\u81EA Headers \u63A5\u53E3\u3002\u5BF9\u4E8E HTTP \u56DE\u5E94\u6765\u8BF4\uFF0C\u4FEE\u6539\u6807\u5934\u610F\u4E49\u4E0D\u5927\uFF0C\u51B5\u4E14\u5F88\u591A\u6807\u5934\u662F\u53EA\u8BFB\u7684\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u4FEE\u6539\u3002</p><p>\u8FD9\u4E9B\u65B9\u6CD5\u4E2D\uFF0C\u6700\u5E38\u7528\u7684\u662F<code>response.headers.get()</code>\uFF0C\u7528\u4E8E\u8BFB\u53D6\u67D0\u4E2A\u6807\u5934\u7684\u503C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// application/json; charset=utf-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Headers.keys()</code>\u548C<code>Headers.values()</code>\u65B9\u6CD5\u7528\u6765\u5206\u522B\u904D\u5386\u6807\u5934\u7684\u952E\u540D\u548C\u952E\u503C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u952E\u540D for(let key of myHeaders.keys()) { console.log(key); }</span>
<span class="token comment">// \u952E\u503C for(let value of myHeaders.values()) { console.log(value); }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Headers.forEach()</code>\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u904D\u5386\u6240\u6709\u7684\u952E\u503C\u548C\u952E\u540D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function _(x,R){const e=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C"),r,n("\u63A5\u6536\u5230\u7684"),d,n("\u662F\u4E00\u4E2A "),s("a",k,[n("Stream \u5BF9\u8C61"),t(e)]),n("\uFF0C"),v,n("\u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u53D6\u51FA\u6240\u6709\u5185\u5BB9\uFF0C\u5E76\u5C06\u5176\u8F6C\u4E3A JSON \u5BF9\u8C61\u3002")]),m,s("p",null,[h,n("\u8BF7\u6C42\u6210\u529F\u4EE5\u540E\uFF0C\u5F97\u5230\u7684\u662F\u4E00\u4E2A "),s("a",f,[n("Response \u5BF9\u8C61"),t(e)]),n("\u3002\u5B83\u5BF9\u5E94\u670D\u52A1\u5668\u7684 HTTP \u56DE\u5E94\u3002")]),b,s("p",null,[n("Response \u5BF9\u8C61\u8FD8\u6709\u4E00\u4E2A"),g,n("\u5C5E\u6027\uFF0C\u6307\u5411\u4E00\u4E2A "),s("a",y,[n("Headers \u5BF9\u8C61"),t(e)]),n("\uFF0C\u5BF9\u5E94 HTTP \u56DE\u5E94\u7684\u6240\u6709\u6807\u5934\u3002")]),w])}const T=p(l,[["render",_],["__file","fetch.html.vue"]]);export{T as default};