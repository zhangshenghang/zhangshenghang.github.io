(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{751:function(s,t,n){"use strict";n.r(t);var a=n(20),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("常出现的使用误区：")]),s._v(" "),n("p",[s._v("**误区一：**在driver上创建连接对象（比如网络连接或数据库连接）")]),s._v(" "),n("p",[s._v("如果在driver上创建连接对象，然后在RDD的算子函数内使用连接对象，那么就意味着需要将连接对象序列化后从driver传递到worker上。而连接对象（比如Connection对象）通常来说是不支持序列化的，此时通常会报序列化的异常（serialization errors）。因此连接对象必须在worker上创建，不要在driver上创建。")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[s._v("dstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachRDD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rdd "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\n　　"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" connection "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" createNewConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数据库连接在driver上执行")]),s._v("\n　　rdd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreach "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" record "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\n　　connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在worker上执行")]),s._v("\n　　"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("**误区二：**为每一条记录都创建一个连接对象")]),s._v(" "),n("p",[s._v("通常来说，连接对象的创建和销毁都是很消耗时间的。因此频繁地创建和销毁连接对象，可能会导致降低spark作业的整体性能和吞吐量。")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[s._v("dstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachRDD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rdd "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\nrdd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreach "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" record "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" connection "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" createNewConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//每插入一条数据，创建一个连接")]),s._v("\n    connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("比较正确的做法是：对DStream中的RDD，调用foreachPartition，对RDD中每个分区创建一个连接对象，使用一个连接对象将一个分区内的数据都写入数据库中。这样可以大大减少创建的连接对象的数量。")]),s._v(" "),n("p",[s._v("**正确做法一：**为每个RDD分区创建一个连接对象")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[s._v("dstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachRDD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rdd "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\nrdd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachPartition "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" partitionOfRecords "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" connection "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" createNewConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    partitionOfRecords"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreach"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("**正确做法二：**为每个RDD分区使用一个连接池中的连接对象")]),s._v(" "),n("div",{staticClass:"language-scala line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scala"}},[n("code",[s._v("dstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachRDD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rdd "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\nrdd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreachPartition "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" partitionOfRecords "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从数据库连接池中获取连接")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" connection "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ConnectionPool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    partitionOfRecords"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foreach"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    ConnectionPool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("returnConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用完以后将连接返    回给连接池，进行复用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);