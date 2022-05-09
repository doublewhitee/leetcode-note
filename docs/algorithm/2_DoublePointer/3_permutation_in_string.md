# 3. 字符串的排列[567]

## 题目

[LeetCode](https://leetcode-cn.com/problems/permutation-in-string/)

给你两个字符串 `s1` 和 `s2` ，写一个函数来判断 `s2` 是否包含 `s1` 的排列。如果是，返回 `true` ；否则，返回 `false` 。

换句话说，`s1` 的排列之一是 `s2` 的 **子串** 。

示例 1：

```
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
```

示例 2：

```
输入：s1= "ab" s2 = "eidboaoo"
输出：false
```

## 滑动窗口

本题可以通过固定长度（长度为 `s1.length`）的滑动窗口来解决。由于题目要求是包含排列，因此只需要记录 `s1` 中每个字符串出现的次数而不用在意顺序。通过判断 `s1` 中每个字符出现的个数是否和 `s2` 的滑动窗口中字符个数相同，即可判断 `s2` 是否包含 `s1` 的排列。

```javascript
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    // s1_map 记录s1出现的字符个数
    const s1_map = new Array(26).fill(0)
    // s2_map 记录s2当前滑动窗口中出现的字符个数
    const s2_map = new Array(26).fill(0)
    // 由于s2.length >= s1.length，同时记录s1字符个数及s2 [0, s1.length]字符个数
    for (let i = 0; i < s1.length; i++) {
        s1_map[s1[i].charCodeAt() - 97] += 1
        s2_map[s2[i].charCodeAt() - 97] += 1
    }
    if (s1_map.toString() === s2_map.toString()) {
        return true
    }

    for (let i = s1.length; i < s2.length; i++) {
        // 向前滑动，删除s2滑动窗口中i - s1.length位，并新加入第i位
        s2_map[s2[i - s1.length].charCodeAt() - 97] -= 1
        s2_map[s2[i].charCodeAt() - 97] += 1
        if (s1_map.toString() === s2_map.toString()) {
            return true
        }
    }
    return false
};
```

## 双指针

在滑动窗口的解法中，通过 `s1_map` 和 `s2_map` 对 `s1` 和 `s2` 的滑动窗口中每个字符出现次数分别进行记录并对比。此时已经考虑了窗口的长度是固定的。

同样，也可以考察 `s2` 中的某个区间在不出现多余字符的基础上，其区间长度是否等于 `s1.length` 。

```javascript
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    const map = new Array(26).fill(0)
    // 首先记录s1中字符出现的次数，用负数表示
    for (let i = 0; i < s1.length; i++) {
        map[s1[i].charCodeAt() - 97] -= 1
    }
    let left = 0
    for (let right = 0; right < s2.length; right++) {
        // 加入right位置的字符
        map[s2[right].charCodeAt() - 97] += 1
        // 若 > 0，则说明为多余字符，去除left位字符并右移一位
        while (map[s2[right].charCodeAt() - 97] > 0) {
            map[s2[left].charCodeAt() - 97] -= 1
            left += 1
        }
        // 若无多于字符且长度等于s1.length，证明存在子串
        if (right - left + 1 === s1.length) {
            return true
        }
    }

    return false
};
```
