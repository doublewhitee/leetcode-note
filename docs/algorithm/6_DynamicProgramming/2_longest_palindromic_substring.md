# 2. 最长回文子串[5]

## 题目

[LeetCode](https://leetcode.cn/problems/longest-palindromic-substring/)

给你一个字符串 `s`，找到 `s` 中最长的回文子串。

示例 1:

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

示例 2:

```
输入：s = "cbbd"
输出："bb"
```

## 动态规划

回文子串有以下三种情况：

1. **长度为1**：`s[i]` 必然是一个回文串

2. **长度为2**：若 `s[i] === s[i + 1]` ，则是一个回文串

3. **长度大于2**：若 `s[i] === s[j]` 且范围为 `[i + 1, j - 1]` 的子串是一个回文串，则范围 `[i, j]` 也是一个回文串

因此，可以定义二维数组 `dp[i][j]` 表示 **字符串 s 的第 i 到 j 个字母组成的串** 是否为回文串。即：

<latexDisplay>
dp[i][j]=
\begin{cases}
true & \text{字符串 s 的第 i 到 j 个字母组成的串是回文串}\\
false & \text{其他}
\end{cases}
</latexDisplay>

同时根据上述分析，可以得到状态转移方程为：

<latexDisplay>
dp[i][j] = dp[i + 1][j - 1] ∧ (s[i] === s[j])
</latexDisplay>

边界条件为：

<latexDisplay>
\begin{cases}
dp[i][i] = true & \text{长度为1}\\
dp[i][i + 1] = (s[i] === s[i + 1]) & \text{长度为2}
\end{cases}
</latexDisplay>

在完成整个动态规划的过程中，记录 `dp[i][j] === true` 情况下子串长度的最大值和起始位置，即可得到答案。

```javascript
var longestPalindrome = function(s) {
    const len = s.length
    if (len === 1) return s // s长度为1，可以直接返回
    const dp = []
    let maxLen = 1
    let start = 0
    // 初始化dp状态数组，长度为1的一定是子串
    for (let i = 0; i < len; i++) {
        dp[i] = []
        dp[i][i] = true
    }

    // l为子串长度，从长度为2开始遍历
    for (let l = 2; l <= len; l++) {
        for (let left = 0; left < len; left++) {
            const right = left + l - 1
            if (right >= len) break // 右边界大于s最大长度

            if (s[left] !== s[right]) {
                dp[left][right] = false
            } else {
                if (l === 2) {
                    dp[left][right] = true
                } else {
                    dp[left][right] = dp[left + 1][right - 1]
                }
            }

            if (dp[left][right] && l > maxLen) {
                maxLen = l
                start = left
            }
        }
    }
    return s.substr(start, maxLen)
};
```

## 中心扩展算法

同样地，我们可以 **从每一种边界情况开始扩展** ，也可以得出所有的状态对应的答案。即从长度为1或长度为2的情况开始，将两种情况分别作为 **回文串的中心**，如果两侧字母相同，则可以扩展；否则停止扩展。

```javascript
const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1
        right += 1
    }
    return right - left - 1 // len
}

var longestPalindrome = function(s) {
    const len = s.length
    if (len === 1) return s

    let start = 0, end = 0
    for (let i = 0; i < len; i++) {
        let len1 = expandAroundCenter(s, i, i) // 长度为1的情况
        let len2 = expandAroundCenter(s, i, i + 1) // 长度为2的情况
        let maxLen = Math.max(len1, len2)
        if (maxLen > end - start + 1) {
            start = i - Math.floor((maxLen - 1) / 2)
            end = i + Math.floor(maxLen / 2)
        }
    }
    return s.substring(start, end + 1)
};
```