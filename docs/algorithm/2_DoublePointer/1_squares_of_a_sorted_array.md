# 1. 有序数组的平方[977]

## 题目

[LeetCode](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。

示例 1：

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

示例 2：

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

## 排序

一个较为直接的思路：

+ 根据 `Math.abs` 排序后平方

+ 数组平方后进行排序

```js
var sortedSquares = function(nums) {
    nums = nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    for (let i in nums) {
        nums[i] = Math.pow(nums[i], 2)
    }
    return nums
};
```

## 双指针 - 1

由于数组按非递减顺序排序，因此如果数组中存在负数，则在正数与负数的分界点位置左侧平方后的结果按降序排序，右侧按升序排序。

可以首先查找到这个分界点，并通过双指针 `i = negative ` ，`j = negative + 1` 来进行排序，因为数组 **[0, i]** 的部分是负数，平方后的结果递减；数组 **[j, nums.length - 1]** 的部分是非负数， 平方后的结果递增。因此可以使用归并的方法排序，将 `nums[i]` 和 `nums[j]` 的平方进行对比并将较小的结果放入答案，注意需要判断下标是否超出边界。

```js
var sortedSquares = function(nums) {
    let negative = -1
    const ans = []
    // 查找负数与非负数的分界点位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negative = i
        } else break
    }
    let i = negative, j = negative + 1
    while (i >= 0 || j < nums.length) {
        if (i < 0) {
            ans.push(nums[j] * nums[j])
            j += 1
        } else if (j === nums.length) {
            ans.push(nums[i] * nums[i])
            i -= 1
        } else if (nums[i] * nums[i] < nums[j] * nums[j]) {
            ans.push(nums[i] * nums[i])
            i -= 1
        } else {
            ans.push(nums[j] * nums[j])
            j += 1
        }
    }
    return ans
};
```

## 双指针 - 2

由于数组是按照非递减顺序排序的，因此平方后的最大值必然在最左或者最右边。因此可以使用左右双指针比较两头的数字平方后的大小，将较大的平方和 **逆序** 放入结果中。

```js
var sortedSquares = function(nums) {
    // 平方后最大必然在最左或最右
    const res = new Array(nums.length).fill(0)
    let left = 0
    let right = nums.length - 1
    let k = nums.length - 1
    while (nums[left] <= nums[right]) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[k] = Math.pow(nums[left], 2)
            left += 1
        } else {
            res[k] = Math.pow(nums[right], 2)
            right -= 1
        }
        k -= 1
    }
    return res
};
```
