# 1. 2 的幂[231]

## 题目

[LeetCode](https://leetcode.cn/problems/power-of-two/)

给你一个整数 `n`，请你判断该整数是否是 `2` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

如果存在一个整数 `x` 使得 n ==  x<sup>2</sup> ，则认为 `n` 是 2 的幂次方。

示例 1:

```
输入：n = 1
输出：true
解释：2^0 = 1
```

示例 2:

```
输入：n = 16
输出：true
解释：2^4 = 16
```

示例 3:

```
输入：n = 3
输出：false
```

## 二进制表示

2<sup>n</sup>的二进制具有以下特点：

| 2<sup>n</sup> | 二进制  | n - 1的二进制 | -n的二进制 |
|:-------------:|:----:|:---------:|:------:|
| 2<sup>0</sup> | 0001 | 0000      | 1111   |
| 2<sup>1</sup> | 0010 | 0001      | 1110   |
| 2<sup>2</sup> | 0100 | 0011      | 1100   |
| 2<sup>3</sup> | 1000 | 0111      | 1000   |

因此可以看出，2的幂计算 `n & (n - 1)` 无相同位，结果为必然为0；计算 `n & -n` 结果必然等于自身。

```javascript
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0
};
```

```javascript
var isPowerOfTwo = function(n) {
    return n > 0 && (n & -n) === n
};
```

## 判断是否为最大数的约数

题目给定的的范围中， `n` 最大为 2<sup>30</sup> ，因此我们只需要判断 `n` 是否是这个最大数的 **约数** 即可。

```javascript
var isPowerOfTwo = function(n) {
    const BIG = 1 << 30;
    return n > 0 && BIG % n === 0;
};
```
