# 1. 打家劫舍系列

## 打家劫舍 I[198]

[LeetCode](https://leetcode.cn/problems/house-robber/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

示例 1:

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 2:

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

## 题解

在本题中，`dp[i]` 表示前 `i` 间房屋能偷窃到的最高总金额。由于题目要求不能连续偷窃两间房间，因此可以得到如下状态转移方程：

<latexDisplay>
dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
</latexDisplay>

边界条件为：

<latexDisplay>
\begin{cases}
dp[0] = nums[0] & \text{只有一间屋子}\\
dp[1] = Math.max(nums[0], nums[1]) & \text{两间屋子，选择金额更高的偷窃}
\end{cases}
</latexDisplay>

```javascript
var rob = function(nums) {
    const dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (i === 1) {
            dp[i] = Math.max(nums[i], dp[i - 1])
        } else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
    }
    return dp[dp.length - 1]
};
```

## 打家劫舍 II[213]

[LeetCode](https://leetcode.cn/problems/house-robber-ii/)

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 **围成一圈** ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

示例 1:

```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

示例 2:

```
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 3:

```
输入：nums = [1,2,3]
输出：3
```

## 题解

相较于 `打家劫舍 I`，这道题增加了 **房屋围成一圈** 的条件，因此需要满足 **首尾两间房屋不能同时偷窃**。为了满足这个条件，可以将题目拆解为求解 **第一间到最后第二间房屋** 偷窃的最高金额和 **第二间到最后一间房屋** 偷窃的最高金额。这两种情况的最大值即为一夜之内能够偷窃到的最高金额。

```javascript
var rob = function(nums) {
    if (nums.length === 1) return nums[0]

    const getRob = (start, end) => {
        if (start === end) return nums[start]
        const dp = []
        dp[start] = nums[start]
        dp[start + 1] = Math.max(nums[start], nums[start + 1])
        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        }
        return dp[end]
    }

    const res1 = getRob(0, nums.length - 2)
    const res2 = getRob(1, nums.length - 1)
    return Math.max(res1, res2)
};
```