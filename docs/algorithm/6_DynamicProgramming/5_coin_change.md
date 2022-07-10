# 5. 零钱兑换[322]

## 题目

[LeetCode](https://leetcode.cn/problems/coin-change/)

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

示例 1:

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

示例 2:

```
输入：coins = [2], amount = 3
输出：-1
```

示例 3:

```
输入：coins = [1], amount = 0
输出：0
```

## 动态规划

本题可以视作为一个 **背包问题** 。背包问题是一个经典的动态规划问题，问题可以描述为：给定一组物品，每种物品都有自己的重量和价格，在限定的总重量内，我们如何选择，才能使得物品的总价格最高。背包问题可以主要分为 **0-1 背包问题** （每种物品只能选 0 个或 1 个）和 **完全背包问题** （每种物品可以有无限多个）。本题中即为 **完全背包问题** 。

> **0-1 背包问题** 可见 **6. 分割等和子集[416]**)

定义 `dp[i]` 表示组成金额 `i` 所需最少的硬币数量。则可以得到状态转移方程：

<latexDisplay>
dp[i] = Math.min(dp[i], dp[i - coins[k]] + 1)，当 i - coins[k] >= 0 时
</latexDisplay>

当 `i` 等于 `0` 时，代表金额为0所需的硬币数量，即为0。

```javascript
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0 // 金额为0所需的硬币数量为0

    for (let i = 1; i <= amount; i++) {
        for (let k = 0; k < coins.length; k++) {
            if (i - coins[k] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[k]] + 1)
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount]
};
```

## 记忆化搜索

这个问题同样可以用回溯法解决，但回溯法中，很多重复的子问题会被重复计算造成超时。此时可以使用 **记忆化搜索** ，用数组或哈希表来缓存已解的子问题答案。定义 `Infinity` 为未求解的子问题，对于已求解的问题直接从数组中取出返回即可。

```javascript
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill(-Infinity) // -Infinity为未访问
    
    const dfs = (coins, amount, memo) => {
        if (amount < 0) return -1 // 无解
        if (amount === 0) return 0
        if (memo[amount] !== -Infinity) return memo[amount] // 已求解

        let min = Infinity
        for (let i = 0; i < coins.length; i++) {
            if (amount - coins[i] < 0) continue
            const res = dfs(coins, amount - coins[i], memo)
            // 若问题有解，且解小于当前最小解
            if (res >= 0 && res < min) {
                min = res + 1
            }
        }
        memo[amount] = min === Infinity ? -1 : min // 记忆化
        return memo[amount]
    }

    return dfs(coins, amount, memo)
};
```

## 广度优先搜索

通过BFS，初始化时，队列中为总金额 `amount` ，每次都减去所有硬币，那么第一次得到 `0` 时的步数一定为最少硬币个数。

```javascript
var coinChange = function(coins, amount) {
    const quene = [amount]
    const visited = [] // 记录已经出现过的差
    let step = 0

    while (quene.length) {
        const size = quene.length
        for (let k = 0; k < size; k++) {
            const total = quene.shift()
            if (total > 0) {
                for (let i = 0; i < coins.length; i++) {
                    if (coins[i] <= total && !visited.includes(total - coins[i])) {
                        quene.push(total - coins[i])
                        visited.push(total - coins[i])
                    }
                }
            } else if (total === 0) {
                return step
            }
        }
        step += 1
    }
    return -1
};
```