(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{601:function(t,a,e){"use strict";e.r(a);var s=e(20),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("[toc]")]),t._v(" "),e("p",[t._v("clickhouse提供了update和delete的删除能力，但是和常规的例如mysql，redis这种立即见效的能力不一样。在clickhouse中这种操作称为mutation操作。")]),t._v(" "),e("h3",{attrs:{id:"_1-mutation操作有3个特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-mutation操作有3个特点"}},[t._v("#")]),t._v(" 1.mutation操作有3个特点：")]),t._v(" "),e("ul",[e("li",[t._v("1.Mutations是一类允许对表的行记录进行删除或更新的ALTER操作。相较于标准的 UPDATE 和 DELETE 用于少量行操作而言，Mutations用来对表的很多行进行重量级的操作。 该操作支持 MergeTree系列表，包含支持复制功能的表。")]),t._v(" "),e("li",[t._v("2.在首次对表进行mutation操作以后，它的元数据格式变得和和之前的版本不兼容，并且不能回退到之前版本。")]),t._v(" "),e("li",[t._v("3.对于 *MergeTree引擎表，mutation操作通过重写整个数据块来实现。")]),t._v(" "),e("li",[t._v("4.该操作没有原子性保证：被mutation操作的数据会被替换，在mutation期间开始执行的SELECT查询能看到所有已经完成mutation的数据，以及还没有被mutation替换的数据。 所以这时数据的查询操作可能会拿到预料之外的结果。")]),t._v(" "),e("li",[t._v("5.mutation总是按照它们的创建顺序来排序并以同样顺序在每个数据块中执行。")]),t._v(" "),e("li",[t._v("6.和insert的关系：mutation操作也会部分的和Insert操作一起排序 - 在mutation提交之前插入的数据会参与mutation操作，在mutation提交之后的插入的数据则不会参与mutation。注意：mutation从来不会阻塞插入操作。")]),t._v(" "),e("li",[t._v("7.该操作是异步操作，在提交后立即返回。已经成功提交的mutation操作在服务重启后仍会继续执行。一旦mutation完成提交，就不能回退了，但是如果因为某种原因操作被卡住了，可以通过 KILL MUTATION操作来取消它的执行。")]),t._v(" "),e("li",[t._v("8.要跟踪mutation的进度，可以使用系统表 system.mutations。")]),t._v(" "),e("li",[t._v("9.已完成的mutations记录不会立即删除（要保留的记录数量由 finished_mutations_to_keep 这一参数决定）。之前的mutation记录会被删除。")])]),t._v(" "),e("h3",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("p",[t._v("ALTER TABLE [db.]table DELETE WHERE filter_expr")]),t._v(" "),e("h3",{attrs:{id:"_2-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[t._v("#")]),t._v(" 2.示例")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALTER")]),t._v(" table test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" where id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALTER")]),t._v(" table test update name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" where id "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IN")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SELECT")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FROM")]),t._v(" test where eventTime "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-02-22'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("复制")]),t._v(" "),e("h3",{attrs:{id:"_3-过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-过程"}},[t._v("#")]),t._v(" 3.过程")]),t._v(" "),e("p",[t._v("当执行了update或者delete操作后，数据的存储目录会发生变化。每一个原有的"),e("a",{attrs:{href:"https://cloud.tencent.com/product/cdcs?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据存储"),e("OutboundLink")],1),t._v("目录都会新增一个同名目录，这个同名目录后面会加上一个后缀，并且会多出一个txt文件。 例如： 202102_1_1_0目录会多出一个202102_1_1_0_2目录； 多个一个mutation_2.txt文件。")]),t._v(" "),e("p",[t._v("这个txt文件是一个日志文件，记录了update或者delete操作的执行语句和时间。")]),t._v(" "),e("p",[t._v("以数据删除为例：数据的删除过程，是以数据表的每个分区目录为单位，将所有目录重写为新的目录。数据在重写的过程中会将需要删除的数据移除掉。旧的数据目录并不会立即删除，而是会被标记为非激活状态（active为0）。当到MergeTree引擎下一次合并动作触发时，这些非激活目录才会被真正的物理删除。")]),t._v(" "),e("p",[t._v("因此，删除和更新操作，是一个很重的操作。不适合单条处理。")]),t._v(" "),e("h3",{attrs:{id:"_4-实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-实践"}},[t._v("#")]),t._v(" 4.实践")]),t._v(" "),e("p",[t._v("亲测一条sql更新400万条记录中的一个字段时，"),e("a",{attrs:{href:"https://cloud.tencent.com/solution/database?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库"),e("OutboundLink")],1),t._v("会崩溃。在后续超过2小时的时间，数据库访问都是超时，偶尔可以执行最简单的sql。没办法，只能把表删除了重建。")]),t._v(" "),e("p",[t._v("原因：")]),t._v(" "),e("p",[t._v("执行了批量更新字段 — 这是作死的操作")]),t._v(" "),e("p",[t._v("ALTER table java4all.atable on cluster ck update sampleTag = ‘white’ where sequenceId IN (")]),t._v(" "),e("p",[t._v("SELECT raba.sequenceId FROM java4all.atable raba where raba.partnerCode = ‘demo’ and raba.appName = ‘autoTest’")]),t._v(" "),e("p",[t._v(");")]),t._v(" "),e("p",[t._v("sql效果：更新400万条数据，每条数据更新一个字段值。")]),t._v(" "),e("p",[t._v("后果：ck集群在3小时内，无法响应请求，sql执行都是time out。")]),t._v(" "),e("p",[t._v("查询：SELECT * FROM system.mutations where database = ‘forseti’;时is_done一直是0；三小时内查询都是这样子。")]),t._v(" "),e("p",[t._v("删除： KILL MUTATION where database = ‘forseti’; 执行此操作，试图kill掉此次mutation操作。")]),t._v(" "),e("p",[t._v("结果：kill掉后，查看日志，发现依旧再刷错误日志。")]),t._v(" "),e("p",[t._v("删除表：直接把表删除。")]),t._v(" "),e("p",[t._v("结果：还是持续报错，此时一直报找不到分区parts，merge parts出错。意味着，尽管kill 了mutation和删了表，后台还在持续去执行mutation操作。")]),t._v(" "),e("p",[t._v("集群情况：双副本都挂掉了。")]),t._v(" "),e("p",[t._v("重启解决。")]),t._v(" "),e("p",[t._v("结论：彻底禁用update操作！！！")]),t._v(" "),e("p",[t._v("转载自：https://cloud.tencent.com/developer/article/1911598")])])}),[],!1,null,null,null);a.default=n.exports}}]);