# 4. 最长公共子序列[1143]

## 题目

[LeetCode](https://leetcode.cn/problems/longest-common-subsequence/)

给定两个字符串 `text1` 和 `text2`，返回这两个字符串的最长 **公共子序列** 的长度。如果不存在 **公共子序列** ，返回 `0` 。

一个字符串的 **子序列** 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，`"ace"` 是 `"abcde"` 的子序列，但 `"aec"` 不是 `"abcde"` 的子序列。
两个字符串的 **公共子序列** 是这两个字符串所共同拥有的子序列。

示例 1:

```
输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
```

示例 2:

```
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
```

示例 3:

```
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
```

## 动态规划

经典动态规划问题。定义字符串 `text1` 和 `text2` 的长度分别为 `m` 和 `n` ，创建 `m+1` 行 `n+1` 列的二维数组 dp，其中 `dp[i][j]` 表示 `text1[0: i]`  和 `text2[0: j]` 的最长公共子序列的长度。

`dp[i][j]` 中， `i` 或 `j` 为 `0` 代表了该字符串长度为 `0` 的前缀，因此为空字符串，其公共子序列也为空字符串，可得 `dp[0][j]` 和 `dp[i][0]` 一定为 `0` 。

如果 `text1[i - 1]` 与 `text2[j - 1]` 为相同字符，则说明他们的最长公共子序列长度`dp[i][j]` 为 `dp[i - 1][j - 1] + 1` 。如果两者不相同，那么最大值只会来自以下两种情况：

+ `text1[0: i - 1]` 和 `text2[0: j]` 的最长公共子序列

+ `text1[0: i]` 和 `text2[0: j - 1]` 的最长公共子序列

因此，状态转移方程可以表示为：

<latexDisplay>
dp[i][j]=
\begin{cases}
dp[i - 1][j - 1] + 1 & \text{text1[i - 1] === text2[j - 1]}\\
Math.max(dp[i - 1][j], dp[i][j - 1]) & \text{text1[i - 1] !== text2[j - 1]}
\end{cases}
</latexDisplay>

则 `dp[m][n]` 即为 `text1` 和 `text2` 的 **最长公共子序列**。

<img title="" src="https://pic.leetcode-cn.com/1617411822-KhEKGw-image.png" alt="" width="603">

```javascript
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (let i = 1; i <= m; i++) {
        const c1 = text1[i - 1]
        for (let j = 1; j <= n; j++) {
            const c2 = text2[j - 1]
            if (c1 === c2) {
                // 字符相等 则为之前的最长公共子序列长度 + 1
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                // 否则 两种情况
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n]
};
```