(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{638:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("p",[s._v("使用Nginx反向代理转发Kibana经常会遇到404的错误，这里介绍解决该问题的方法。")]),s._v(" "),t("p",[s._v("直接上正确的配置")]),s._v(" "),t("h2",{attrs:{id:"修改kibana配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改kibana配置"}},[s._v("#")]),s._v(" 修改Kibana配置")]),s._v(" "),t("p",[s._v("这里重点是"),t("code",[s._v('server.basePath: "/kibana_prd"')]),s._v("参数一会转发用")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.basePath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/kibana_prd"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server.rewriteBasePath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch.hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://ip:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kibana.index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".kibana"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("i18n.locale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zh-CN"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" Nginx配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n\tlisten 18080;\n\tserver_name localhost;\n\tlocation /kibana_prd\t{\n\t\trewrite ^/kibana_prd(/.*)$ $1 break;\n\t\tproxy_pass http://192.168.1.1:5601/;\n\t\tproxy_set_header Host $host;\n\t\tproxy_set_header Connection 'upgrade';\n\t\tproxy_cache_bypass $http_upgrade;\n\t}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这段Nginx配置涉及设置一个服务监听在端口18080，并配置了一个特定的路径转发到Kibana的服务。下面详细解释各个部分：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[t("code",[s._v("listen 18080;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这一行配置Nginx监听在18080端口。任何发到这个端口的HTTP请求都会被这个server块处理。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("server_name localhost;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这里指定"),t("code",[s._v("server_name")]),s._v("为"),t("code",[s._v("localhost")]),s._v("，意味着只有在请求头中"),t("code",[s._v("Host")]),s._v("字段为"),t("code",[s._v("localhost")]),s._v("的请求才会由此server块处理。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("location /kibana_prd")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这条指令定义了一个location块，只处理URL路径以"),t("code",[s._v("/kibana_prd")]),s._v("开头的请求。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("rewrite ^/kibana_prd(/.*)$ $1 break;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这行是一个重写规则。它的作用是将以"),t("code",[s._v("/kibana_prd")]),s._v("开头的请求路径中的"),t("code",[s._v("/kibana_prd")]),s._v("部分去掉。例如，"),t("code",[s._v("/kibana_prd/index.html")]),s._v("会被重写为"),t("code",[s._v("/index.html")]),s._v("。"),t("code",[s._v("break")]),s._v("表示停止处理后续的rewrite规则。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("proxy_pass http://192.168.1.1:5601/;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这行配置Nginx将请求代理到内部网络中的另一台服务器（IP地址为192.168.1.1，端口为5601），这通常是Kibana服务所在的位置。注意末尾的斜杠"),t("code",[s._v("/")]),s._v("很重要，它保证了重写后的URI被正确地传递给代理服务器。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("proxy_set_header Host $host;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这条指令设置代理请求的HTTP头部中的"),t("code",[s._v("Host")]),s._v("字段为原始请求的"),t("code",[s._v("Host")]),s._v("值，通常是"),t("code",[s._v("localhost")]),s._v("。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("proxy_set_header Connection 'upgrade';")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("这条指令设置代理请求的"),t("code",[s._v("Connection")]),s._v("头部为"),t("code",[s._v("upgrade")]),s._v("，这在WebSocket连接中通常需要，用于处理升级为WebSocket的HTTP连接。")])])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("proxy_cache_bypass $http_upgrade;")])]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("如果"),t("code",[s._v("$http_upgrade")]),s._v("变量（通常在WebSocket连接中设置为"),t("code",[s._v("upgrade")]),s._v("）为非空，这条指令会使Nginx绕过缓存，直接将请求发给后端服务器。这在处理不应被缓存的动态内容时很有用。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);