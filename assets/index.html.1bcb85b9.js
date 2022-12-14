import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,d as n,e as s,b as e,f as t,r as c}from"./app.f66cef50.js";const u={},o={href:"https://juejin.cn/post/7146975493278367752",target:"_blank",rel:"noopener noreferrer"},r=t(`<h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef0c7b0f2bec49e4b38a28f19215c110~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="算法.png"></p><h3 id="如何学习算法" tabindex="-1"><a class="header-anchor" href="#如何学习算法" aria-hidden="true">#</a> 如何学习算法</h3><p><strong>1、先掌握对应的数据结构</strong></p><p>以面试中最常见的二叉树为例</p><p>先了解如何创建一个二叉树，通过创建的过程，加深对该数据结构的理解，非常有助于了去解答对应的题目</p><p><strong>2、分类练习</strong></p><p>分类练习，即按照每种数据结构进行统一练习</p><p>例如：这段时间只练习二叉树的题目，通过集中的训练，对二叉树有整体的认知。了解前、中、后序遍历的特点、了解二叉搜索树、了解各种题型等体系知识</p><p>同时做好对应的笔记，不建议一上来就直接用 leetcode 刷题</p><h3 id="算法基础知识" tabindex="-1"><a class="header-anchor" href="#算法基础知识" aria-hidden="true">#</a> 算法基础知识</h3><h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4><p>表示代码执行的次数，时间与算法中语句执行次数成正比例，哪个算法中执行语句次数多，它花费的时间就越长，时间复杂度是取代码中最复杂的代码来计算</p><p><strong>时间复杂度按时间的大小，从小到大排序依次是</strong><code>O(1)&lt;O(logn)&lt;O(n)&lt;O(nlogn)&lt;O(n²)&lt;O(n³)&lt;O(2ⁿ)&lt;O(n!)</code></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f77a4d8b52da4776ae01cceea7b2c200~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="time.png"></p><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><p>在算法运算过程中用到的额外的存储空间（不包含原始值的内存大小），反映的对内存占用的趋势，而不是具体内存</p><p><strong>最经典的场景</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>就是利用空间去换时间，降低时间复杂度，减少计算时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="前端-数据结构" tabindex="-1"><a class="header-anchor" href="#前端-数据结构" aria-hidden="true">#</a> 前端 数据结构</h2><p><strong>数组、栈、队列、树、堆、链表、哈希表、图</strong></p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>数组是最简单、也是最常用的数据结构</p><p>数组是可以在内存中连续存储多个元素的结构，在内存中的分配也是连续的</p><p><strong>特点：查询快，增删慢</strong></p><p>1）查询快：数组的地址是连续的，我们通过数组的首地址可以找到数组，通过数组的索引可以快速查找某一个元素</p><p>2）增删慢：数组的长度是固定的，我们想要增加/删除一个元素，必须创建一个新的数组，把原数组的数据复制过来</p><h4 id="最长递增子序列" tabindex="-1"><a class="header-anchor" href="#最长递增子序列" aria-hidden="true">#</a> 最长递增子序列</h4><p>先安排一个非常火的题目，方便小伙伴们热热身</p><blockquote><p>该算法在 vue3 diff 算法中有用到，作用是找到最长递归子序列后，可以减少子元素的移动次数</p></blockquote><p>一个整数数组 nums，找到其中一组最长递增子序列的值</p><p><code>最长递增子序列</code>是指：子序列中的所有元素单调递增</p><p>例如：<code>[3,5,7,1,2,8]</code> 的 <code>LIS</code> 是 <code>[3,5,7,8]</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 该算法用的是动态规划的思想，时间复杂度为n²，并不是最优算法，最优算法应该是二分查找，最优时间复杂度为nlogn

function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  // 创建一个和原数组等长的数组dp，用来存储每一项的最长递增子序列，比如[1,2,2] 表示第二项和第三项的最长递增子序列都为2
  // 该数组每一项初始值都为1，记录当前项的最长递增子序列，后面的项会在当前项的最长递增子序列个数进行累加
  <span class="token key attr-name">let dp</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Array(nums.length).fill(1);</span>
  // 双层for循环，每一项都和之前的所有项一一进行比较，计算出该项的最长递增子序列个数，存储到dp中
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; nums.length; i++) {</span>
    // 当前项依次和之前的每一项进行比较，累加出当前项的最长递增子序列
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; j &lt; i; j++) {</span>
      if (nums[j] &lt; nums[i]) {
        // 比较当前项已有的最大值和之前项最大值，比如当比较到第三项[1,2,2]时，如第三项比第二项大，所以第三项的计算结果为[1,2,3]
        <span class="token key attr-name">dp[i]</span> <span class="token punctuation">=</span> <span class="token value attr-value">Math.max(dp[i], dp[j] + 1);</span>
      }
    }
  }
  // 取出一组最长递增子序列的具体值（注意：最长递增子序列有可能有多组值，这里是只取出其中一组值）
  // 找到dp中的最大值，该值就是nums的最长递增子序列的个数
  <span class="token key attr-name">let max</span> <span class="token punctuation">=</span> <span class="token value attr-value">Math.max(...dp);</span>
  <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">max; i &gt;= 1; i--) {</span>
    // 倒序遍历，根据长度获取对应的值
    findArrNode(dp, i, result, nums);
  }
  return result;
}
function findArrNode(dp, value, result, arr) {
  // 找到符合条件最后一项的下标，这样才能保证数组的顺序是正确的
  <span class="token key attr-name">let index</span> <span class="token punctuation">=</span> <span class="token value attr-value">dp.lastIndexOf(value);</span>
  // 存储对应的值
  result.unshift(arr[index]);
  // 对dp进行截取，保证只取最大项之前的数据
  <span class="token key attr-name">dp.length</span> <span class="token punctuation">=</span> <span class="token value attr-value">index + 1;</span>
}

// 测试
console.log(lengthOfLIS([9, 1, 7, 10, 4, 8, 5, 2])); // [1, 4, 5]
console.log(lengthOfLIS([1, 4, 3, 5, 2, 6, 0])); // [1, 3, 5, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>亮点：网上一般都是只计算出最长递增子序列的长度，这里计算出一组具体的最长递增子序列的值</p></blockquote>`,35),d={href:"https://link.juejin.cn/?target=https%3A%2F%2Fleetcode.cn%2Fproblems%2Flongest-increasing-subsequence%2Fsolution%2Fshi-pin-tu-jie-zui-chang-shang-sheng-zi-xu-lie-by-%2F",target:"_blank",rel:"noopener noreferrer"},v=t(`<h4 id="买卖股票问题" tabindex="-1"><a class="header-anchor" href="#买卖股票问题" aria-hidden="true">#</a> 买卖股票问题</h4><p>给定一个整数数组，其中第 <code>i</code> 个元素代表了第 <code>i</code>天的股票价格； 非负整数 <code>fee</code> 代表了交易股票的手续费用，求返回获得利润的最大值</p><p>例如数组为：<code>[1, 12, 13, 9, 15, 8, 6, 16]</code>，<code>fee</code>为 2，求获得利润的最大值</p><p>注：每笔买卖都需要支付一次手续费</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>/**
 * 贪心算法求解
 * @param {array} list - 股票每天的价格列表
 * @param {number} fee - 手续费
 * */
function buyStock(list, fee) {
  // min为当前的最小值，即买入点
  <span class="token key attr-name">let min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[0],</span>
    <span class="token key attr-name">sum</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt; list.length; i++) {</span>
    // 从1开始，依次判断
    if (list[i] &lt; min) {
      // 寻找数组的最小值
      <span class="token key attr-name">min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i];</span>
    } else {
      // 计算如果当天卖出是否赚钱
      <span class="token key attr-name">let temp</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i] - min - fee;</span>
      if (temp &gt; 0) {
        // 赚钱 存数据
        <span class="token key attr-name">sum +</span><span class="token punctuation">=</span> <span class="token value attr-value">temp;</span>
        // 关键代码：重新计算min，分两种情况，如果后面继续涨，则默认继续持有；若后面跌，则以后面的价格重新买入
        <span class="token key attr-name">min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i] - fee;</span>
      }
    }
  }
  return sum;
}
console.log(buyStock([1, 12, 13, 9, 15, 8, 6, 16], 2)); // 22

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="买卖股票之交易明细" tabindex="-1"><a class="header-anchor" href="#买卖股票之交易明细" aria-hidden="true">#</a> 买卖股票之交易明细</h4><p>继续研究买卖股票问题</p><p>通过上题，我们知道<code>[1, 12, 13, 9, 15, 8, 6, 16]</code>最终的结果为<code>22</code></p><p>但具体的交易明细是什么，哪几天发生了交易，怎么验证<code>22</code>的结果是否正确呢？</p><p><strong>思路</strong></p><p>1） 增加 result 对象，把每笔赚钱的交易都记录下来 2） 新增 minIndex 属性，用来记录每次买入值（最小值）的变化 3） 当 minIndex 不变时，用新的记录替换掉老的记录 4） 遍历 result 对象，取出所存储的交易明细</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>/**
 * 贪心算法求解交易明细
 * @param {array} list - 股票每天的价格列表
 * @param {number} fee - 手续费
 * */
function buyStock(list, fee) {
  // 增加result对象，把每笔赚钱的交易都记录下来
  <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">{};</span>
  <span class="token key attr-name">let min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[0],</span>
    // 增加minIndex 用来记录每次买入值（最小值）的变化
    <span class="token key attr-name">minIndex</span> <span class="token punctuation">=</span> <span class="token value attr-value">0,</span>
    <span class="token key attr-name">sum</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt; list.length; i++) {</span>
    if (list[i] &lt; min) {
      <span class="token key attr-name">minIndex</span> <span class="token punctuation">=</span> <span class="token value attr-value">i;</span>
      <span class="token key attr-name">min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i];</span>
    } else {
      <span class="token key attr-name">let temp</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i] - min - fee;</span>
      if (temp &gt; 0) {
        <span class="token key attr-name">sum +</span><span class="token punctuation">=</span> <span class="token value attr-value">temp;</span>
        <span class="token key attr-name">min</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[i] - fee;</span>
        // 赚钱 存数据
        // 当minIndex不变时，用新的记录替换调老的记录
        <span class="token key attr-name">result[minIndex]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[list[minIndex], list[i]];</span>
      }
    }
  }
  <span class="token key attr-name">let arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // 遍历result对象，取出所存储的交易明细
  <span class="token key attr-name">Object.keys(result).forEach(key</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; {</span>
    arr.push(result[key]);
  });
  return {
    sum,
    arr
  };
}

console.log(buyStock([1, 12, 13, 9, 15, 8, 6, 16], 2));
// 打印结果： {sum: 22, arr: [[1, 13], [9, 15], [6, 16]]}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3 次交易明细</strong> 1 买入，13 卖出； 9 买入，15 卖出； 6 买入，16 卖出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>22 = (13 - 1 - 2) + (15 - 9 -2) + (16 - 6 - 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/601f28d3e08c4c60b5120bc69168be55~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="buyNums.jpg"></p><h4 id="硬币找零问题" tabindex="-1"><a class="header-anchor" href="#硬币找零问题" aria-hidden="true">#</a> 硬币找零问题</h4><p>给定不同面额的硬币，coins 和一个总金额 amount</p><p>编写一个函数来计算可以凑成总金额所需的<code>最少的硬币个数</code>，如果没有任何一种硬币组合能组成总金额，返回 -1</p><p>示例： 输入 coins = <code>[1, 2, 5]</code>, amount = <code>11</code></p><p>输出 <code>3</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function findCoins(coins, amount) {
  <span class="token key attr-name">if (coins.length</span> <span class="token punctuation">=</span><span class="token value attr-value">== 0) return -1;</span>
  // 用于保存每个目标总额对应的最小硬币个数
  <span class="token key attr-name">const f</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // 提前定义已知情况
  <span class="token key attr-name">f[0]</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
  // 遍历 [1, amount] 这个区间的硬币总额
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt;= amount; i++) {</span>
    // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
    <span class="token key attr-name">f[i]</span> <span class="token punctuation">=</span> <span class="token value attr-value">Infinity;</span>
    // 循环遍历每个可用硬币的面额
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; j &lt; coins.length; j++) {</span>
      // 若硬币面额小于目标总额，则问题成立
      <span class="token key attr-name">if (i - coins[j] &gt;</span><span class="token punctuation">=</span> <span class="token value attr-value">0) {</span>
        // 状态转移方程
        <span class="token key attr-name">f[i]</span> <span class="token punctuation">=</span> <span class="token value attr-value">Math.min(f[i], f[i - coins[j]] + 1);</span>
      }
    }
  }
  // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
  <span class="token key attr-name">if (f[amount]</span> <span class="token punctuation">=</span><span class="token value attr-value">== Infinity) {</span>
    return -1;
  }
  // 若有解，直接返回解的内容
  return f[amount];
}

console.log(findCoins([1, 2, 5], 11)); // 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),k={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2FTranskai%2Fp%2F12444261.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<h4 id="数组拼接最小值" tabindex="-1"><a class="header-anchor" href="#数组拼接最小值" aria-hidden="true">#</a> 数组拼接最小值</h4><p>一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个</p><p>如<code>[3, 45, 12]</code>，拼接的最小值为<code>12345</code></p><p><strong>思路： 利用 sort 排序</strong></p><p>a 和 b 两个数字可以有两种组合：ab 和 ba，若 ab&lt;ba 则 ab 排在 ba 前面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printMinNumber</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// sort底层是快排</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compare<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 找到ab 和 ba 这两种组合的最小值</span>
<span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> front <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> after <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> front <span class="token operator">-</span> after<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printMinNumber</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="奇偶排序" tabindex="-1"><a class="header-anchor" href="#奇偶排序" aria-hidden="true">#</a> 奇偶排序</h4><p>一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分</p><p><strong>思路: 设定两个指针</strong></p><p>1）第一个指针 start，从数组第一个元素出发，向尾部前进 2）第二个指针 end，从数组的最后一个元素出发，向头部前进 3）start 遍历到偶数，end 遍历到奇数时，交换两个数的位置 4）当 start&gt;end 时，完成交换</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function exchangeOddEven(arr) {
  <span class="token key attr-name">let start</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
  <span class="token key attr-name">let end</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.length - 1;</span>
  // 当start &gt; end时，完成交换
  while (start &lt; end) {
    // 找到第一个偶数
    <span class="token key attr-name">while (arr[start] % 2</span> <span class="token punctuation">=</span><span class="token value attr-value">== 1) {</span>
      start++;
    }
    // 找到第一个奇数
    <span class="token key attr-name">while (arr[end] % 2</span> <span class="token punctuation">=</span><span class="token value attr-value">== 0) {</span>
      end--;
    }
    // 重点：始终要加上 start &lt; end的限制，否则会出现中间两个数的位置交换错误
    if (start &lt; end) {
      // 奇数和偶数交换位置
      <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">arr[start</span><span class="token punctuation">]</span></span><span class="token key attr-name">, arr[end]]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[arr[end], arr[start]];</span>
    }
  }
  return arr;
}

<span class="token key attr-name">let test</span> <span class="token punctuation">=</span> <span class="token value attr-value">[2, 4, 5, 3, 1];</span>
console.log(exchangeOddEven(test)); // [1, 3, 5, 4, 2]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和" aria-hidden="true">#</a> 两数之和</h4><p>给定一个整数数组 <code>nums</code> 和一个目标值 <code>target</code> 在该数组中找出和为目标值的两个整数，并返回他们</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>要求时间复杂度：O(n)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路：利用 map 存储已遍历的元素 (典型的空间换时间)</strong></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 时间复杂度O(n)、 空间复杂度O(n)
function twoNumAdd(arr, target) {
  if (Array.isArray(arr)) {
    // 使用map将遍历过的数字存起来
    <span class="token key attr-name">let map</span> <span class="token punctuation">=</span> <span class="token value attr-value">{};</span>
    <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length; i++) {</span>
      // 从map中查找是否有key 等于 target-nums[i]，如果取到了，则条件成立，返回结果
      <span class="token key attr-name">if (map[target - arr[i]] !</span><span class="token punctuation">=</span><span class="token value attr-value">= undefined) {</span>
        return [target - arr[i], arr[i]];
      } else {
        // 条件不成立，则将已遍历的值存起来
        <span class="token key attr-name">map[arr[i]]</span> <span class="token punctuation">=</span> <span class="token value attr-value">i;</span>
      }
    }
  }
  return [];
}

console.log(twoNumAdd([8, 2, 6, 5, 4, 1, 3], 7)); // [2, 5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和" aria-hidden="true">#</a> 三数之和</h4><p>给定一个数组 nums，判断 nums 中是否存在三个元素<code>a，b，c</code> ，使得 <code>a + b + c = target</code></p><p>找出所有满足条件且不重复的三元组合</p><p><strong>思路：</strong></p><p>将数组排序，然后固定数组中某一项，用<code>双端指针</code>的方式，查到两数之和加上该项的值等于目标值，将三数之和转化为两数之和</p><p>题目中说明可能会出现多组结果，所以我们要考虑好去重</p><p>1）为了方便去重，我们首先将数组从小到大排列</p><p>2）对数组进行遍历，取当前遍历的数<code>nums[i]</code>为一个基准数</p><p>3）在寻找数组中设定两个起点，最左侧的<code>left(i+1)</code>和最右侧的<code>right(length-1)</code></p><p>4）判断<code>nums[i] + nums[left] + nums[right]</code>是否等于目标值<code>target</code></p><p>5）如果相等，存储该结果，并分别将 left 和 right 各移动一位</p><p>6）如果大于目标值，将 right 向左移动一位，向结果逼近</p><p>7）如果小于目标值，将 left 向右移动一位，向结果逼近</p><p>8）一轮遍历结束后 i++，进入下一轮查询</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function findThree(arr, target) {
  arr.sort();
  <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length; i++) {</span>
    // 跳过重复的arr[i]值, 比如[2, 1, 1],跳过第二个1
    <span class="token key attr-name">if (i &amp;&amp; arr[i]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[i - 1]) continue;</span>
    <span class="token key attr-name">let left</span> <span class="token punctuation">=</span> <span class="token value attr-value">i + 1;</span>
    <span class="token key attr-name">let right</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.length - 1;</span>
    while (left &lt; right) {
      <span class="token key attr-name">let sum</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr[i] + arr[left] + arr[right];</span>
      if (sum &gt; target) {
        right--;
      } else if (sum &lt; target) {
        left++;
      } else {
        // arr[left++], 先取arr[left]，然后left++, 两步合成一步； arr[right--]同样的逻辑
        result.push([arr[i], arr[left++], arr[right--]]);
        <span class="token key attr-name">while (arr[left]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[left - 1]) {</span>
          // 跳过重复的arr[left]值,
          left++;
        }
        <span class="token key attr-name">while (arr[right]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[right + 1]) {</span>
          // 跳过重复的arr[right]值
          right--;
        }
      }
    }
  }
  return result;
}
console.log(findThree([5, 2, 1, 1, 3, 4, 6], 8)); //  [1, 1, 6] [1, 2, 5] [1, 3, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四数之和" tabindex="-1"><a class="header-anchor" href="#四数之和" aria-hidden="true">#</a> 四数之和</h4><p>给定一个整数数组 nums，判断 nums 中是否存在四个元素<code>a，b，c，d</code> ，使得 <code>a + b + c + d = target</code>，找出所有满足条件且不重复的四元组合</p><p><strong>思路</strong></p><p>到这里其实我们就能发现一些规律，可以像三数之和那样，通过大小指针来逼近结果，从而达到降低一层时间复杂度的效果（重点：将 4 个数相加，转化为三个数，降低层级）</p><p>不管是几数之和，都可以用这种方法来进行降级优化</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function findFour(arr, target) {
  if (arr.length &lt; 4) return [];
  <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  arr.sort();
  // 最外层控制循环次数，循环次数为arr.length - 3
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length - 3; i++) {</span>
    // 跳过数组中，重复的起始值
    <span class="token key attr-name">if (i &amp;&amp; arr[i]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[i - 1]) continue;</span>
    // 因为数组已进行排序，所有一旦超过目标值，那么以后的值也都比目标值大，所以可以直接结束这一轮循环
    if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] &gt; target) break;
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">i + 1; j &lt; arr.length - 2; j++) {</span>
      // 注意范围，第二个值的最小值是倒数第3位（以下的代码和三个数求和的逻辑一致）
      // 跳过数组中，第二个值重复的
      <span class="token key attr-name">if (j &gt; i + 1 &amp;&amp; arr[j]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[j - 1]) continue;</span>
      // 第三个数的下标
      <span class="token key attr-name">let left</span> <span class="token punctuation">=</span> <span class="token value attr-value">j + 1;</span>
      <span class="token key attr-name">let right</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.length - 1;</span>
      while (left &lt; right) {
        <span class="token key attr-name">let sum</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr[i] + arr[j] + arr[left] + arr[right];</span>
        if (sum &gt; target) {
          right--;
        } else if (sum &lt; target) {
          left++;
        } else {
          // 坑点，注意添加后，left++， right--, 确保循环继续执行
          result.push([arr[i], arr[j], arr[left++], arr[right--]]);
          <span class="token key attr-name">while (arr[left]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[left - 1]) {</span>
            // 跳过重复的值
            left++;
          }
          <span class="token key attr-name">while (arr[right]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr[right + 1]) {</span>
            // 跳过重复的值
            right--;
          }
        }
      }
    }
  }
  return result;
}

console.log(findFour([2, 1, 5, 4, 3, 6, 0, 7], 10)); // [0, 1, 2, 7]   [0, 1, 3, 6] [0, 1, 4, 5] [0, 2, 3, 5] [1, 2, 3, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连续整数之和" tabindex="-1"><a class="header-anchor" href="#连续整数之和" aria-hidden="true">#</a> 连续整数之和</h4><p>输入一个正整数<code>S</code>，打印出所有和为 S 的连续整数序列</p><p>例如：输入<code>15</code>，连续整数序列有：<code>1+2+3+4+5 = 4+5+6 = 7+8 = 15</code>，所以打印出 3 个连续序列<code>1-5，5-6和7-8</code></p><p><strong>思路:</strong></p><p>1）创建一个容器 child，用于表示当前的子序列，初始元素为 1,2</p><p>2）记录子序列的开头元素 small 和末尾元素 big</p><p>3）big 向右移动子序列末尾增加一个数；small 向右移动子序列开头减少一个数</p><p>4）当子序列的和大于目标值，small 向右移动，子序列的和小于目标值，big 向右移动</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function FindContinuousSequence(sum) {
  <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // 记录当前的结果
  <span class="token key attr-name">let child</span> <span class="token punctuation">=</span> <span class="token value attr-value">[1, 2];</span>
  <span class="token key attr-name">let small</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; // 初始值1</span>
  <span class="token key attr-name">let big</span> <span class="token punctuation">=</span> <span class="token value attr-value">2; //</span>
  <span class="token key attr-name">let currentSum</span> <span class="token punctuation">=</span> <span class="token value attr-value">3; // 当前数字之和</span>
  while (big &lt; sum) {
    // big等于sum时，child中只剩一个数，不满足连续正数序列的要求，结束循环
    while (currentSum &lt; sum &amp;&amp; big &lt; sum) {
      child.push(++big);
      // currentSum为当前child的和
      <span class="token key attr-name">currentSum +</span><span class="token punctuation">=</span> <span class="token value attr-value">big;</span>
    }
    while (currentSum &gt; sum &amp;&amp; small &lt; big) {
      child.shift();
      // 因为删除了最小值，所以small也要响应变化，增加1
      <span class="token key attr-name">currentSum -</span><span class="token punctuation">=</span> <span class="token value attr-value">small++;</span>
    }
    <span class="token key attr-name">if (currentSum</span> <span class="token punctuation">=</span><span class="token value attr-value">== sum &amp;&amp; child.length &gt; 1) {</span>
      // child.length大于1，剔除一个数等于sum的情况
      // child.slice返回一个新的数组
      result.push(child.slice());
      child.push(++big);
      <span class="token key attr-name">currentSum +</span><span class="token punctuation">=</span> <span class="token value attr-value">big;</span>
    }
  }
  return result;
}

console.log(FindContinuousSequence(15)); // [1, 2, 3, 4, 5] [4, 5, 6] [7, 8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="打印矩阵" tabindex="-1"><a class="header-anchor" href="#打印矩阵" aria-hidden="true">#</a> 打印矩阵</h4><p>输入: [[1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9]]</p><p>要求输出: <code>[1,2,3,6,9,8,7,4,5]</code></p><p>题目要求的是按照顺时针的顺序，从外向内遍历每一个元素，并将他们按顺序返回出来</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function printMatrix(arr) {
  // map函数用来完成当前矩阵最外一圈的遍历
  // @param1{Array}二维数组 arr 表示当前矩阵
  // @param2{Array}一维数组 result 用来保存遍历结果
  <span class="token key attr-name">let map</span> <span class="token punctuation">=</span> <span class="token value attr-value">(arr, result) =&gt; {</span>
    // 矩阵的高度即行数
    <span class="token key attr-name">let n</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.length;</span>
    // 遍历矩阵的每一行
    <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; n; i++) {</span>
      // 若第一行 按顺序插入
      <span class="token key attr-name">if (i</span> <span class="token punctuation">=</span><span class="token value attr-value">== 0) {</span>
        <span class="token key attr-name">result</span> <span class="token punctuation">=</span> <span class="token value attr-value">result.concat(arr[i]);</span>
      <span class="token key attr-name">} else if (i</span> <span class="token punctuation">=</span><span class="token value attr-value">== n - 1) {</span>
        // 若最后一行 倒序插入
        <span class="token key attr-name">result</span> <span class="token punctuation">=</span> <span class="token value attr-value">result.concat(arr[i].reverse());</span>
      } else {
        // 若中间行 插入该行最后一个元素 并将该元素从矩阵中删除
        result.push(arr[i].pop());
      }
    }
    // 将已经遍历的第一行和最后一行从矩阵中删除
    arr.pop();
    arr.shift();
    // 遍历插入最左侧一列 此时删除首位两行后矩阵高度已变为n-2
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">n - 3; j &gt;= 0; j--) {</span>
      // 避免arr[j]长度为空时插入undefined
      if (arr[j].length) {
        result.push(arr[j].shift());
      }
    }
    // 截止条件 矩阵有元素就继续递归
    if (arr.length) {
      // 把已将遍历元素删除的矩阵进行递归
      return map(arr, result);
    } else {
      return result;
    }
  };
  // 将初始矩阵传入, 保存结果的数组初始为空
  return map(arr, []);
}

<span class="token key attr-name">let matrix</span> <span class="token punctuation">=</span> <span class="token value attr-value">[</span>
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">1, 2, 3</span><span class="token punctuation">]</span></span>,
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">4, 5, 6</span><span class="token punctuation">]</span></span>,
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">7, 8, 9</span><span class="token punctuation">]</span></span>
];
console.log(printMatrix(matrix)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h4><p>从第 3 项开始，当前项等于前两项之和： <code>1 1 2 3 5 8 13 21……</code></p><p>使用动态规划，将复杂的问题拆分，也就是：<code>F(N) = F(N - 1) + F(N - 2)</code>，然后用数组将已经计算过的值存起来</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function fib(n) {
  // 使用dp数组，将之前计算的结果存起来，防止栈溢出
  <span class="token key attr-name">let dp</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  <span class="token key attr-name">dp[0]</span> <span class="token punctuation">=</span> <span class="token value attr-value">1n; //  bigint  可以用来表示超过2^53-1的大整数</span>
  <span class="token key attr-name">dp[1]</span> <span class="token punctuation">=</span> <span class="token value attr-value">1n;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">2; i &lt;= n; i++) {</span>
    <span class="token key attr-name">dp[i]</span> <span class="token punctuation">=</span> <span class="token value attr-value">dp[i - 1] + dp[i - 2]; // 注意： arr[i]</span>
  }
  return dp[n];
}
console.log(fib(1000));


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3><p>二叉树是树结构中一种典型的结构，每个节点最多只能有两个子节点，一个是左侧子节点，一个是右侧子节点</p><p><strong>二叉树图例</strong></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/769e466e565145e09629c27db818c216~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="twoTree.png"></p><p><strong>二叉树遍历的规律</strong></p><p>前序遍历：<strong>根节点</strong> + 左子树前序遍历 + 右子树前序遍历 中序遍历：左子树中序遍历 + <strong>根节点</strong> + 右子数中序遍历 后序遍历：左子树后序遍历 + 右子树后序遍历 + <strong>根节点</strong></p><h4 id="创建一棵二叉树" tabindex="-1"><a class="header-anchor" href="#创建一棵二叉树" aria-hidden="true">#</a> 创建一棵二叉树</h4><p>要求：若新节点的值比父节点小，则放到父节点的左子树上；反之放到右子树上</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 二叉树节点
class Node {
  <span class="token key attr-name">constructor(data, left</span> <span class="token punctuation">=</span> <span class="token value attr-value">null, right = null) {</span>
    <span class="token key attr-name">this.data</span> <span class="token punctuation">=</span> <span class="token value attr-value">data;</span>
    <span class="token key attr-name">this.left</span> <span class="token punctuation">=</span> <span class="token value attr-value">left;</span>
    <span class="token key attr-name">this.right</span> <span class="token punctuation">=</span> <span class="token value attr-value">right;</span>
  }
}

// 构建二叉树
class Tree {
  constructor() {
    <span class="token key attr-name">this.root</span> <span class="token punctuation">=</span> <span class="token value attr-value">null;</span>
  }
  insert(data) {
    <span class="token key attr-name">var node</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Node(data, null, null);</span>
    // 创建根节点
    if (!this.root) {
      <span class="token key attr-name">this.root</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
      return;
    }
    <span class="token key attr-name">var current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.root;</span>
    <span class="token key attr-name">var parent</span> <span class="token punctuation">=</span> <span class="token value attr-value">null;</span>
    while (current) {
      <span class="token key attr-name">parent</span> <span class="token punctuation">=</span> <span class="token value attr-value">current;</span>
      // 值比父节点小，放到父节点的左子树上
      if (data &lt; parent.data) {
        <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.left;</span>
        // 找到最左侧的节点，将新的节点设置为该节点的左子树节点
        if (!current) {
          <span class="token key attr-name">parent.left</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
          return;
        }
      } else {
        // 值比父节点大，放到父节点的右子树上
        <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.right;</span>
        if (!current) {
          <span class="token key attr-name">parent.right</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
          return;
        }
      }
    }
  }
  // 定义前序遍历的方法
  <span class="token key attr-name">static preOrder(node, arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[]) {</span>
    if (node) {
      arr.push(node.data);
      this.preOrder(node.left, arr);
      this.preOrder(node.right, arr);
    }
    return arr;
  }
  // 定义中序遍历的方法
  <span class="token key attr-name">static middleOrder(node, arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[]) {</span>
    if (node) {
      this.middleOrder(node.left, arr);
      arr.push(node.data);
      this.middleOrder(node.right, arr);
    }
    return arr;
  }
  // 定义后序遍历的方法
  <span class="token key attr-name">static laterOrder(node, arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[]) {</span>
    if (node) {
      this.laterOrder(node.left, arr);
      this.laterOrder(node.right, arr);
      arr.push(node.data);
    }
    return arr;
  }
  // 获取二叉树的最大层级
  <span class="token key attr-name">static getDeep(node, deep</span> <span class="token punctuation">=</span> <span class="token value attr-value">0) {</span>
    if (!node) {
      return deep;
    }
    deep++;
    // 获取左子树的层级
    <span class="token key attr-name">let left</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.getDeep(node.left, deep);</span>
    // 获取右子树的层级
    <span class="token key attr-name">let right</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.getDeep(node.right, deep);</span>
    // 取层级最大的值
    return Math.max(left, right);
  }
}

// 创建二叉树，依次插入新节点
<span class="token key attr-name">var t</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Tree();</span>
t.insert(5);
t.insert(3);
t.insert(6);
t.insert(2);
t.insert(4);
t.insert(7);
t.insert(8);
t.insert(1);
t.insert(9);
// 打印二叉树
console.log(t);

// 前序遍历  [5, 3, 2, 1, 4, 6, 7, 8, 9]
console.log(Tree.preOrder(t.root));
// 中序遍历 [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(Tree.middleOrder(t.root));
// 后序遍历 [1, 2, 4, 3, 9, 8, 7, 6, 5]
console.log(Tree.laterOrder(t.root));
// 获取二叉树的最大层级： 5
console.log(Tree.getDeep(t.root));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构建结果</strong></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8d2c094ebd84d87855877250fc9a51e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="findTree.png"></p><h4 id="非递归版本实现中序遍历" tabindex="-1"><a class="header-anchor" href="#非递归版本实现中序遍历" aria-hidden="true">#</a> 非递归版本实现中序遍历</h4><p><strong>中序遍历的两种方式</strong></p><p>1）方式一：递归版本，如上文的<code>middleOrder</code>方法</p><p>2）方式二：非递归版本（回溯算法）实现中序遍历</p><p><strong>非递归版本的好处：避免循环递归时栈溢出的情况，效率更高</strong></p><p><strong>非递归版本流程</strong></p><p>1）步骤 1 ：左孩子入栈 -&gt; 直至左孩子为空的节点 2）步骤 2 ：节点出栈 -&gt; 访问该节点 3）步骤 3 ：以右子树为目标节点，再依次执行 步骤 1、2、3</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function middleTraverse(root) {
  <span class="token key attr-name">const result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // stack 用来存储回溯算法中的节点
  <span class="token key attr-name">const stack</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">root;</span>
  while (current || stack.length &gt; 0) {
    // 找到最左侧的节点
    while (current) {
      // 依次将左子树节点存到栈中
      stack.push(current);
      <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.left;</span>
    }
    // 节点出栈
    <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">stack.pop();</span>
    // 存储该节点的值
    result.push(current.data);
    // 获取该节点的右子树节点
    <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.right;</span>
  }
  return result;
}

// t 为上文创建的二叉树
console.log(middleTraverse(t.root));

// 打印结果： [1, 2, 3, 4, 5, 6, 7, 8, 9]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重建二叉树" tabindex="-1"><a class="header-anchor" href="#重建二叉树" aria-hidden="true">#</a> 重建二叉树</h4><p>输入某二叉树的前序遍历和中序遍历的结果，重建出该二叉树</p><p><strong>原理</strong></p><p>前序遍历：<strong>根节点</strong> + 左子树前序遍历 + 右子树前序遍历 中序遍历：左子树中序遍历 + <strong>根节点</strong> + 右字数中序遍历</p><p><strong>重建二叉树流程</strong></p><p>1）前序遍历第一个值为根结点<code>root</code>，然后找到根节点在中序遍历的下标</p><p>2）将中序遍历 拆分为左子树中序遍历 和 右子树中序遍历</p><p>3）将前序遍历 拆分为左子树前序遍历 和 右子树前序遍历</p><p>4）利用左子树中序遍历 + 左子树前序遍历，递归创建左子树节点</p><p>5）利用右子树中序遍历 + 右子树前序遍历，递归创建右子树节点</p><p>6）递归重建二叉树</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 重建二叉树
function reConstruction(pre, mid) {
  <span class="token key attr-name">if (pre.length</span> <span class="token punctuation">=</span><span class="token value attr-value">== 0) {</span>
    return null;
  }
  // 前序遍历长度为1时，该节点为叶子节点
  <span class="token key attr-name">if (pre.length</span> <span class="token punctuation">=</span><span class="token value attr-value">== 1) {</span>
    return new Node(pre[0]);
  }
  // 前序遍历的第一个值为根节点
  <span class="token key attr-name">const value</span> <span class="token punctuation">=</span> <span class="token value attr-value">pre[0];</span>
  // 找到根节点在中序遍历的位置
  <span class="token key attr-name">const index</span> <span class="token punctuation">=</span> <span class="token value attr-value">mid.indexOf(value);</span>
  // 将中序遍历 分为左子树中序遍历 和 右子数中序遍历
  <span class="token key attr-name">const midLeft</span> <span class="token punctuation">=</span> <span class="token value attr-value">mid.slice(0, index);</span>
  <span class="token key attr-name">const midRight</span> <span class="token punctuation">=</span> <span class="token value attr-value">mid.slice(index + 1);</span>
  // 左子树前序遍历的长度为index
  // 将前序遍历 分为左子树前序遍历 和 右子树前序遍历
  <span class="token key attr-name">const preLeft</span> <span class="token punctuation">=</span> <span class="token value attr-value">pre.slice(1, index + 1);</span>
  <span class="token key attr-name">const preRight</span> <span class="token punctuation">=</span> <span class="token value attr-value">pre.slice(index + 1);</span>
  // 创建根节点
  <span class="token key attr-name">const node</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Node(value);</span>
  // 利用左子树中序遍历 + 左子树前序遍历，递归创建左子树节点
  <span class="token key attr-name">node.left</span> <span class="token punctuation">=</span> <span class="token value attr-value">reConstruction(preLeft, midLeft);</span>
  // 递归创建右子树节点
  <span class="token key attr-name">node.right</span> <span class="token punctuation">=</span> <span class="token value attr-value">reConstruction(preRight, midRight);</span>
  return node;
}

class Node {
  <span class="token key attr-name">constructor(data, left</span> <span class="token punctuation">=</span> <span class="token value attr-value">null, right = null) {</span>
    <span class="token key attr-name">this.data</span> <span class="token punctuation">=</span> <span class="token value attr-value">data;</span>
    <span class="token key attr-name">this.left</span> <span class="token punctuation">=</span> <span class="token value attr-value">left;</span>
    <span class="token key attr-name">this.right</span> <span class="token punctuation">=</span> <span class="token value attr-value">right;</span>
  }
}

reConstruction([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重建结果</strong></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5100cba460f4570a55b5c76c8fb9724~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="reTree.png"></p>`,88),b={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.easycode.top%2Fbinarytree.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<h4 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树" aria-hidden="true">#</a> 二叉查找树</h4><p><strong>二叉查找树</strong>（BST）是二叉树的一种，特点是所有的左节点比父节点的值小，所有的右节点比父节点的值大，并且任意左、右子树也分别为二叉查找树</p><p><strong>二叉查找树图例</strong></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01b04cd346094624bdc13d16ba2748e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="二叉查找树.jpg"></p><p><strong>主要作用是搜索和动态排序</strong></p><h4 id="二叉查找树搜索某个节点" tabindex="-1"><a class="header-anchor" href="#二叉查找树搜索某个节点" aria-hidden="true">#</a> 二叉查找树搜索某个节点</h4><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// 查找一个节点</span>
function <span class="token function">findNode</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">data</span> <span class="token operator">===</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">data</span> <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findNode</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findNode</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查找值为6的节点</span>
<span class="token comment">// t 为上文创建的二叉树</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二叉查找树的最大值和最小值" tabindex="-1"><a class="header-anchor" href="#二叉查找树的最大值和最小值" aria-hidden="true">#</a> 二叉查找树的最大值和最小值</h4><p>最右侧的节点为二叉查找树的最大值 最左侧的节点为二叉查找树的最小值</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 最大值：最右侧的节点
function getMax(root) {
  <span class="token key attr-name">let max</span> <span class="token punctuation">=</span> <span class="token value attr-value">null;</span>
  <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">root;</span>
  <span class="token key attr-name">while (current !</span><span class="token punctuation">=</span><span class="token value attr-value">= null) {</span>
    <span class="token key attr-name">max</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.data;</span>
    <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.right;</span>
  }
  return max;
}

// 最小值：最左侧的节点
function getMix(root) {
  <span class="token key attr-name">let mix</span> <span class="token punctuation">=</span> <span class="token value attr-value">null;</span>
  <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">root;</span>
  <span class="token key attr-name">while (current !</span><span class="token punctuation">=</span><span class="token value attr-value">= null) {</span>
    <span class="token key attr-name">mix</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.data;</span>
    <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.left;</span>
  }
  return mix;
}
console.log(getMax(t.root), &quot;max&quot;); // 9
console.log(getMix(t.root), &quot;min&quot;); // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二叉查找树的前序遍历" tabindex="-1"><a class="header-anchor" href="#二叉查找树的前序遍历" aria-hidden="true">#</a> 二叉查找树的前序遍历</h4><p>给一个整数数组，判断该数组是不是某二叉查找树的前序遍历的结果 如果是输出 true，否则输出 false</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 判断一个整数数组，是否为某二叉查找树的前序遍历的结果
function preOrderOfBST(list) {
  if (list &amp;&amp; list.length &gt; 0) {
    // 前序遍历，第一个值为根节点
    <span class="token key attr-name">var root</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[0];</span>
    // 找到数组中，第一个比根节点大的节点，即为右子树的节点
    <span class="token key attr-name">for (var i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; list.length; i++) {</span>
      if (list[i] &gt; root) {
        break;
      }
    }
    // 遍历右子树的节点，要求所有右子树的节点都比根节点大
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">i; j &lt; list.length; j++) {</span>
      if (list[j] &lt; root) {
        return false;
      }
    }
    <span class="token key attr-name">var left</span> <span class="token punctuation">=</span> <span class="token value attr-value">true;</span>
    // 同理，递归判断左子树是否符合二叉搜索树的规则
    if (i &gt; 1) {
      <span class="token key attr-name">left</span> <span class="token punctuation">=</span> <span class="token value attr-value">preOrderOfBST(list.slice(1, i + 1));</span>
    }
    <span class="token key attr-name">var right</span> <span class="token punctuation">=</span> <span class="token value attr-value">true;</span>
    // 递归判断右子树是否符合二叉搜索树的规则
    if (i &lt; list.length) {
      <span class="token key attr-name">right</span> <span class="token punctuation">=</span> <span class="token value attr-value">preOrderOfBST(list.slice(i, list.length));</span>
    }

    // 左、右子树 都符合要求，则是一个二叉搜索树
    return left &amp;&amp; right;
  }
}

console.log(preOrderOfBST([5, 3, 2, 1, 4, 6, 7, 8, 9])); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二叉查找树的后续遍历" tabindex="-1"><a class="header-anchor" href="#二叉查找树的后续遍历" aria-hidden="true">#</a> 二叉查找树的后续遍历</h4><p>给一个整数数组，判断该数组是不是某二叉搜索树的后续遍历的结果 如果是则输出 true,否则输出 false</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 判断一个整数数组，是否为某二叉搜索树的后序遍历的结果
function laterOrderOfBST(list) {
  if (list &amp;&amp; list.length &gt; 0) {
    // 后续遍历，最后一个节点为根节点
    <span class="token key attr-name">var root</span> <span class="token punctuation">=</span> <span class="token value attr-value">list[list.length - 1];</span>
    <span class="token key attr-name">for (var i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; list.length - 1; i++) {</span>
      if (list[i] &gt; root) {
        break;
      }
    }
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">i; j &lt; list.length - 1; j++) {</span>
      if (list[j] &lt; root) {
        return false;
      }
    }
    <span class="token key attr-name">var left</span> <span class="token punctuation">=</span> <span class="token value attr-value">true;</span>
    // 判断左子树
    if (i &gt; 0) {
      <span class="token key attr-name">left</span> <span class="token punctuation">=</span> <span class="token value attr-value">laterOrderOfBST(list.slice(0, i));</span>
    }
    <span class="token key attr-name">var right</span> <span class="token punctuation">=</span> <span class="token value attr-value">true;</span>
    // 判断右子树
    if (i &lt; list.length - 1) {
      <span class="token key attr-name">right</span> <span class="token punctuation">=</span> <span class="token value attr-value">laterOrderOfBST(list.slice(i, list.length - 1));</span>
    }
    return left &amp;&amp; right;
  }
}

console.log(laterOrderOfBST([1, 2, 4, 3, 9, 8, 7, 6, 5])); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="找到二叉树和为某一值的路径" tabindex="-1"><a class="header-anchor" href="#找到二叉树和为某一值的路径" aria-hidden="true">#</a> 找到二叉树和为某一值的路径</h4><p><code>利用回溯算法</code>：如果不符合要求，退回来，换一条路再试</p><p>找到和为<code>11</code>的所有路径：结果为<code>[5, 3, 2, 1], [5, 6]</code></p><p><strong>二叉树结构如下</strong></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8d2c094ebd84d87855877250fc9a51e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="findTree.png"></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/**
 * 找到和为某一值的路径
 * @param {object} node - 二叉树
 * @param {number} num - 和（目标值）
 * @param {array} stack - 栈
 * @param {number} sum - 当前路径的和
 * @param {array} result - 存储所有的结果
 * */</span>
function <span class="token function">findPath</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> num<span class="token punctuation">,</span> stack = []<span class="token punctuation">,</span> sum = 0<span class="token punctuation">,</span> result = []<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  stack.<span class="token function">push</span><span class="token punctuation">(</span>node.data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  sum += node.data<span class="token punctuation">;</span>

  <span class="token comment">// 找到所有的节点路径(包含叶子节点和子节点的所有情况之和)</span>
  if <span class="token punctuation">(</span>sum === num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if (!node.left &amp;&amp; !node.right &amp;&amp; sum === num) {  // 找到所有的叶子节点路径</span>
    result.<span class="token function">push</span><span class="token punctuation">(</span>stack.<span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">(</span>node.left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">findPath</span><span class="token punctuation">(</span>node.left<span class="token punctuation">,</span> num<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">(</span>node.right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">findPath</span><span class="token punctuation">(</span>node.right<span class="token punctuation">,</span> num<span class="token punctuation">,</span> stack<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 回溯算法：不符合要求，退回来，换一条路再试</span>
  <span class="token comment">// 叶子节点直接pop；子节点中的所有的节点递归完成后再pop</span>
  stack.<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  return result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// t 为上文创建的二叉树</span>
console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findPath</span><span class="token punctuation">(</span>t.root<span class="token punctuation">,</span> 11<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [5, 3, 2, 1], [5, 6]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3><p><strong>堆实际上是一棵完全二叉树</strong></p><p><strong>大顶堆</strong>： 每个的节点元素值不小于其子节点</p><p><strong>小顶堆</strong>： 每个的节点元素值不大于其子节点</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b432c37814a439ebe97e0add46acabb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="heap.png"></p><h4 id="堆的作用" tabindex="-1"><a class="header-anchor" href="#堆的作用" aria-hidden="true">#</a> 堆的作用</h4><p>在庞大的数据中，找到最大的 m 个数或者最小的 m 个数，可以借助堆来完成这个过程，时间复杂度为<code>nlogm</code></p><p>如果先排序，再取前 m 个数，最小时间复杂度<code>nlogn</code></p><p><code>nlogm</code> &lt; <code>nlogn</code>，堆排序时间复杂度更优</p><p><strong>堆节点与其叶子节点的规律</strong></p><p>1）堆中父节点为<code>k</code>，它的左子节点下标为<code>2k+1</code>，右子节点是<code>2k+2</code></p><p>2）所有序号大于<code>length/2</code>的结点都是叶子节点, <code>0</code> 到 <code>length/2-1</code> 为父节点</p><h4 id="堆的排序过程" tabindex="-1"><a class="header-anchor" href="#堆的排序过程" aria-hidden="true">#</a> 堆的排序过程</h4><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9afe1feb80ba4572935c8dad5b7dd41e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="heapSort.gif"></p><h4 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h4><p>从一堆数中，找到前 m 个最小值</p><p>如图，从下面的大顶堆中，找到前 4 个最小值，结果为<code>[6, 5, 2, 1]</code></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/772ce75504ad4d6c88bd1e8a016bfb21~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="maxHeap.png"></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>function <span class="token function">heapSort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  if <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> list.length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return []<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createHeap</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
  for <span class="token punctuation">(</span>let i = m<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    if <span class="token punctuation">(</span>list[i] <span class="token operator">&lt;</span> list[0]<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 找到前m个数的最小值，依次将最小值放到最前面</span>
      [list[i]<span class="token punctuation">,</span> list[0]] = [list[0]<span class="token punctuation">,</span> list[i]]<span class="token punctuation">;</span>
      <span class="token function">ajustHeap</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 取出前m个数</span>
  return list.<span class="token function">splice</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 构建大顶堆（构建的顺序是从下往上，先找到最后一个父节点，然后从最后一个父节点开始构建，然后依次往上构建，将最大值逐步替换成根节点）</span>
function <span class="token function">createHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 找到堆中所有的非叶子节点（找到最后一个叶子节点，该节点之前都是非叶子节点）</span>
  for <span class="token punctuation">(</span>let i = Math.<span class="token function">floor</span><span class="token punctuation">(</span>length <span class="token operator">/</span> 2<span class="token punctuation">)</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> 0<span class="token punctuation">;</span> i--<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 堆中，父节点为i，则子节点为2*i+1、2*i+2；反过来，知道了子节点为length,则最后一个子节点为Math.floor(length / 2) - 1。</span>
    <span class="token function">ajustHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调整大顶堆，将最大值逐步替换成根节点</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调整大顶堆（注意：调整的顺序是从上往下，将根节点替换后，先调整根节点，然后依次往下调整，对应的子节点如果发生替换，要重新调整下对应子节点，保证都满足子节点不大于父节点的条件，直到该大顶推全部调整完成）</span>
<span class="token comment">// 比如，当调节根节点时，[a0, a1, a2], a2&gt; a0, a2替换a0，则要重新调节a2这个分支上的节点，保证都满足子节点不大于父节点的条件</span>
function <span class="token function">ajustHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> index<span class="token punctuation">,</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  for <span class="token punctuation">(</span>let i = 2 <span class="token operator">*</span> index <span class="token operator">+</span> 1<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i = 2 <span class="token operator">*</span> i <span class="token operator">+</span> 1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 父节点为i，则子节点为2*i+1</span>
    if <span class="token punctuation">(</span>i <span class="token operator">+</span> 1 <span class="token operator">&lt;</span> length &amp;&amp; arr[i <span class="token operator">+</span> 1] <span class="token operator">&gt;</span> arr[i]<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 找到arr[i + 1] 和 arr[i] 中的最大值</span>
      i++<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果子节点比父节点大，交换两者的位置，将最大值移动到顶部</span>
    if <span class="token punctuation">(</span>arr[index] <span class="token operator">&lt;</span> arr[i]<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      [arr[index]<span class="token punctuation">,</span> arr[i]] = [arr[i]<span class="token punctuation">,</span> arr[index]]<span class="token punctuation">;</span>
      index = i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
      break<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token function">heapSort</span><span class="token punctuation">(</span>[5<span class="token punctuation">,</span> 10<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 15<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 12<span class="token punctuation">,</span> 6]<span class="token punctuation">,</span> 4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [6, 5, 2, 1]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h3><p>JS 中树结构一般类似这样</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;1&quot;</span>,
    title: <span class="token string">&quot;节点1&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-1&quot;</span>,
        title: <span class="token string">&quot;节点1-1&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-2&quot;</span>,
        title: <span class="token string">&quot;节点1-2&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;2&quot;</span>,
    title: <span class="token string">&quot;节点2&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;2-1&quot;</span>,
        title: <span class="token string">&quot;节点2-1&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表转树" tabindex="-1"><a class="header-anchor" href="#列表转树" aria-hidden="true">#</a> 列表转树</h4><p><strong>使用对象存储数据, 典型的空间换时间</strong></p><p>时间复杂度为<code>O(n)</code>、空间复杂度为<code>O(n)</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function listToTree(data) {
  // 使用对象重新存储数据, 空间换时间
  <span class="token key attr-name">let map</span> <span class="token punctuation">=</span> <span class="token value attr-value">{};</span>
  // 存储最后结果
  <span class="token key attr-name">let treeData</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // 遍历原始数据data，存到map中，id为key，值为数据
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; data.length; i++) {</span>
    <span class="token key attr-name">map[data[i].id]</span> <span class="token punctuation">=</span> <span class="token value attr-value">data[i];</span>
  }

  // 遍历对象
  for (let i in map) {
    // 根据 parentId 找到的是父节点
    if (map[i].parentId) {
      if (!map[map[i].parentId].children) {
        <span class="token key attr-name">map[map[i].parentId].children</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
      }
      // 将子节点 放到 父节点的 children中
      map[map[i].parentId].children.push(map[i]);
    } else {
      // parentId 找不到对应值，说明是根结点，直接插到根数组中
      treeData.push(map[i]);
    }
  }

  return treeData;
}

// 测试
<span class="token key attr-name">let list</span> <span class="token punctuation">=</span> <span class="token value attr-value">[</span>
  { id: 1, title: &quot;child1&quot;, parentId: 0 },
  { id: 2, title: &quot;child2&quot;, parentId: 0 },
  { id: 6, title: &quot;child2_1&quot;, parentId: 2 },
  { id: 4, title: &quot;child1_1&quot;, parentId: 1 },
  { id: 5, title: &quot;child1_2&quot;, parentId: 1 },
  { id: 3, title: &quot;child3&quot;, parentId: 0 },
  { id: 7, title: &quot;child3_1&quot;, parentId: 3 }
];
console.log(listToTree(list));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深度优先遍历" tabindex="-1"><a class="header-anchor" href="#深度优先遍历" aria-hidden="true">#</a> 深度优先遍历</h4><p>递归实现，写法简单，时间复杂度为<code>O(n²)</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> deepTree<span class="token punctuation">(</span>tree, arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  tree.forEach<span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    arr.push<span class="token punctuation">(</span>data.id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    // 遍历子树
    data.children <span class="token operator">&amp;&amp;</span> deepTree<span class="token punctuation">(</span>data.children, arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">let</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;1&quot;</span>,
    title: <span class="token string">&quot;节点1&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-1&quot;</span>,
        title: <span class="token string">&quot;节点1-1&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-2&quot;</span>,
        title: <span class="token string">&quot;节点1-2&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;2&quot;</span>,
    title: <span class="token string">&quot;节点2&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;2-1&quot;</span>,
        title: <span class="token string">&quot;节点2-1&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span>deepTree<span class="token punctuation">(</span>tree<span class="token punctuation">))</span><span class="token punctuation">;</span> // <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span>, <span class="token string">&#39;1-1&#39;</span>, <span class="token string">&#39;1-2&#39;</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;2-1&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="广度优先遍历" tabindex="-1"><a class="header-anchor" href="#广度优先遍历" aria-hidden="true">#</a> 广度优先遍历</h4><p><strong>思路</strong></p><p>1）维护一个队列，队列的初始值为树结构根节点组成的列表，重复执行以下步骤，直到队列为空</p><p>2）取出队列中的第一个元素，进行访问相关操作，然后将其后代元素（如果有）全部追加到队列最后</p><p>时间复杂度为<code>O(n)</code>、空间复杂度为<code>O(n)</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 广度优先
<span class="token keyword">function</span> rangeTree<span class="token punctuation">(</span>tree, arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">let</span> node,
    list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.tree<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>node <span class="token operator">=</span> list.shift<span class="token punctuation">(</span><span class="token punctuation">))</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr.push<span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    node.children <span class="token operator">&amp;&amp;</span> list.push<span class="token punctuation">(</span><span class="token punctuation">..</span>.node.children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">let</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;1&quot;</span>,
    title: <span class="token string">&quot;节点1&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-1&quot;</span>,
        title: <span class="token string">&quot;节点1-1&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;1-2&quot;</span>,
        title: <span class="token string">&quot;节点1-2&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    id: <span class="token string">&quot;2&quot;</span>,
    title: <span class="token string">&quot;节点2&quot;</span>,
    children: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id: <span class="token string">&quot;2-1&quot;</span>,
        title: <span class="token string">&quot;节点2-1&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span>rangeTree<span class="token punctuation">(</span>tree<span class="token punctuation">))</span><span class="token punctuation">;</span> //  <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;1-1&#39;</span>, <span class="token string">&#39;1-2&#39;</span>, <span class="token string">&#39;2-1&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找节点" tabindex="-1"><a class="header-anchor" href="#查找节点" aria-hidden="true">#</a> 查找节点</h4><p>递归实现，写法简单</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>function <span class="token function">findTreeNode</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">data</span> of tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 条件成立 直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">data</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">findTreeNode</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 结果存在再返回</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

let tree <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;1&quot;</span></span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;节点1&quot;</span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;1-1&quot;</span></span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;节点1-1&quot;</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;1-2&quot;</span></span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;节点1-2&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;2&quot;</span></span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;节点2&quot;</span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;2-1&quot;</span></span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string-literal singleline"><span class="token string">&quot;节点2-1&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token function">findTreeNode</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token keyword">data</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">data</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string-literal singleline"><span class="token string">&quot;节点1-1&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印结果： {id: &#39;1-1&#39;, title: &#39;节点1-1&#39;}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><h4 id="版本号排序" tabindex="-1"><a class="header-anchor" href="#版本号排序" aria-hidden="true">#</a> 版本号排序</h4><p>比较 <code>a, b</code> 两个版本大小：a 为<code>1.rc.2.1</code>，b 为<code>1.beta.2</code></p><p>其中 <code>rc &gt; beta &gt; alpha</code> 例子 1.2.3 &lt; 1.2.4 &lt; 1.3.0.alpha.1 &lt; 1.3.0.alpha.2 &lt; 1.3.0.beta.1 &lt; 1.3.0.rc.1 &lt; 1.3.0</p><p>要求：当 a &gt; b 是返回 1； 当 a = b 是返回 0； 当 a &lt; b 是返回 -1；</p><p><strong>思路</strong></p><p>1）首先先写一个映射表，建立不同版本的映射关系</p><p>2）将不同版本的英文字母，替换成对应的数字，转化为对字符串进行比较</p><p>3）字符串比较的原则：取出相同位置的数字进行递归比较</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function compareVersion(str1, str2) {
  // 创建rc beta alpha，对应的权重值，将版本号转化为纯数字
  <span class="token key attr-name">let map</span> <span class="token punctuation">=</span> <span class="token value attr-value">{ rc: 3, beta: 2, alpha: 1 };</span>
  <span class="token key attr-name">Object.keys(map).forEach(key</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; {</span>
    <span class="token key attr-name">str1</span> <span class="token punctuation">=</span> <span class="token value attr-value">str1.replace(key, map[key]);</span>
    <span class="token key attr-name">str2</span> <span class="token punctuation">=</span> <span class="token value attr-value">str2.replace(key, map[key]);</span>
  });
  <span class="token key attr-name">const arr1</span> <span class="token punctuation">=</span> <span class="token value attr-value">str1.split(&quot;.&quot;);</span>
  <span class="token key attr-name">const arr2</span> <span class="token punctuation">=</span> <span class="token value attr-value">str2.split(&quot;.&quot;);</span>
  function fn(arr1, arr2) {
    <span class="token key attr-name">let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
    while (true) {
      // 取出相同位置的数字
      <span class="token key attr-name">const s1</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr1[i];</span>
      <span class="token key attr-name">const s2</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr2[i];</span>
      i++;
      // 若s1 或 s2 不存在，说明相同的位置已比较完成，剩余的位置比较arr1 与 arr2的长度，长的版本号大
      <span class="token key attr-name">if (s1</span> <span class="token punctuation">=</span><span class="token value attr-value">== undefined || s2 === undefined) {</span>
        return arr1.length - arr2.length;
      }
      <span class="token key attr-name">if (s1</span> <span class="token punctuation">=</span><span class="token value attr-value">== s2) continue;</span>
      // 比较相同位置的数字大小
      return s1 - s2;
    }
  }
  return fn(arr1, arr2);
}

// 测试
<span class="token key attr-name">let str1</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;1.rc.2.1&quot;;</span>
<span class="token key attr-name">let str2</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;1.beta.2&quot;;</span>
console.log(compareVersion(str1, str2)); // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第一个不重复字符的下标" tabindex="-1"><a class="header-anchor" href="#第一个不重复字符的下标" aria-hidden="true">#</a> 第一个不重复字符的下标</h4><p>输入一个字符串，找到第一个不重复字符的下标</p><p>如输入<code>abcabcde</code>， 输出<code>6</code>， 第一个不重复的字符为<code>d</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 方法一：
// 先使用Set去重
// 然后两层遍历，时间复杂度为O(n²)
function findAlone(str) {
  <span class="token key attr-name">let arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">str.split(&quot;&quot;);</span>
  // 通过set 去重
  <span class="token key attr-name">let aloneArr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[...new Set(arr)];</span>
  <span class="token key attr-name">let val</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt;= aloneArr.length - 1; i++) {</span>
    // 用原始字符串进行遍历 找到唯一的值
    <span class="token key attr-name">if (arr.filter(item</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; item == aloneArr[i]).length == 1) {</span>
      <span class="token key attr-name">val</span> <span class="token punctuation">=</span> <span class="token value attr-value">aloneArr[i];</span>
      break;
    }
  }
  return val ? arr.indexOf(val) : -1;
}

<span class="token key attr-name">let str</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;abcabcde&quot;;</span>
console.log(findAlone(str)); // 6

// 方法二：
//  思路: 使用map存储每个字符出现的次数
//  该方法时间复杂度和空间复杂度均为O(n), 从时间上来说，要比第一种方法快
function findAlone1(str) {
  if (!str) return -1;
  // 使用map存储每个字符出现的次数
  <span class="token key attr-name">let map</span> <span class="token punctuation">=</span> <span class="token value attr-value">{};</span>
  <span class="token key attr-name">let arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">str.split(&quot;&quot;);</span>
  <span class="token key attr-name">arr.forEach(item</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; {</span>
    <span class="token key attr-name">let val</span> <span class="token punctuation">=</span> <span class="token value attr-value">map[item];</span>
    <span class="token key attr-name">// val为undefined时，表示未存储，map[item]</span> <span class="token punctuation">=</span> <span class="token value attr-value">1；否则map[item] = val + 1</span>
    <span class="token key attr-name">map[item]</span> <span class="token punctuation">=</span> <span class="token value attr-value">val ? val + 1 : 1;</span>
  });
  // 一次遍历结果后，再遍历一遍找到出现1次的值
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length; i++) {</span>
    <span class="token key attr-name">if (map[arr[i]]</span> <span class="token punctuation">=</span><span class="token value attr-value">= 1) {</span>
      return i;
    }
  }
  return -1;
}

console.log(findAlone1(str)); // 6


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串所有排列组合" tabindex="-1"><a class="header-anchor" href="#字符串所有排列组合" aria-hidden="true">#</a> 字符串所有排列组合</h4><p>输入一个字符串，打印出该字符串中字符的所有排列组合</p><p>例如输入字符串<code>abc</code>，则打印出由字符<code>a,b,c</code>所能排列出来的所有字符串，结果为：<code>[&#39;abc&#39;, &#39;acb&#39;, &#39;bca&#39;, &#39;bac&#39;, &#39;cab&#39;, &#39;cba&#39;]</code></p><p><strong>思路</strong>：</p><p>1）利用回溯法（将删除的元素递归后，重新添加到数据中）</p><p>2）每次递归，固定开头的字母，比如 abc，先固定 a，然后交换 bc 的位置，拿到两个结果 abc acb</p><p>3）然后交换字符串位置，比如 abc 递归一轮后，位置变化为 bca</p><p>4）第二轮，固定 b，然后交换 ca 的位置，拿到两个结果 bca bac</p><p>5）同理，依次将字符串中的字符放到头部，并固定，拿到所有情况的结果</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/**
 * 计算所有字符串的组合
 * @param {array} list - 字符串列表
 * @param {array} result - 最终的结果
 * @param {string} current - 当前的字符串
 * @param {string} temp - 当前固定的字符
 * */</span>
<span class="token keyword">function</span> stringGroup<span class="token punctuation">(</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">current</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token keyword">temp</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> {
  <span class="token keyword">current</span> <span class="token operator">+</span><span class="token operator">=</span> <span class="token keyword">temp</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> {
    <span class="token comment">// 递归的出口，将对应结果添加到list中</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token keyword">current</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  }
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">+</span><span class="token operator">+</span><span class="token punctuation">)</span> {
    <span class="token comment">// 每次递归 固定第一个字符</span>
    <span class="token keyword">temp</span> <span class="token operator">=</span> list<span class="token punctuation">.</span>shift<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stringGroup<span class="token punctuation">(</span>list<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token keyword">current</span><span class="token punctuation">,</span> <span class="token keyword">temp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将删除的temp 重新添加到queue尾部，实现将数组反转的效果，如[a,b,c]反转为[c,b,a]</span>
    list<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token keyword">temp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  }
  <span class="token comment">// 这里去重是解决str中有重复的字母，比如str为&#39;aacd&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>new <span class="token keyword">Set</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
}
console<span class="token punctuation">.</span>log<span class="token punctuation">(</span>stringGroup<span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;abc&#39;, &#39;acb&#39;, &#39;bca&#39;, &#39;bac&#39;, &#39;cab&#39;, &#39;cba&#39;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串是否对称" tabindex="-1"><a class="header-anchor" href="#字符串是否对称" aria-hidden="true">#</a> 字符串是否对称</h4><p>输入一个字符串，判断是否对称，对称输出 ture，不对称输出 false</p><p>输入 <code>abcba</code>; 输出 <code>true</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一： 将字符串切分为数组，再逆序，再连接为字符串</span>
<span class="token keyword">function</span> <span class="token function">isReserveSame</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> temp <span class="token operator">===</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReserveSame</span><span class="token punctuation">(</span><span class="token string">&quot;abcba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 方法二： 循环遍历，判断对称位置的字符是否相等</span>
<span class="token keyword">function</span> <span class="token function">isReserveSame1</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReserveSame1</span><span class="token punctuation">(</span><span class="token string">&quot;abcba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h3><p>链表：用一组任意存储的单元来存储线性表的数据元素。一个对象存储着本身的值和<code>next</code>(下一个元素)的地址</p><p>链表是物理存储单元上非连续的、非顺序的存储结构</p><p><strong>链表特点：查询慢，增删快</strong></p><p>1）查询慢：链表地址不是连续的，每次查询都要从头开始</p><p>2）增删快：增加/删除一个元素，对链表的整体结构没有影响，所以增删快</p><p>链表在开发中也是会用到的数据结构，<strong>比如<code>React</code>的 <code>Fiber</code>和<code>hook</code>底层都用到了链表</strong></p><p><strong>链表图例</strong></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1089b52862f5405a9d437ac3a0fa3c91~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="link.png"></p><h4 id="创建链表" tabindex="-1"><a class="header-anchor" href="#创建链表" aria-hidden="true">#</a> 创建链表</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 链表Node节点
function Node(data) {
  <span class="token key attr-name">this.data</span> <span class="token punctuation">=</span> <span class="token value attr-value">data;</span>
  <span class="token key attr-name">this.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">null;</span>
}

// 创建链表
class LinkedList {
  constructor() {
    <span class="token key attr-name">this.count</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; // 链表长度</span>
    <span class="token key attr-name">this.head</span> <span class="token punctuation">=</span> <span class="token value attr-value">null; // 链表开头</span>
  }
  // 添加节点
  push(data) {
    <span class="token key attr-name">let node</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Node(data);</span>
    if (!this.head) {
      <span class="token key attr-name">this.head</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
    } else {
      <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>
      while (current.next) {
        <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
      }
      <span class="token key attr-name">current.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
    }
    this.count++;
  }
  // 插入节点
  insert(data, index) {
    <span class="token key attr-name">if (index &gt;</span><span class="token punctuation">=</span> <span class="token value attr-value">0 &amp;&amp; index &lt;= this.count) {</span>
      <span class="token key attr-name">let node</span> <span class="token punctuation">=</span> <span class="token value attr-value">new Node(data);</span>
      <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>
      <span class="token key attr-name">if (index</span> <span class="token punctuation">=</span><span class="token value attr-value">= 0) {</span>
        // 插到表头
        <span class="token key attr-name">this.head</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
        <span class="token key attr-name">node.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">current;</span>
      } else {
        <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; index - 1; i++) {</span>
          // 找到要插入位置的前一个元素
          <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
        }
        <span class="token key attr-name">let next</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next; // 暂存next以后的节点信息</span>
        <span class="token key attr-name">current.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">node;</span>
        <span class="token key attr-name">node.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">next;</span>
      }
      this.count++;
      // 返回插入成功的结果
      return true;
    } else {
      return false;
    }
  }
  // 按索引值查找
  getIndexNode(index) {
    <span class="token key attr-name">if (index &gt;</span><span class="token punctuation">=</span> <span class="token value attr-value">0 &amp;&amp; index &lt; this.count) {</span>
      <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>
      <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; index; i++) {</span>
        <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
      }
      return current;
    } else {
      return null;
    }
  }
  // 按索引值删除节点
  removeNode(index) {
    <span class="token key attr-name">if (index &gt;</span><span class="token punctuation">=</span> <span class="token value attr-value">0 &amp;&amp; index &lt; this.count) {</span>
      <span class="token key attr-name">if (index</span> <span class="token punctuation">=</span><span class="token value attr-value">= 0) {</span>
        <span class="token key attr-name">this.head</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head.next;</span>
      } else {
        <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>
        <span class="token key attr-name">const pre</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.getIndexNode(index - 1); // 找到要删除元素的前一个元素</span>
        <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">pre.next; // 获取要删除的元素</span>
        <span class="token key attr-name">pre.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
      }
      this.count--;
      return true;
    } else {
      return false;
    }
  }
  // 查找节点的位置
  indexOf(data) {
    <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>
    <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; this.count; i++) {</span>
      <span class="token key attr-name">if (data</span> <span class="token punctuation">=</span><span class="token value attr-value">== current.data) {</span>
        return i;
      }
      <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
    }
  }
  // 链表转字符串
  toString() {
    <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">this.head;</span>

    <span class="token key attr-name">let string</span> <span class="token punctuation">=</span> <span class="token value attr-value">\`\${current.data}\`;</span>
    // current长度大于1，取下一个节点
    <span class="token key attr-name">if (this.count &gt; 1) current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
    <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt; this.count; i++) {</span>
      <span class="token key attr-name">string</span> <span class="token punctuation">=</span> <span class="token value attr-value">\`\${string},\${current.data}\`;</span>
      <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
    }
    return string;
  }
}

// 测试
<span class="token key attr-name">const link</span> <span class="token punctuation">=</span> <span class="token value attr-value">new LinkedList();</span>
// 增加5个节点
<span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt;= 5; i++) {</span>
  link.push(i);
}
// 索引为1的位置 插入节点6
link.insert(6, 1);

// 获取索引2的节点
console.log(link.getIndexNode(2));
// 删除索引3的节点
console.log(link.removeNode(3));
// 查找位为6的索引
console.log(link.indexOf(6));
// 链表转字符串 1,6,2,4,5
console.log(link.toString());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环形链表" tabindex="-1"><a class="header-anchor" href="#环形链表" aria-hidden="true">#</a> 环形链表</h4><p><strong>链表其中一个节点的 next 指针，指向另一个节点</strong></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a7a528e25f64fd596d92f688d5a6893~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="ringLink.png"></p><p><strong>创建如上图所示的链表，节点 5 指向节点 3</strong></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">const link</span> <span class="token punctuation">=</span> <span class="token value attr-value">new LinkedList();</span>
// 增加5个节点
<span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt;= 5; i++) {</span>
  link.push(i);
}
// 创建环形链表，找到值为5的节点，将该节点的next指向值为3的节点
<span class="token key attr-name">link.getIndexNode(4).next</span> <span class="token punctuation">=</span> <span class="token value attr-value">link.getIndexNode(2);</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找环形链表的入口节点" tabindex="-1"><a class="header-anchor" href="#查找环形链表的入口节点" aria-hidden="true">#</a> 查找环形链表的入口节点</h4><p>给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出 null</p><p><strong>思路</strong></p><p>声明两个指针 <code>P1 P2</code></p><p>1）判断链表是否有环： P1 P2 从头部出发，P1 一次走两步，P2 一次走一步，如果可以相遇，则环存在</p><p>2）从环内某个节点开始计数，再回到此节点时得到链表环的长度 length</p><p>3）P1、P2 回到 head 节点，让 P1 先走 length 步 ，当 P2 和 P1 相遇时即为链表环的节点</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 查找环形链表节点
function EntryNodeOfLoop(head) {
  if (!head || !head.next) {
    return null;
  }
  <span class="token key attr-name">let p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">head.next;</span>
  // p2一次走两步
  <span class="token key attr-name">let p2</span> <span class="token punctuation">=</span> <span class="token value attr-value">head.next.next;</span>
  <span class="token key attr-name">// 若p1</span> <span class="token punctuation">=</span><span class="token value attr-value">== p2 则证明该链表有环</span>
  <span class="token key attr-name">while (p1 !</span><span class="token punctuation">=</span><span class="token value attr-value">= p2) {</span>
    <span class="token key attr-name">if (p1</span> <span class="token punctuation">=</span><span class="token value attr-value">= null || p2.next === null) {</span>
      return null;
    }
    <span class="token key attr-name">p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">p1.next;</span>
    <span class="token key attr-name">p2</span> <span class="token punctuation">=</span> <span class="token value attr-value">p2.next.next;</span>
  }
  // 此时p1 是 p1、p2重合的点
  <span class="token key attr-name">let temp</span> <span class="token punctuation">=</span> <span class="token value attr-value">p1;</span>
  <span class="token key attr-name">let length</span> <span class="token punctuation">=</span> <span class="token value attr-value">1;</span>
  <span class="token key attr-name">p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">p1.next;</span>
  // 获取环的长度
  <span class="token key attr-name">while (p1 !</span><span class="token punctuation">=</span><span class="token value attr-value">= temp) {</span>
    <span class="token key attr-name">p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">p1.next;</span>
    length++;
  }
  // 找公共节点
  // 此时为什么要将p1 p2重新赋值，因为p2只是重合的点，不一定是入口节点
  <span class="token key attr-name">p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">p2 = head;</span>
  while (length-- &gt; 0) {
    <span class="token key attr-name">p2</span> <span class="token punctuation">=</span> <span class="token value attr-value">p2.next;</span>
  }
  <span class="token key attr-name">while (p1 !</span><span class="token punctuation">=</span><span class="token value attr-value">= p2) {</span>
    <span class="token key attr-name">p1</span> <span class="token punctuation">=</span> <span class="token value attr-value">p1.next;</span>
    <span class="token key attr-name">p2</span> <span class="token punctuation">=</span> <span class="token value attr-value">p2.next;</span>
  }
  return p1;
}

<span class="token key attr-name">const link</span> <span class="token punctuation">=</span> <span class="token value attr-value">new LinkedList();</span>
// 增加5个节点
<span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt;= 5; i++) {</span>
  link.push(i);
}
// 创建环形链表，值为5的节点，next指向值为3的节点
<span class="token key attr-name">link.getIndexNode(4).next</span> <span class="token punctuation">=</span> <span class="token value attr-value">link.getIndexNode(2);</span>

console.log(EntryNodeOfLoop(link.head)); // 打印节点3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环中最后的数字" tabindex="-1"><a class="header-anchor" href="#环中最后的数字" aria-hidden="true">#</a> 环中最后的数字</h4><p><code>0,1,...,n-1</code>这<code>n</code>个数字排成一个圆圈，从数字 0 开始，每次从这个圆圈里删除第<code>m</code>个数字，求出这个圆圈里剩下的最后一个数字</p><p><strong>约瑟夫环问题</strong></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47421c11f66c44769aa44936b9efa179~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="kill.jpg"></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 使用链表形成一个闭环，最后一个元素的指针指向第一个元素
function findLastNode(n, m) {
  if (n &lt; 1 || m &lt; 1) return -1;
  <span class="token key attr-name">const head</span> <span class="token punctuation">=</span> <span class="token value attr-value">{ val: 0 };</span>
  <span class="token key attr-name">let current</span> <span class="token punctuation">=</span> <span class="token value attr-value">head;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt; n; i++) {</span>
    // 生成一个链表
    <span class="token key attr-name">current.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">{ val: i };</span>
    // 将next下一项赋值给current
    <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
  }
  // 尾部指向头部，形成闭环
  <span class="token key attr-name">current.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">head;</span>
  <span class="token key attr-name">while (current.next !</span><span class="token punctuation">=</span> <span class="token value attr-value">current) {</span>
    // 此时current是最后一个节点
    <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; m - 1; i++) {</span>
      // 找到要删除节点的前一个节点（范围是m-1,这里是从最后一个节点开始；如果是从head开始，范围则是m-2）
      <span class="token key attr-name">current</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next;</span>
    }
    // 删除第m个节点
    <span class="token key attr-name">current.next</span> <span class="token punctuation">=</span> <span class="token value attr-value">current.next.next;</span>
  }
  return current.val;
}
console.log(findLastNode(5, 3)); // 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h3><p>栈是一种特殊的线性表，仅能在线性表的一端操作，栈顶允许操作，栈底不允许操作</p><p>栈的特点是：<strong>先进后出</strong>，从栈顶放入元素的操作叫入栈，取出元素叫出栈</p><p>队列与栈一样，也是一种线性表，不同的是，队列可以在一端添加元素，在另一端取出元素，也就是：<strong>先进先出</strong>，从一端放入元素的操作称为入队，取出元素为出队</p><p><strong>两者区别：</strong><code>栈（先进后出）、队列（先进先出）</code></p><h4 id="创建栈和队列" tabindex="-1"><a class="header-anchor" href="#创建栈和队列" aria-hidden="true">#</a> 创建栈和队列</h4><p><strong>创建栈</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建栈 只能从栈尾添加和删除 实现先进后出的效果</span>
<span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 从栈尾添加</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 从栈尾删除</span>
  <span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建队列</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建队列 只能从栈尾添加和头部删除 实现先进先出的效果</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2,3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="栈的入栈和出栈序列" tabindex="-1"><a class="header-anchor" href="#栈的入栈和出栈序列" aria-hidden="true">#</a> 栈的入栈和出栈序列</h4><p>输入两个整数序列，第一个序列<code>arr1</code>表示栈的入栈顺序，请判断第二个序列<code>arr2</code>，是否可能为该栈的出栈序列</p><p><strong>思路</strong></p><p>1）创建一个栈，模拟入栈、出栈的过程</p><p>2）<code>id</code>用来记录<code>arr1</code>已出栈的位置</p><p>3）当<code>stack</code>栈顶元素和 <code>arr2</code> 栈顶元素相同时，stack 出栈；索引<code>id+1</code></p><p>4）最终 stack 栈为空，表示 arr1 全部元素已出栈</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>// 判断两个整数序列，第一个序列为入栈顺序，第二个序列是否为出栈顺序
function isSameStack(arr, arr1) {
  // 创建一个栈，模拟入栈、出栈的过程
  <span class="token key attr-name">let stack</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
  // id用来记录arr1已出栈的位置
  <span class="token key attr-name">let id</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;</span>
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length; i++) {</span>
    // 入栈
    stack.push(arr[i]);
    // 当stack栈顶元素和 arr1 栈顶元素相同时，stack出栈；索引id+1，
    <span class="token key attr-name">while (stack.length &amp;&amp; stack[stack.length - 1]</span> <span class="token punctuation">=</span><span class="token value attr-value">== arr1[id]) {</span>
      // 出栈
      stack.pop();
      // 下次要对比arr1[id+1]与stack栈顶元素是否相等
      id++;
    }
  }
  // 最终stack栈为空，表示arr全部元素已出栈
  <span class="token key attr-name">return stack.length</span> <span class="token punctuation">=</span><span class="token value attr-value">= 0;</span>
}

console.log(isSameStack([1, 2, 3, 4, 5], [2, 4, 5, 3, 1])); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="滑动窗口最大值" tabindex="-1"><a class="header-anchor" href="#滑动窗口最大值" aria-hidden="true">#</a> 滑动窗口最大值</h4><p>给定一个数组 <code>nums</code>，有一个大小为 <code>k</code> 的滑动窗口，从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口中的 k 个数字。滑动窗口每次只向右移动一位，求返回滑动窗口最大值</p><p>如<code>nums = [1,3,-1,-3,5,3,6,7]</code>， <code>k = 3</code>，输出结果为<code>[3, 3, 5, 5, 6, 7]</code></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ee188ecf7a4a86900eb42530d7ec34~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="window.png"></p><p><strong>思路</strong></p><p>利用双端队列（队列两侧都可以剔除元素），窗口移动的过程中，始终保证 window 中最左侧的元素为当前窗口的最大值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// window存储当前窗口中数据的下标</span>
  <span class="token keyword">const</span> window <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// result存储窗口中的最大值</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> window<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 窗口不断往右移动，当最大值在窗口最左侧，但窗口的长度超出k时的情况，就要把左侧的最大值剔除，比如窗口为【3,-1,-3】，继续往右时，就要把左侧的3剔除</span>
      window<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 剔除窗口长度超出范围时左侧的最大值</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> window<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当前窗口的值依次和要插入的值做比较，如果小于要插入的值，剔除掉该值，直到window为空为止（保证window中最左侧的值为最大值）</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>window<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 添加右侧新加入的值，插入新值时有两种情况：</span>
    <span class="token comment">// 1、新值为最大值时，则window此时为空；</span>
    <span class="token comment">// 2、新值不为最大值时，window已剔除掉比新值小的值。</span>
    <span class="token comment">// 始终保证window中最左侧的值为最大值</span>
    window<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 窗口是从0开始移动，当移动的距离，大于等于目标范围后，以后再往后移动一次，就要写入当前窗口的最大值</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>window<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 3, 5, 5, 6, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h3><p>各种排序算法的对比详情</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52c601f80e0c4c848309f50777194895~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="sort.png"></p><p><strong>算法的稳定性</strong>：序列相同元素排序后，先后次序不变即稳定</p><p>冒泡排序、归并排序稳定，快速排序、选择排序不稳定</p><h4 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h4><p>时间复杂度为<code>O(n²)</code>，稳定</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function bubbleSort(arr) {
  <span class="token key attr-name">const length</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.length;</span>
  // 外层循环用控制 排序进行多少轮
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; length; i++) {</span>
    // 内层循环用于每一轮的数据比较
    // 注意j的长度范围 length - i - 1
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; j &lt; length - i - 1; j++) {</span>
      // 相邻元素，大的放到后面
      if (arr[j] &gt; arr[j + 1]) {
        // 交换位置
        <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">arr[j</span><span class="token punctuation">]</span></span><span class="token key attr-name">, arr[j + 1]]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[arr[j + 1], arr[j]];</span>
      }
    }
  }
  return arr;
}
console.log(bubbleSort([8, 7, 1, 4, 3])); // [1,3,4,7,8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h4><p>时间复杂度为<code>O(n²)</code>，不稳定</p><p><strong>思路</strong></p><p>从未排序序列中找到最小的元素，放到已排序序列的头部，重复上述步骤，直到所有元素排序完毕</p><p>1）外层循环控制进行多少轮 2）内层循环进行数据比较，找到每一轮的最小值</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f397150299de491aa239b625f1be5a1e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="selectSort.gif"></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function selectSort(arr) {
  // 定义index存储最小值的下标
  let index;
  // 外层循环用控制 排序进行多少轮
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; arr.length - 1; i++) {</span>
    <span class="token key attr-name">index</span> <span class="token punctuation">=</span> <span class="token value attr-value">i;</span>
    // 内层循环用于每一轮的数据比较
    // 注意j的起始范围是 i + 1
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">i + 1; j &lt; arr.length; j++) {</span>
      // 寻找最小值
      if (arr[j] &lt; arr[index]) {
        // 保存最小值的下标
        <span class="token key attr-name">index</span> <span class="token punctuation">=</span> <span class="token value attr-value">j;</span>
      }
    }
    // 如果 index 不是目前的头部元素，则交换两者
    <span class="token key attr-name">if (index !</span><span class="token punctuation">=</span><span class="token value attr-value">= i) {</span>
      <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">arr[i</span><span class="token punctuation">]</span></span><span class="token key attr-name">, arr[index]]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[arr[index], arr[i]];</span>
    }
  }
  return arr;
}
console.log(selectSort([9, 1, 5, 3, 2, 8])); // [1, 2, 3, 5, 8, 9]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h4><p>时间复杂度为<code>O(n²)</code>，稳定</p><p><strong>思路</strong></p><p>将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。</p><p>插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c73c966c21d4fb4a7cc50f44293d35e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="insert.gif"></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function insertSort(array) {
  // 外层控制循环的次数
  <span class="token key attr-name">for (let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">1; i &lt; array.length; i++) {</span>
    <span class="token key attr-name">let target</span> <span class="token punctuation">=</span> <span class="token value attr-value">i;</span>
    // 内层循环用于每一轮的数据比较
    <span class="token key attr-name">for (let j</span> <span class="token punctuation">=</span> <span class="token value attr-value">i - 1; j &gt;= 0; j--) {</span>
      if (array[target] &lt; array[j]) {
        <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">array[target</span><span class="token punctuation">]</span></span><span class="token key attr-name">, array[j]]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[array[j], array[target]];</span>
        <span class="token key attr-name">target</span> <span class="token punctuation">=</span> <span class="token value attr-value">j;</span>
      } else {
        break;
      }
    }
  }
  return array;
}

console.log(insertSort([9, 1, 5, 3, 2, 8])); // [1, 2, 3, 5, 8, 9]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h4><p>时间复杂度为<code>O(nlogn)</code>，不稳定</p><p><strong>思路</strong></p><p>1）以一个数为基准(中间的数)，比基准小的放到左边，比基准大的放到右边</p><p>2）再按此方法对这两部分数据分别进行快速排序（递归进行）</p><p>3）不能再分后退出递归，并重新将数组合并</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 快速排序</span>
function <span class="token function">quickSort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当list.length &lt;= 1时，退出递归</span>
  if <span class="token punctuation">(</span>list.length <span class="token operator">&lt;=</span> 1<span class="token punctuation">)</span> return list<span class="token punctuation">;</span>
  <span class="token comment">// 找到中间节点</span>
  let mid = Math.<span class="token function">floor</span><span class="token punctuation">(</span>list.length <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 以中间节点为基准点，比该节点大的值放到right数组中，否则放到left数组中</span>
  let base = list.<span class="token function">splice</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> 1<span class="token punctuation">)</span>[0]<span class="token punctuation">;</span>
  let left = []<span class="token punctuation">;</span>
  let right = []<span class="token punctuation">;</span>
  list.<span class="token function">forEach</span><span class="token punctuation">(</span><span class="token selector">item =&gt; </span><span class="token punctuation">{</span>
    if <span class="token punctuation">(</span>item <span class="token operator">&gt;</span> base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right.<span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token selector">else </span><span class="token punctuation">{</span>
      left.<span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 重新组合数组</span>
  return <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>.<span class="token function">concat</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span>[9<span class="token punctuation">,</span> 1<span class="token punctuation">,</span> 5<span class="token punctuation">,</span> 3<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 8]<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h4><p>时间复杂度为<code>O(nlogn)</code>，稳定</p><p><strong>思路</strong></p><p>1）将给定的列表分为两半（如果列表中的元素数为奇数，则使其大致相等）</p><p>2）以相同的方式继续划分子数组，直到只剩下单个元素数组</p><p>3）从单个元素数组开始，合并子数组，以便对每个合并的子数组进行排序</p><p>4）重复第 3 步单元，直到最后得到一个排好序的数组。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/465364a973c1456d96c8fbb0e54a2522~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="merge.gif"></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>function MergeSort(array) {
  <span class="token key attr-name">let len</span> <span class="token punctuation">=</span> <span class="token value attr-value">array.length;</span>
  <span class="token key attr-name">if (len &lt;</span><span class="token punctuation">=</span> <span class="token value attr-value">1) {</span>
    return array;
  }
  // 将给定的列表分为两半
  <span class="token key attr-name">let num</span> <span class="token punctuation">=</span> <span class="token value attr-value">Math.floor(len / 2);</span>
  <span class="token key attr-name">let left</span> <span class="token punctuation">=</span> <span class="token value attr-value">MergeSort(array.slice(0, num));</span>
  <span class="token key attr-name">let right</span> <span class="token punctuation">=</span> <span class="token value attr-value">MergeSort(array.slice(num, array.length));</span>
  return merge(left, right);

  function merge(left, right) {
    <span class="token key attr-name">let [l, r]</span> <span class="token punctuation">=</span> <span class="token value attr-value">[0, 0];</span>
    <span class="token key attr-name">let result</span> <span class="token punctuation">=</span> <span class="token value attr-value">[];</span>
    while (l &lt; left.length &amp;&amp; r &lt; right.length) {
      if (left[l] &lt; right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }
    <span class="token key attr-name">result</span> <span class="token punctuation">=</span> <span class="token value attr-value">result.concat(left.slice(l, left.length));</span>
    <span class="token key attr-name">result</span> <span class="token punctuation">=</span> <span class="token value attr-value">result.concat(right.slice(r, right.length));</span>
    return result;
  }
}
console.log(MergeSort([6, 5, 3, 1, 8, 7, 2, 4]));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算法思想" tabindex="-1"><a class="header-anchor" href="#算法思想" aria-hidden="true">#</a> 算法思想</h3><p><strong>常见的 6 种算法思想</strong></p><p><strong>递归</strong></p><p>优点：使用范围广，简单容易上手</p><p>缺点：递归太深，容易发生栈溢出（比如斐波那契数列使用递归进行计算）</p><p>使用场景：比如树的遍历、快排、深拷贝、查找字符串的所有组合等</p><p><strong>分治算法</strong></p><p>思想：将某问题分成若干个子问题，然后解决多个子问题，将子问题的解合并得到最终结果，</p><p>比如快速排序（以中间元素为基准，将原来的数组拆分为左右两个数组，依次类推）</p><p>使用场景： 快速排序、二分查找、归并排序</p><p><strong>贪心算法</strong></p><p>最终得到的结果并不一定是整体最优解，可能只是比较好的结果</p><p>但是贪心算法在很多问题上还是能够拿到最优解或较优解，所以它的存在还是有意义的</p><p>使用场景：买卖股票</p><p><strong>回溯算法</strong></p><p>回溯算法是一种搜索法，试探法，它会在每一步做出选择，一旦发现这个选择无法得到期望结果，就回溯回去</p><p>使用场景：比如查找二叉树的路径和二叉树的回溯遍历、字符串中字符的所有排列</p><p><strong>动态规划</strong></p><p>动态规划也是将复杂问题分解成小问题求解的策略，与分治算法不同的是，分治算法要求各子问题是相互独立的，而动态规划各子问题是相互关联的</p><p>使用场景： 斐波那契数列和爬楼梯问题(爬楼梯问题的解法和斐波那契数列一样)</p><p><strong>枚举算法</strong></p><p>将问题的所有可能的答案一一列举，然后根据条件判断此答案是否合适，保留合适的，丢弃不合适的</p><p>使用场景：长度为 n 的数组，随机取 m 个数，有多少种组合</p><h3 id="推荐的算法文章" tabindex="-1"><a class="header-anchor" href="#推荐的算法文章" aria-hidden="true">#</a> 推荐的算法文章</h3>`,204),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FDWGWK4yAlfEYO1Ynv1CMfg",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.cn/post/6844903919722692621",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.conardli.top%2F",target:"_blank",rel:"noopener noreferrer"},x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FSj4mB0V9TXHB5XpQLsrTEw",target:"_blank",rel:"noopener noreferrer"};function w(q,j){const a=c("ExternalLinkIcon");return l(),p("div",null,[n("p",null,[s("引用于"),n("a",o,[s("掘金-海阔_天空"),e(a)])]),r,n("p",null,[n("a",d,[s("力扣上最长上升子序列的视频讲解"),e(a)])]),v,n("p",null,[n("a",k,[s("LeetCode 19.凑零钱问题 动态规划"),e(a)])]),m,n("p",null,[n("a",b,[s("二叉树在线构建工具"),e(a)])]),h,n("p",null,[n("a",g,[s("95% 的算法都是基于这 6 种算法思想"),e(a)]),n("a",f,[s("前端该如何准备数据结构和算法？"),e(a)]),n("a",y,[s("awesome-coding-js 用 JS 实现的算法和数据结构"),e(a)]),n("a",x,[s("从最简单的斐波那契数列来学习动态规划（JavaScript 版本）"),e(a)])])])}const _=i(u,[["render",w],["__file","index.html.vue"]]);export{_ as default};
