# 1. 无重复字符的最长子串[3]

## 题目

[LeetCode](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

示例 1:

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 滑动窗口

滑动窗口是基于 **双指针** 的一种算法，主要可以分为固定长度的滑动窗口和长度动态变化的滑动窗口。本题即为一个可变长度的滑动窗口。

以 `abcabcbb` 为例：

> left = 0, right = 2 => **abc**abcbb [len = 3]
> 
> left = 1, right = 3 => a**bca**bcbb [len = 3]
> 
> left = 2, right = 4 => ab**cab**cbb [len = 3]
> 
> left = 3, right = 5 => abc**abc**bb [len = 3]
> 
> left = 4, right = 5 => abca**bc**bb [len = 2]
> 
> left = 5, right = 6 => abcab**cb**b [len = 2]
> 
> left = 6, right = 6 => abcabc**b**b [len = 1]
> 
> left = 7, right = 7 => abcabcb**b** [len = 1]

```javascript
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let right = -1 // 右指针初始状态为-1
    let ans = 0

    for (let left = 0; left < s.length; left++) {
        // 如果left > 0，那么滑动窗口时将左边界向右移一位
        if (left !== 0) {
            set.delete(s[left - 1])
        }

        // 当右指针不越界且无重复时，不断增加右边界
        while (right + 1 < s.length && !set.has(s[right + 1])) {
            set.add(s[right + 1])
            right += 1
        }
        ans = Math.max(ans, right - left + 1)
    }

    return ans
};
```
