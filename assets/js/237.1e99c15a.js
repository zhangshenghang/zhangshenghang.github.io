(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{714:function(e,s,a){"use strict";a.r(s);var t=a(20),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"控制台指定消费者组消费数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制台指定消费者组消费数据"}},[e._v("#")]),e._v(" 控制台指定消费者组消费数据")]),e._v(" "),a("p",[e._v("在 Kafka 中，消费者可以通过设置消费者组的消费偏移量（consumer offset）来控制从哪个偏移量开始消费数据。如果消费者组还没有消费过任何数据，则可以通过指定偏移量为最早的偏移量来消费最早的数据。")]),e._v(" "),a("p",[e._v("在 Kafka 2.x 版本中，可以通过以下命令行指定消费者组消费最早的数据：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kafka-console-consumer.sh --bootstrap-server <broker_host>:<broker_port> --topic <topic_name> --group <consumer_group_name> --from-beginning\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其中，"),a("code",[e._v("--from-beginning")]),e._v(" 参数表示从最早的偏移量开始消费数据。")]),e._v(" "),a("p",[e._v("例如，要在消费者组 "),a("code",[e._v("my-group")]),e._v(" 中消费主题 "),a("code",[e._v("my-topic")]),e._v(" 的最早数据，可以使用以下命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic my-topic --group my-group --from-beginning\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("注意，如果消费者组已经消费过一些数据，则指定 "),a("code",[e._v("--from-beginning")]),e._v(" 参数将会从最早的偏移量开始消费，而不是从消费者组当前的偏移量开始消费。因此，应该在消费者组还没有消费过任何数据时使用该参数。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);