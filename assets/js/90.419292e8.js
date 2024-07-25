(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{429:function(t,_,v){"use strict";v.r(_);var a=v(0),s=function(t){t.options.__data__block__={flowchart_1a962852:"\nst=>start: 开始\n\np1=>operation: 通知本部门、运营维护部领导知晓\n\np3=>operation: 运营维护部成员提供升级服务器，开发人员进行升级部署\n\np4=>operation: 通知信息办漏扫\n\np5=>operation: 运营维护部迁移IP、硬盘、CPU等\n\np6=>operation: 信息办漏扫\n\np7=>operation: 项目经理与甲方沟通，停机时间\n\ne=>end: 结束\n\nst->p1(right)->p3->p4(right)->p7(right)->p5->p6->e\n"}},i=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),_("p",[t._v("根据实际业务场景描述内部云服务器升级步骤")])]),t._v(" "),_("h2",{attrs:{id:"流程图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),_("FlowChart",{attrs:{id:"flowchart_1a962852",code:t.$dataBlock.flowchart_1a962852,preset:"ant"}}),_("h2",{attrs:{id:"升级方式-云服务器模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#升级方式-云服务器模式"}},[t._v("#")]),t._v(" 升级方式-云服务器模式")]),t._v(" "),_("p",[_("strong",[t._v("新服务器：")]),t._v(" 升级后的服务器（原服务器更新后的服务器）")]),t._v(" "),_("p",[_("strong",[t._v("原服务器：")]),t._v(" 未升级的服务器（存在漏洞问题的服务器）")]),t._v(" "),_("h2",{attrs:{id:"第一步-沟通"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一步-沟通"}},[t._v("#")]),t._v(" 第一步 沟通")]),t._v(" "),_("ul",[_("li",[t._v("与本部门领导沟通，让领导与运营维护部领导协调，安排工作事项")]),t._v(" "),_("li",[t._v("与项目经理沟通，让项目经理与客户沟通，确认服务器可以升级的时间，并确认服务器在什么时间段是否允许停机升级等")]),t._v(" "),_("li",[t._v("联系运营维护部，让其提供一台新的服务器并提供账号密码，并且要求新服务器允许访问原服务器的数据库服务器/应用服务器")])]),t._v(" "),_("h2",{attrs:{id:"第二步-部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二步-部署"}},[t._v("#")]),t._v(" 第二步 部署")]),t._v(" "),_("ul",[_("li",[t._v("服务器必须要Windos Server2008以上，建议使用2016（公司内部，目前有2016操作系统）以上版本，使用版本时要根据应用实际情况考虑兼容性问题，如是数据库服务器根据数据库选择服务器，如Mysql等建议选择Centos 7.5以上版本")]),t._v(" "),_("li",[t._v("登录服务器，安装相应软件如（数据库、IIS等）")]),t._v(" "),_("li",[t._v("配置Windows安全基线，"),_("a",{attrs:{href:"/word/2.%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8%E6%A3%80%E6%9F%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%89%8B%E5%B7%A5%E6%A3%80%E6%9F%A5%E6%8A%A5%E5%91%8A-WS%E6%A0%87%E5%87%86.doc"}},[t._v("Windows安全基线手册")])]),t._v(" "),_("li",[t._v("安装IIS时，安装静态资源库")]),t._v(" "),_("li",[t._v("安装telnet，检测是否能访问端口")]),t._v(" "),_("li",[t._v("开通端口应配置防火墙策略，只对限定位置开放端口，如（公司内网等）, 外网端口需要配置入站规则（如80、443）")]),t._v(" "),_("li",[t._v("3389等远程端口，默认只允许公司内网访问")]),t._v(" "),_("li",[t._v("联系运营维护部（张昊然、吴鹏）将涉及漏扫的服务器IP地址及端口号，向信息办开通")]),t._v(" "),_("li",[t._v("安装360天擎杀毒软件，对服务器进行漏扫，如不知道下载地址，询问运营维护部相关人员")]),t._v(" "),_("li",[t._v("应用部署成功、端口开通成功后，联系信息办（郑海）进行漏扫，根据漏扫情况进行调整")]),t._v(" "),_("li",[t._v("如应用使用外网，需要放行443端口，并且http需要重定向到https")])]),t._v(" "),_("h2",{attrs:{id:"第三步-服务器切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三步-服务器切换"}},[t._v("#")]),t._v(" 第三步 服务器切换")]),t._v(" "),_("ul",[_("li",[t._v("联系项目经理，让其与客户进行沟通，确认可进行系统升级时间")]),t._v(" "),_("li",[t._v("原服务器进行关机，并记录网络适配器中个IP配置参数")]),t._v(" "),_("li",[t._v("登录新服务器将新服务器IP更改为老服务器IP，使IP与原服务器一致")]),t._v(" "),_("li",[t._v("一切处理完毕后，联系运营维护部（张昊然、吴鹏）将原服务器硬盘重新挂载到新服务器上")]),t._v(" "),_("li",[t._v("重新配置IIS网站项目路径，将地址指向挂载后的硬盘项目地址")]),t._v(" "),_("li",[t._v("配置完成后，记得将新服务器密码更改一个复杂的密码，保证安全性")]),t._v(" "),_("li",[t._v("然后通知运营维护部（张昊然、吴鹏）、项目经理、客户升级完毕，并告知运营维护部（张昊然、吴鹏）将原服务器进行保留2-3天，以保证如果新服务器出现问题，可快速切换回老服务器")])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(i);_.default=i.exports}}]);