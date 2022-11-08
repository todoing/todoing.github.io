import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,f as i}from"./app.02ae940c.js";const d={},a=i(`<p>\u73B0\u4EE3\u524D\u7AEF\u5F00\u53D1\u8005\u6BCF\u5929\u5DE5\u4F5C\u7684\u91CD\u70B9\u5C31\u662F\u5199\u9875\u9762\uFF0C\u8C03\u63A5\u53E3\u3002</p><p>\u8BB8\u591A\u524D\u7AEF\u5F00\u53D1\u60F3\u8981\u6269\u5145\u81EA\u5DF1\u7684\u6280\u672F\u6808\uFF0C\u5B66\u4E60\u540E\u7AEF\u77E5\u8BC6\uFF0C\u60F3\u5B66Java\uFF0CPython\u751A\u81F3C#\u7B49\u540E\u7AEF\u8BED\u8A00\u3002\u5B9E\u9645\u4E0A\u4F7F\u7528Node\u975E\u5E38\u7B80\u5355\u5C31\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u4ECA\u5929\u7684\u91CD\u70B9\uFF1AExpress\u3002</p><h2 id="\u4EC0\u4E48\u662Fexpress" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fexpress" aria-hidden="true">#</a> \u4EC0\u4E48\u662FExpress</h2><p>Express \u662F\u6700\u6D41\u884C\u7684 Node \u6846\u67B6\uFF0C\u662F\u8BB8\u591A\u5176\u5B83\u6D41\u884C Node \u6846\u67B6 \u7684\u5E95\u5C42\u5E93\u3002\u5B83\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u673A\u5236\uFF1A</p><ol><li>\u4E3A\u4E0D\u540C URL \u8DEF\u5F84\u4E2D\u4F7F\u7528\u4E0D\u540C HTTP \u52A8\u8BCD\u7684\u8BF7\u6C42\uFF08\u8DEF\u7531\uFF09\u7F16\u5199\u5904\u7406\u7A0B\u5E8F\u3002</li><li>\u96C6\u6210\u4E86\u201C\u89C6\u56FE\u201D\u6E32\u67D3\u5F15\u64CE\uFF0C\u4EE5\u4FBF\u901A\u8FC7\u5C06\u6570\u636E\u63D2\u5165\u6A21\u677F\u6765\u751F\u6210\u54CD\u5E94\u3002</li><li>\u8BBE\u7F6E\u5E38\u89C1 web \u5E94\u7528\u8BBE\u7F6E\uFF0C\u6BD4\u5982\u7528\u4E8E\u8FDE\u63A5\u7684\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u6E32\u67D3\u54CD\u5E94\u6A21\u677F\u7684\u4F4D\u7F6E\u3002</li><li>\u5728\u8BF7\u6C42\u5904\u7406\u7BA1\u9053\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6DFB\u52A0\u989D\u5916\u7684\u8BF7\u6C42\u5904\u7406\u201C\u4E2D\u95F4\u4EF6\u201D\u3002</li></ol><h2 id="\u73B0\u5728\u5F00\u59CB\u5199\u4E00\u4E2Aapi\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u73B0\u5728\u5F00\u59CB\u5199\u4E00\u4E2Aapi\u63A5\u53E3" aria-hidden="true">#</a> \u73B0\u5728\u5F00\u59CB\u5199\u4E00\u4E2AAPI\u63A5\u53E3</h2><p>\u4E0B\u6587\u4E2D\u7528\u5230\u7684\u4E3B\u8981\u6280\u672F\uFF1A</p><p>Node.js\uFF1A\u5728\u670D\u52A1\u5668\u7AEF\u8FD0\u884C\u7684JavaScript</p><p>Express\uFF1Anode.js MVC\u6846\u67B6</p><p>MongoDB\uFF1ANoSQL\u6570\u636E\u5E93</p><h2 id="_1-\u521B\u5EFA\u9879\u76EE-\u521B\u5EFA\u76F8\u5173\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u9879\u76EE-\u521B\u5EFA\u76F8\u5173\u6587\u4EF6" aria-hidden="true">#</a> 1.\u521B\u5EFA\u9879\u76EE\uFF0C\u521B\u5EFA\u76F8\u5173\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir todoApp
cd todoApp
npm init

touch server.js
mkdir api
mkdir api/controllers api/models api/routes
touch api/controllers/taskController.js api/models/taskModel.js api/routes/taskRoutes.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic2.zhimg.com/v2-ed548b036df3fd352bed742f07ece6ad_r.jpg" alt="\u6587\u4EF6\u7ED3\u6784"></p><h2 id="_2-\u8BBE\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.\u8BBE\u7F6E\u6570\u636E\u5E93</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install mongoose --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539api/models/taskModel.js\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var mongoose = require(&quot;mongoose&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8BBE\u7F6E\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_3-\u8BBE\u7F6E\u8DEF\u7531" aria-hidden="true">#</a> 3.\u8BBE\u7F6E\u8DEF\u7531</h2><p>\u4FEE\u6539api/routes/taskRoute.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = function(app) {
  var taskList = require(&#39;../controllers/taskController&#39;);

  app.route(&#39;/tasks&#39;)
    .get(taskList.all_tasks)
    .post(taskList.create_task);


  app.route(&#39;/tasks/:taskId&#39;)
    .get(taskList.load_task)
    .put(taskList.update_task)
    .delete(taskList.delete_task);
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-controller" tabindex="-1"><a class="header-anchor" href="#_4-controller" aria-hidden="true">#</a> 4.Controller</h2><p>\u4FEE\u6539api/controllers/taskController.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var mongoose = require(&quot;mongoose&quot;),
  Task = mongoose.model(&quot;Tasks&quot;);

// \u67E5\u8BE2\u6240\u6709
exports.all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// \u65B0\u589E
exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// \u6839\u636Eid\u67E5\u8BE2
exports.load_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// \u66F4\u65B0
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

// \u5220\u9664
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u521B\u5EFAapi" tabindex="-1"><a class="header-anchor" href="#_5-\u521B\u5EFAapi" aria-hidden="true">#</a> 5.\u521B\u5EFAAPI</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save-dev nodemon
npm install express --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528 server.js \u6784\u5EFA API\u3002</strong></p><p>\u4FEE\u6539server.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var express = require(&quot;express&quot;),
  app = express(),
  port = p<wbr>rocess.env.PORT || 3000,
  mongoose = require(&quot;mongoose&quot;),
  Task = require(&quot;./api/models/taskModel&quot;), // \u52A0\u8F7D\u521B\u5EFA\u7684\u6A21\u578B
  bodyParser = require(&quot;body-parser&quot;);

mongoose.Promise = global.Promise;
mongoose.connect(&quot;mongodb://localhost/Tododb&quot;);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(&quot;./api/routes/taskRoutes&quot;);
routes(app); 

app.listen(port); 

console.log(&quot;todo list RESTful API server started on: &quot; + port);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5F00\u59CB\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_6-\u5F00\u59CB\u542F\u52A8" aria-hidden="true">#</a> 6.\u5F00\u59CB\u542F\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u542F\u52A8\u6570\u636E\u5E93
mongod
//\u542F\u52A8\u9879\u76EE
npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u521B\u5EFA\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#_7-\u521B\u5EFA\u5B8C\u6210" aria-hidden="true">#</a> 7.\u521B\u5EFA\u5B8C\u6210</h2><p>\u8BBF\u95EEAPI\uFF1A</p><p>\u65B0\u589E\uFF1APOST http://localhost:3000/tasks</p><p>\u83B7\u53D6\u5168\u90E8\uFF1AGET http://localhost:3000/tasks</p><p>\u6839\u636Eid\u67E5\u8BE2\uFF1AGET http://localhost:3000/tasks/:id</p><p>\u66F4\u65B0\uFF1APUT http://localhost:3000/tasks/:id</p><p>\u5220\u9664\uFF1ADELETE http://localhost:3000/tasks/:id</p>`,37),r=[a];function l(t,v){return s(),n("div",null,r)}const c=e(d,[["render",l],["__file","API.html.vue"]]);export{c as default};
