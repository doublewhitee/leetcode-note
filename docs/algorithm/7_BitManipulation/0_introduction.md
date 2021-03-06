# 位运算知识梳理

## 简介

程序中的所有数在计算机内存中都是以二进制的形式储存的，而位运算就是直接对整数在内存中的二进制位进行操作。

ECMAScript 整数包括两种类型，即 **有符号整数** 和 **无符号整数**。

有符号整数中使用32位的前31位表示整数值，第32位表示 **数值的符号** ，其中 `0` 表示正， `1` 表示负。这一位是 **符号位**，其值决定了数值其余部分的格式。

+ 正值以真正的二进制格式存储，即31位中的每一位都代表2的幂。例如：
  
  > 0000 0000 0000 0000 0000 0000 0001 0010    --->   18

+ 负值通过二进制补码存储，起计算方法为：
  
  1. 确定绝对值的二进制表示（如对于 `-18` ，确定 `18` 的二进制）
  
  2. 求二进制反码（即每个0都变成1，每个1都变成0）
  
  3. 最后给补数加一
  
  > 1111 1111 1111 1111 1111 1111 1110 1110   --->   -18

JavaScript的整数默认都是有符号的，如果需要使用无符号整数，可以通过无符号右移运算符将数字转换成无符号整数。

## JS中的位操作符

| 名称    | 符号      | 描述                               |
|:-----:|:-------:|:--------------------------------:|
| 按位非   | **~**   | 返回数值的补数（反转所有位）                   |
| 按位与   | **&**   | 如果两位都是1则设置每位为1，任何一位为0则为0         |
| 按位或   | **\|**  | 如果两位之一为1则设置每位为1，否则为0             |
| 按位异或  | **^**   | 如果两位只有一位为1则设置每位为1，两位均相同为0        |
| 左移    | **<<**  | 通过从右推入零向左位移，并使最左边的位脱落            |
| 有符号右移 | **>>**  | 通过从左推入最左位的拷贝（符号位）来向右位移，并使最右边的位脱落 |
| 无符号右移 | **>>>** | 通过从左推入0来向右位移，并使最右边的位脱落           |

其中，左移和右移的运算符优先级高于其他位操作符。

## 实例

假设使用4位无符号二进制数，则以下位操作的结果为：

| 操作      | 结果  | 等同于          | 结果   |
|:-------:|:---:|:------------:|:----:|
| 5 & 1   | 1   | 0101 & 0001  | 0001 |
| 5 \| 1  | 5   | 0101 \| 0001 | 0101 |
| 5 ^ 1   | 4   | 0101 ^ 0001  | 0100 |
| ~ 5     | 10  | ~0101        | 1010 |
| 5 << 1  | 10  | 0101 << 1    | 1010 |
| 5 >> 1  | 2   | 0101 >> 1    | 0010 |
| 5 >>> 1 | 2   | 0101 >>> 1   | 0010 |
