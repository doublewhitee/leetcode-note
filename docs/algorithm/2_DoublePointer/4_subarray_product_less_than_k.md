# 4. 乘积小于 K 的子数组[713]

## 题目

[LeetCode](https://leetcode.cn/problems/subarray-product-less-than-k/)

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回子数组内所有元素的乘积严格小于 `k` 的连续子数组的数目。

示例 1：

```
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
```

示例 2：

```
输入：nums = [1,2,3], k = 0
输出：0
```

## 滑动窗口

使用两个指针 `left` 和 `right` 进行滑动窗口。起始时 `left`  和 `right` 均为 **0** ，首先移动 `right` ，并记录累计乘积。当乘积 **大于等于** `k` 时，说明已经不满足题目条件，此时开始移动 `left` 指针。在这个过程中，将增加 `right - left + 1` 种可能。

```javascript
var numSubarrayProductLessThanK = function(nums, k) {
    if (k === 0) return 0
    let sub = 1, left = 0
    let ans = 0
    for (let right = 0; right < nums.length; right++) {
        sub *= nums[right]
        while (left <= right && sub >= k) {
            sub /= nums[left]
            left += 1
        }
        ans += right - left + 1
    }
    return ans
};
```

## 二分查找

通过对不等式两侧取对数，可以将题目中的 **乘法转化为加法**。则题目要求被转化为 **子数组 [i, j] 的元素对数和小于 log k**。

<latexDisplay>
i \times j < k 即 \log(i + j) < \log(k)
</latexDisplay>

对于 **连续子数组之和** 的问题，使用 **前缀和** 是一种很好的方法。因此在本题中，可以使用该数组的对数前缀和 *logPrefix* 。因为 `nums` 是正整数数组，所以 *logPrefix* 是非递减的。现在，区间 **[i, j]** 的对数和即为 `logPrefix[j+1] - logPrefix[i]` 。

枚举子数组的右端点 `j`，在 *logPrefix* 的区间 **[0, j]** 内二分查找满足 `logPrefix[j + 1] - logPrefix[i] < log k` 即 `logPrefix[i] > logPrefix[j + 1] - log k` 的最小下标 `i`，那么以 `j` 为右端点且元素乘积小于 `k` 的子数组数目为 `j + 1 - i`。最后返回所有数目之和。

```javascript
var numSubarrayProductLessThanK = function(nums, k) {
    if (k === 0) return 0 // nums为正整数数组，因此不存在乘积小于0的子数组
    const logk = Math.log(k)
    // 对数前缀和
    const logPrefix = new Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        logPrefix[i + 1] = logPrefix[i] + Math.log(nums[i])
    }

    let ans = 0
    for (let j = 0; j < nums.length; j++) {
        const val = logPrefix[j + 1] - logk + 1e-10 // 1e-10: 避免计算误差
        let left = 0, right = j + 1, index = j + 1
        // 二分查找满足 logPrefix[i] > logPrefix[j + 1] - log k 的最小下标i
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (logPrefix[mid] > val) {
                right = mid - 1
                index = mid
            } else {
                left = mid + 1
            }
        }
        ans += j + 1 - index
    }
    return ans
};
```