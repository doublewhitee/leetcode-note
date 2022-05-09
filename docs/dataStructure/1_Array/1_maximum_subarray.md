# 1. 最大子数组和[53]

## 题目

[LeetCode](https://leetcode-cn.com/problems/maximum-subarray/)

给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。

示例 1：

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

示例 2：

```
输入：nums = [1]
输出：1
```

示例 3：

```
输入：nums = [5,4,-1,7,8]
输出：23
```

## 前缀和

前缀和指的是某序列的前 `n` 项和，是对暴力算法的优化。在数组问题中，面对求某一区间和的问题，需要通过不断地循环相加。例如在一维数组中通过使用前缀和，定义数组 `sum[]` ，其中 `sum[i]` 代表了数组前 `i` 个数之和。则数组 `[l, r]` 之和等于 `sum[r] - sum[l - 1]` 。 

本题中，某段连续子数组 `[i, j]` 的最大和即为 `sum[j] - Math.min(sum[i - 1], ... sum[j - 1])` ，因此只要知道 **该段数组之和** 以及 **最小前缀和** 即可得到最大和。

```javascript
var maxSubArray = function(nums) {
    let ans = -Infinity
    let sum = 0 // 数组之和
    let min = 0 // 最小前缀和
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans = Math.max(ans, sum - min)
        min = Math.min(sum, min)
    }
    return ans
};
```

## 贪心

贪心算法的核心在于在对问题求解时，总是做出在当前看来最好的选择。在本题中则为尽可能寻找某段和为正的子数组。因此如果 `count < 0` ，则将其抛弃。

```javascript
var maxSubArray = function(nums) {
    let ans = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        ans = Math.max(ans, count)
        if (count < 0) {
            count = 0
        }
    }
    return ans
};
```

## 动态规划

动态规划算法基本思想是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。

1. **确定子问题**

在本题中，想要计算数组 `nums` 的最大子数组和，需要计算经过第 `i` 个数结尾的最大子数组和，并取所有最大子数组和的最大值。

2. **定义状态**

`dp[i]` 表示以 `nums[i]` **结尾** 的 **连续** 子数组的最大和。

3. **状态转移方程**

由于 `nums[i]` 一定是子数组中的一个元素，因此如果 `dp[i - 1]`  大于0，那么最大子数组和也就是 `dp[i - 1] + nums[i]` ；如果 `dp[i - 1]` 小于等于0，那么最大子数组和就是 `nums[i]`。

<latexDisplay>
dp[i] = max(dp[i - 1] + nums[i], nums[i])
</latexDisplay>

```js
var maxSubArray = function(nums) {
    let ans = nums[0]
    let dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        ans = Math.max(ans, dp[i])
    }
    return ans
};
```

## 分治法

分治法同样将原问题划分成若干个规模较小而结构与原问题相似的子问题，通过递归地解决子问题得到原问题的解。与动态规划不同的是，分治法分解出的各个子问题往往是 **相互独立的** 。

在本题中，对于数组 **[l, r]** ，则其中点为 **m = (l + r) / 2** ，其最大子段和只会为以下三种情况之一：

1. **[l, m]** ：最大子段和在左侧数组

2. **[m + 1, r]** ：最大子段和在右侧数组

3. **[i , j]** ：最大子段和在跨越中点的数组，其中 `l < i <= mid <= j < r`

对于跨越中点的数组，可以将其再分治成左侧和右侧的最大子数组和问题。因此，通过将问题不断分治为区间长度为1的问题后，再将子问题不断合并，并返回左侧、右侧、左右合并三种情况中的最大值，即可得到答案。

通过分治法，将可以计算数组任意区间的最大子数组和。

```javascript
// 获取跨越中点的连续数组的最大值
const getCrossSum = (nums, left, right, mid) => {
    if (left === right) {
        return nums[left]
    }

    // 左侧到中点的最大值
    let leftMaxSum = -Infinity
    let leftSum = 0
    for (let i = mid; i >= left; i--) {
        leftSum += nums[i]
        leftMaxSum = Math.max(leftMaxSum, leftSum)
    }

    // 右侧到中点的最大值
    let rightMaxSum = -Infinity
    let rightSum = 0
    for (let i = mid + 1; i <= right; i++) {
        rightSum += nums[i]
        rightMaxSum = Math.max(rightMaxSum, rightSum)
    }
    // 跨中心最大值
    return leftMaxSum + rightMaxSum
}

// 获取最大子数组和的函数
const getMaxSubArray = (nums, left, right) => {
    // 区间长度为1，则停止
    if (left === right) {
        return nums[left]
    }

    const mid = Math.floor((left + right) / 2)
    const leftMax = getMaxSubArray(nums, left, mid)
    const rightMax = getMaxSubArray(nums, mid + 1, right)
    // corssMax !== leftMax + rightMax，由于是连续数组[i, j]
    const crossMax = getCrossSum(nums, left, right, mid)

    return Math.max(leftMax, rightMax, crossMax)
}

var maxSubArray = function(nums) {
    return getMaxSubArray(nums, 0, nums.length - 1)
};
```
