(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{739:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("h2",{attrs:{id:"官方介绍文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方介绍文档"}},[s._v("#")]),s._v(" 官方介绍文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PaddlePaddle/PaddleNLP/tree/develop/applications/sentiment_analysis/unified_sentiment_extraction",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击跳转"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),t("blockquote",[t("p",[s._v("服务器需要支持avx2指令")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# conda create --name nlp python=3.8 --channel https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 激活环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata-24-251 envs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# source activate")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata-24-251 envs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# conda activate  nlp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nlp4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bigdata-24-251 envs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("安装python依赖")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pip install --force-reinstall paddlepaddle==2.5.0rc1 -i https://pypi.tuna.tsinghua.edu.cn/simple\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pip install --use-pep517 paddlenlp==2.6.0 -i https://mirror.baidu.com/pypi/simple\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pip install wordcloud==1.8.2.2 -i https://mirror.baidu.com/pypi/simple\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装过程可能会遇到"),t("code",[s._v("问题1")]),s._v("，按照文末"),t("code",[s._v("问题1")]),s._v("步骤解决即可")]),s._v(" "),t("h2",{attrs:{id:"源码下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码下载"}},[s._v("#")]),s._v(" 源码下载")]),s._v(" "),t("p",[t("strong",[s._v("方法一")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir /opt/jast && cd /opt/jast && git clone https://github.com/PaddlePaddle/PaddleNLP.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("Gitee地址为："),t("code",[s._v("git clone https://gitee.com/paddlepaddle/PaddleNLP.git")])])]),s._v(" "),t("p",[t("strong",[s._v("方法二")])]),s._v(" "),t("p",[s._v("直接下载代码上传到服务器"),t("code",[s._v("/opt/jast")]),s._v("目录")]),s._v(" "),t("p",[t("strong",[s._v("解压")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("unzip PaddleNLP-develop.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("调用")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" paddlenlp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Taskflow\nschema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'评价维度'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'观点词'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'情感倾向[正向,负向,未提及]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsenta "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Taskflow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sentiment_analysis"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uie-senta-base"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsenta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文本内容"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"定制情感分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定制情感分析"}},[s._v("#")]),s._v(" 定制情感分析")]),s._v(" "),t("p",[t("strong",[s._v("进入目录")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PaddleNLP-develop/applications/sentiment_analysis/unified_sentiment_extraction/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("创建目录")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("上传标注数据")])]),s._v(" "),t("p",[s._v("这里上传的是标注的样例数据")]),s._v(" "),t("p",[s._v("为方便用户使用，本项目提供了300+条酒店场景的标注数据，可点击"),t("a",{attrs:{href:"https://paddlenlp.bj.bcebos.com/datasets/sentiment_analysis/hotel/label_studio.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("进行下载，请注意该数据仅适合用于 "),t("code",[s._v("抽取")]),s._v(" 类型的任务。")]),s._v(" "),t("h3",{attrs:{id:"样本构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样本构建"}},[s._v("#")]),s._v(" 样本构建")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python label_studio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("label_studio_file "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("label_studio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("task_type ext \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("save_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("splits "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("options "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"正向"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"负向"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"未提及"')]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("negative_ratio "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("is_shuffle "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seed "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("执行完成后会在"),t("code",[s._v("data/")]),s._v("目录下看到生成"),t("code",[s._v("dev.json")]),s._v("、"),t("code",[s._v("test.json")]),s._v("、"),t("code",[s._v("train.json")]),s._v("三个文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ll data/\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1608")]),s._v("\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101635")]),s._v(" Sep  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:48 dev.json\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("585483")]),s._v(" Jan  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" label_studio.json\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95080")]),s._v(" Sep  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:48 test.json\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("858816")]),s._v(" Sep  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:48 train.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"模型训练"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型训练"}},[s._v("#")]),s._v(" 模型训练")]),s._v(" "),t("p",[s._v("运行命令-官方提供的")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m paddle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("distributed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("launch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gpus "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" finetune"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("train_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("train"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("save_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("learning_rate "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1e-5")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("num_epochs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model uie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("senta"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("base \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seed "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logging_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("valid_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" \\\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("device gpu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("运行命令-自己运行的CPU服务器")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("nohup python "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m paddle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("distributed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("launch  finetune"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("train_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("train"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("save_dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("learning_rate "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1e-5")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("num_epochs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model uie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("senta"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("base \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seed "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("logging_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("valid_steps "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" \\\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("device cpu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("可配置参数说明：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("train_path")]),s._v("：必须，训练集文件路径。")]),s._v(" "),t("li",[t("code",[s._v("dev_path")]),s._v("：必须，验证集文件路径。")]),s._v(" "),t("li",[t("code",[s._v("save_dir")]),s._v('：模型 checkpoints 的保存目录，默认为"./checkpoint"。')]),s._v(" "),t("li",[t("code",[s._v("learning_rate")]),s._v("：训练最大学习率，UIE 推荐设置为 1e-5；默认值为1e-5。")]),s._v(" "),t("li",[t("code",[s._v("batch_size")]),s._v("：训练集训练过程批处理大小，请结合显存情况进行调整，若出现显存不足，请适当调低这一参数；默认为 16。")]),s._v(" "),t("li",[t("code",[s._v("max_seq_len")]),s._v("：模型支持处理的最大序列长度，默认为512。")]),s._v(" "),t("li",[t("code",[s._v("num_epochs")]),s._v("：模型训练的轮次，可以视任务情况进行调整，默认为10。")]),s._v(" "),t("li",[t("code",[s._v("model")]),s._v("：训练使用的预训练模型。可选择的有"),t("code",[s._v("uie-senta-base")]),s._v(", "),t("code",[s._v("uie-senta-medium")]),s._v(", "),t("code",[s._v("uie-senta-mini")]),s._v(", "),t("code",[s._v("uie-senta-micro")]),s._v(", "),t("code",[s._v("uie-senta-nano")]),s._v("，默认为"),t("code",[s._v("uie-senta-base")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("logging_steps")]),s._v(": 训练过程中日志打印的间隔 steps 数，默认10。")]),s._v(" "),t("li",[t("code",[s._v("valid_steps")]),s._v(": 训练过程中模型评估的间隔 steps 数，默认100。")]),s._v(" "),t("li",[t("code",[s._v("seed")]),s._v("：全局随机种子，默认为 42。")]),s._v(" "),t("li",[t("code",[s._v("device")]),s._v(": 训练设备，可选择 'cpu'、'gpu' 其中的一种；默认为 GPU 训练。")])]),s._v(" "),t("h3",{attrs:{id:"模型测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型测试"}},[s._v("#")]),s._v(" 模型测试")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("python evaluate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("model_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("checkpoint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("model_best \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test_path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("batch_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" \\\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("max_seq_len "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("可配置参数说明：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("model_path")]),s._v("：必须，进行评估的模型文件夹路径，路径下需包含模型权重文件model_state.pdparams及配置文件model_config.json。")]),s._v(" "),t("li",[t("code",[s._v("test_path")]),s._v("：必须，进行评估的测试集文件。")]),s._v(" "),t("li",[t("code",[s._v("batch_size")]),s._v("：训练集训练过程批处理大小，请结合显存情况进行调整，若出现显存不足，请适当调低这一参数；默认为 16。")]),s._v(" "),t("li",[t("code",[s._v("max_seq_len")]),s._v("：文本最大切分长度，输入超过最大长度时会对输入文本进行自动切分，默认为512。")]),s._v(" "),t("li",[t("code",[s._v("debug")]),s._v("： 是否开启debug模式对每个正例类别分别进行评估，该模式仅用于模型调试，默认关闭。")])]),s._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("h3",{attrs:{id:"问题1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[s._v("#")]),s._v(" 问题1")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Error: Can not import paddle core while this file exists: /Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/libpaddle.so\nTraceback (most recent call last):\n  File "/Users/mac/PycharmProjects/NLP-SentimentAnalysis  /Demo.py", line 1, in <module>\n    from paddlenlp import Taskflow\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddlenlp/__init__.py", line 33, in <module>\n    import paddle\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/__init__.py", line 31, in <module>\n    from .framework import monkey_patch_variable\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/framework/__init__.py", line 17, in <module>\n    from . import random  # noqa: F401\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/framework/random.py", line 17, in <module>\n    from paddle import fluid\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/__init__.py", line 36, in <module>\n    from . import framework\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/framework.py", line 35, in <module>\n    from . import core\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/core.py", line 356, in <module>\n    raise e\n  File "/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/core.py", line 269, in <module>\n    from . import libpaddle\nImportError: dlopen(/Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/libpaddle.so, 2): Symbol not found: __ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE5closeEv\n  Referenced from: /Users/mac/opt/anaconda3/envs/NLP-SentimentAnalysis/lib/python3.8/site-packages/paddle/fluid/libpaddle.so (which was built for Mac OS X 13.0)\n  Expected in: /usr/lib/libc++.1.dylib\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("原因：我现在了"),t("code",[s._v("2.5.1")]),s._v("版本，当前Mac系统不支持该版本，降低版本到"),t("code",[s._v("2.5.0")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pip install --force-reinstall paddlepaddle==2.5.0 -i https://mirror.baidu.com/pypi/simple\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);