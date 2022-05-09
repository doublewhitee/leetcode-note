# 2. 轮转数组[189]

## 题目

[LeetCode](https://leetcode-cn.com/problems/rotate-array/)

给你一个数组，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。

示例 1:

```
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
```

示例 2:

```
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
```

## 使用额外数组

首先定义一个新数组 `ans` ，`ans` 下标 `(i + k) % n` 即为 `nums` 中第 `i` 个元素翻转后的位置，由于题目要求是修改并返回 `nums` 数组，因此再进行一次遍历替换 `nums` 。

```js
var rotate = function(nums, k) {
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        ans[(i + k) % nums.length] = nums[i] // 翻转后位置
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i] // 替换至原数组
    }
};
```

## 数组翻转

通过三次数组翻转，可以得到目标结果：

> nums = [1, 2, 3, 4, 5, 6, 7], k = 3
> 
> 1. 整体翻转，得到 [7, 6, 5, 4, 3, 2, 1]
> 
> 2. 翻转 [0, k - 1]，得到 [5, 6, 7, 4, 3, 2, 1]
> 
> 3. 翻转 [k, nums.length - 1]，得到 [5, 6, 7, 1, 2, 3, 4]

```js
var rotate = function(nums, k) {
    const reverse = (target, start, end) => {
        while (start < end) {
            [target[start], target[end]] = [target[end], target[start]]
            start += 1
            end -= 1
        }
    }
    if (nums.length === 1) return
    k = k % nums.length // 防止k超过数组范围
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};
```
