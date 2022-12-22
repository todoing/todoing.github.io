import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,f as i}from"./app.f66cef50.js";const d={},a=i(`<p>现代前端开发者每天工作的重点就是写页面，调接口。</p><p>许多前端开发想要扩充自己的技术栈，学习后端知识，想学Java，Python甚至C#等后端语言。实际上使用Node非常简单就可以实现后端服务，接下来就是今天的重点：Express。</p><h2 id="什么是express" tabindex="-1"><a class="header-anchor" href="#什么是express" aria-hidden="true">#</a> 什么是Express</h2><p>Express 是最流行的 Node 框架，是许多其它流行 Node 框架 的底层库。它提供了以下机制：</p><ol><li>为不同 URL 路径中使用不同 HTTP 动词的请求（路由）编写处理程序。</li><li>集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应。</li><li>设置常见 web 应用设置，比如用于连接的端口，以及渲染响应模板的位置。</li><li>在请求处理管道的任何位置添加额外的请求处理“中间件”。</li></ol><h2 id="现在开始写一个api接口" tabindex="-1"><a class="header-anchor" href="#现在开始写一个api接口" aria-hidden="true">#</a> 现在开始写一个API接口</h2><p>下文中用到的主要技术：</p><p>Node.js：在服务器端运行的JavaScript</p><p>Express：node.js MVC框架</p><p>MongoDB：NoSQL数据库</p><h2 id="_1-创建项目-创建相关文件" tabindex="-1"><a class="header-anchor" href="#_1-创建项目-创建相关文件" aria-hidden="true">#</a> 1.创建项目，创建相关文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir todoApp
cd todoApp
npm init

touch server.js
mkdir api
mkdir api/controllers api/models api/routes
touch api/controllers/taskController.js api/models/taskModel.js api/routes/taskRoutes.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic2.zhimg.com/v2-ed548b036df3fd352bed742f07ece6ad_r.jpg" alt="文件结构"></p><h2 id="_2-设置数据库" tabindex="-1"><a class="header-anchor" href="#_2-设置数据库" aria-hidden="true">#</a> 2.设置数据库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install mongoose --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改api/models/taskModel.js，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mongoose = require(&quot;mongoose&quot;);
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: &quot;Enter the name of the task&quot;
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(&quot;Tasks&quot;, TaskSchema);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-设置路由" tabindex="-1"><a class="header-anchor" href="#_3-设置路由" aria-hidden="true">#</a> 3.设置路由</h2><p>修改api/routes/taskRoute.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = function(app) {
  var taskList = require(&#39;../controllers/taskController&#39;);

  app.route(&#39;/tasks&#39;)
    .get(taskList.all_tasks)
    .post(taskList.create_task);


  app.route(&#39;/tasks/:taskId&#39;)
    .get(taskList.load_task)
    .put(taskList.update_task)
    .delete(taskList.delete_task);
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-controller" tabindex="-1"><a class="header-anchor" href="#_4-controller" aria-hidden="true">#</a> 4.Controller</h2><p>修改api/controllers/taskController.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mongoose = require(&quot;mongoose&quot;),
  Task = mongoose.model(&quot;Tasks&quot;);

// 查询所有
exports.all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// 新增
exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// 根据id查询
exports.load_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// 更新
exports.update_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

// 删除
exports.delete_task = function(req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: &quot;Task successfully deleted&quot; });
    }
  );
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-创建api" tabindex="-1"><a class="header-anchor" href="#_5-创建api" aria-hidden="true">#</a> 5.创建API</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save-dev nodemon
npm install express --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 server.js 构建 API。</strong></p><p>修改server.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var express = require(&quot;express&quot;),
  app = express(),
  port = p<wbr>rocess.env.PORT || 3000,
  mongoose = require(&quot;mongoose&quot;),
  Task = require(&quot;./api/models/taskModel&quot;), // 加载创建的模型
  bodyParser = require(&quot;body-parser&quot;);

mongoose.Promise = global.Promise;
mongoose.connect(&quot;mongodb://localhost/Tododb&quot;);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(&quot;./api/routes/taskRoutes&quot;);
routes(app); 

app.listen(port); 

console.log(&quot;todo list RESTful API server started on: &quot; + port);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-开始启动" tabindex="-1"><a class="header-anchor" href="#_6-开始启动" aria-hidden="true">#</a> 6.开始启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//启动数据库
mongod
//启动项目
npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-创建完成" tabindex="-1"><a class="header-anchor" href="#_7-创建完成" aria-hidden="true">#</a> 7.创建完成</h2><p>访问API：</p><p>新增：POST http://localhost:3000/tasks</p><p>获取全部：GET http://localhost:3000/tasks</p><p>根据id查询：GET http://localhost:3000/tasks/:id</p><p>更新：PUT http://localhost:3000/tasks/:id</p><p>删除：DELETE http://localhost:3000/tasks/:id</p>`,37),r=[a];function l(t,v){return s(),n("div",null,r)}const c=e(d,[["render",l],["__file","API.html.vue"]]);export{c as default};
