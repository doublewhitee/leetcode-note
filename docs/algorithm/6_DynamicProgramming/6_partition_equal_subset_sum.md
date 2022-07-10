# 6. 分割等和子集[416]

## 题目

[LeetCode](https://leetcode.cn/problems/partition-equal-subset-sum/)

给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1:

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

示例 2:

```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

## 动态规划

本题是一个典型的 **0-1 背包问题** 。本题中可以视作为一个容量为数组总和一半的背包，对于 `nums` 里的每个元素，选择装入或者不装入背包，使得 **背包正好装满** 。

> **完全背包问题** 可见 **5. 零钱兑换[322]**)

同时，根据题目条件可以发现，`nums.length` 若为 `1` ，则答案一定为 `false` 。同时，数组总和 `sum` 必须为偶数，否则答案为 `false` 。

定义二维数组 `dp[i][j]` 表示从数组的 `[0, i]` 下标范围内选取若干个正整数（可以是 0 个），是否存在一种选取方案使得被选取的正整数的和等于 `j`。初始时，`dp` 中的全部元素都是 `false` 。`dp[i][j]` 的取值有以下两种情况：

+ 不选取 `nums[i]` ，则若在 `[0, i - 1]` 的范围内，选取一部分元素可以使其总和为 `j` ，那么 **dp[i][j] = true**

+ 选取 `nums[i]` ，则若在 `[0, i - 1]` 的范围内，选取一部分元素可以使其总和为 `j - nums[i]` ，那么 **dp[i][j] = true**

可以得到状态转移方程：

<latexDisplay>
dp[i][j] = \begin{cases}
dp[i - 1][j] & \text{j < nums[i]}\\
dp[i - 1][j] || dp[i - 1][j - nums[i]] & \text{j >= nums[i]}
\end{cases}
</latexDisplay>

该问题的边界条件为：

+ 如果不选取任何正整数，则被选取的正整数等于 `0` 。因此对于所有 `0 <= i < dp.length`，都有 **dp[i][0] = true**

+ `i === 0` 时，表示只有 `nums[0]` 可以被选取，因此 **dp[0][nums[0]] = true**

最终的答案即为 `dp[dp.length - 1][sum / 2]` 。

```javascript
var canPartition = function(nums) {
    if (nums.length < 2) return false // 长度为1，一定不可分割
    nums = nums.sort((a, b) => a - b)
    let sum = 0, maxNum = 0
    nums.map(i => {
        sum += i
        maxNum = Math.max(i, maxNum)
    })
    if (sum % 2 !== 0) return false // 和不能被2整除，一定不可分割
    const target = Math.floor(sum / 2)
    if (maxNum > target) return false // 最大数超过总和的一半，一定不存在等和子集

    const dp = new Array(nums.length).fill(0).map(() => new Array(target + 1).fill(false))

    // 两种边界条件
    for (let i = 0; i < nums.length; i++) {
        dp[i][0] = true
    }
    dp[0][nums[0]] = true

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[dp.length - 1][target]
};
```

## 空间优化

在计算 `dp` 的过程中，每一行的 `dp` 值都只与上一行的 `dp` 值有关，因此状态数组可以从二维降维到一维。此时的状态转移方程：

<latexDisplay>
dp[j] = dp[j] ||  dp[j - nums[i]]
</latexDisplay>

值得注意的是，在进行第二层遍历时，需要使用 **从后向前** 的顺序，来保证 `dp[j - nums[i]]` 依旧是上一行 `dp` 的值。

```javascript
var canPartition = function(nums) {
    if (nums.length < 2) return false // 长度为1，一定不可分割
    nums = nums.sort((a, b) => a - b)
    let sum = 0, maxNum = 0
    nums.map(i => {
        sum += i
        maxNum = Math.max(i, maxNum)
    })
    if (sum % 2 !== 0) return false // 和不能被2整除，一定不可分割
    const target = Math.floor(sum / 2)
    if (maxNum > target) return false // 最大数超过总和的一半，一定不存在等和子集

    const dp = new Array(target + 1).fill(false)

    // 边界条件
    dp[0] = true

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]]
        }
    }

    return dp[target]
};
```


