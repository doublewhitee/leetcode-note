# 2. 二进制矩阵中的最短路径[1091]

## 题目

[LeetCode](https://leetcode.cn/problems/shortest-path-in-binary-matrix/)

给你一个 `n x n` 的二进制矩阵 `grid` 中，返回矩阵中最短 **畅通路径** 的长度。如果不存在这样的路径，返回 `-1` 。

二进制矩阵中的 畅通路径 是一条从 **左上角** 单元格（即，`(0, 0)`）到 **右下角** 单元格（即，`(n - 1, n - 1)`）的路径，该路径同时满足下述要求：

路径途经的所有单元格都的值都是 `0` 。
路径中所有相邻的单元格应当在 **8 个方向之一** 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
**畅通路径的长度** 是该路径途经的单元格总数。

示例 1:

<img title="" src="https://assets.leetcode.com/uploads/2021/02/18/example1_1.png" alt="" width="300">

```
输入：grid = [[0,1],[1,0]]
输出：2
```

示例 2:

<img src="https://assets.leetcode.com/uploads/2021/02/18/example2_1.png" title="" alt="" width="300">

```
输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
输出：4
```

示例 3:

```
输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
输出：-1
```

## 广度优先搜索

BFS适合求解 **最短距离问题** ，DFS适用于 **探索所有的可能性** 或 **查找某一个结果是否存在** 。BFS由于其逐层遍历的特性，第一个到达终点的路径则一定是最短路径，在求解最短路径的情况下，其他尚未考虑的情况可以被省略，因此效率更高。但是DFS需要查找所有可能情况后才能得出最短路径，因此对于这类问题很容易超时，需要剪枝处理。

```javascript
var shortestPathBinaryMatrix = function(grid) {
    const m = grid.length - 1
    if (grid[0][0] === 1 || grid[m][m] === 1) return -1 // 起点或终点不为0，则永远不可能到达
    if (m === 0) return 1 // grid只有一个元素，则只需要1步到达

    const quene = [[0, 0]] // 初始化BFS队列
    grid[0][0] = 1 // 已走过的点标记为1，避免重复经过
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1],
                [-1, -1], [-1, 1], [1, -1], [1, 1]] // 8种方向
    let ans = 0
    while (quene.length > 0) {
        ans += 1
        // 搜索
        let size = quene.length
        while (size--) {
            const [x1, y1] = quene.shift()
            // 到达终点，则直接返回ans
            if (x1 === m && y1 === m) {
                return ans
            }
            // 遍历所有可能方向
            for (let k = 0; k < dir.length; k++) {
                const [x2, y2] = dir[k]
                if (grid[x1 + x2] !== undefined && grid[x1 + x2][y1 + y2] !== undefined && grid[x1 + x2][y1 + y2] === 0) {
                    grid[x1 + x2][y1 + y2] = 1
                    quene.push([x1 + x2, y1 + y2])
                }
            }
        }
    }
    return -1
};
```