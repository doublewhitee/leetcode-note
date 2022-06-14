(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{415:function(t,e,v){"use strict";v.r(e);var _=v(56),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"位运算知识梳理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#位运算知识梳理"}},[t._v("#")]),t._v(" 位运算知识梳理")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("程序中的所有数在计算机内存中都是以二进制的形式储存的，而位运算就是直接对整数在内存中的二进制位进行操作。")]),t._v(" "),v("p",[t._v("ECMAScript 整数包括两种类型，即 "),v("strong",[t._v("有符号整数")]),t._v(" 和 "),v("strong",[t._v("无符号整数")]),t._v("。")]),t._v(" "),v("p",[t._v("有符号整数中使用32位的前31位表示整数值，第32位表示 "),v("strong",[t._v("数值的符号")]),t._v(" ，其中 "),v("code",[t._v("0")]),t._v(" 表示正， "),v("code",[t._v("1")]),t._v(" 表示负。这一位是 "),v("strong",[t._v("符号位")]),t._v("，其值决定了数值其余部分的格式。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("正值以真正的二进制格式存储，即31位中的每一位都代表2的幂。例如：")]),t._v(" "),v("blockquote",[v("p",[t._v("0000 0000 0000 0000 0000 0000 0001 0010    ---\x3e   18")])])]),t._v(" "),v("li",[v("p",[t._v("负值通过二进制补码存储，起计算方法为：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("确定绝对值的二进制表示（如对于 "),v("code",[t._v("-18")]),t._v(" ，确定 "),v("code",[t._v("18")]),t._v(" 的二进制）")])]),t._v(" "),v("li",[v("p",[t._v("求二进制反码（即每个0都变成1，每个1都变成0）")])]),t._v(" "),v("li",[v("p",[t._v("最后给补数加一")])])]),t._v(" "),v("blockquote",[v("p",[t._v("1111 1111 1111 1111 1111 1111 1110 1110   ---\x3e   -18")])])])]),t._v(" "),v("p",[t._v("JavaScript的整数默认都是有符号的，如果需要使用无符号整数，可以通过无符号右移运算符将数字转换成无符号整数。")]),t._v(" "),v("h2",{attrs:{id:"js中的位操作符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js中的位操作符"}},[t._v("#")]),t._v(" JS中的位操作符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("按位非")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("~")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("返回数值的补数（反转所有位）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("按位与")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("&")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("如果两位都是1则设置每位为1，任何一位为0则为0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("按位或")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("|")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("如果两位之一为1则设置每位为1，否则为0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("按位异或")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("^")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("如果两位只有一位为1则设置每位为1，两位均相同为0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("左移")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("<<")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("通过从右推入零向左位移，并使最左边的位脱落")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("有符号右移")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v(">>")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("通过从左推入最左位的拷贝（符号位）来向右位移，并使最右边的位脱落")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("无符号右移")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v(">>>")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("通过从左推入0来向右位移，并使最右边的位脱落")])])])]),t._v(" "),v("p",[t._v("其中，左移和右移的运算符优先级高于其他位操作符。")]),t._v(" "),v("h2",{attrs:{id:"实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),v("p",[t._v("假设使用4位无符号二进制数，则以下位操作的结果为：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("结果")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("等同于")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 & 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 & 0001")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0001")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 | 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 | 0001")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 ^ 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 ^ 0001")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0100")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("~ 5")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("~0101")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1010")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 << 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 << 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1010")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 >> 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 >> 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0010")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5 >>> 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0101 >>> 1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0010")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);