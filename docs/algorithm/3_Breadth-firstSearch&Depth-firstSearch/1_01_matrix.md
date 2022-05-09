# 1. 01 矩阵[542]

## 题目

[LeetCode](https://leetcode.cn/problems/01-matrix/)

给定一个由 `0` 和 `1` 组成的矩阵 `mat` ，请输出一个大小相同的矩阵，其中每一个格子是 `mat` 中对应位置元素到最近的 `0` 的距离。

两个相邻元素间的距离为 `1` 。

示例 1:

<img src="https://pic.leetcode-cn.com/1626667201-NCWmuP-image.png" title="" alt="" width="120">

```
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
```

示例 2:

<img src="https://pic.leetcode-cn.com/1626667205-xFxIeK-image.png" title="" alt="" width="120">

```
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
```

## 广度优先搜索

广度优先搜索（BFS）通过逐层遍历来检验所有的节点，适合求解 **最短距离问题** 。BFS中，所有节点都会被加进一个 **先进先出** 的队列中，其一般步骤为：

1. 将初始点（一个或多个）加入队列

2. 取出头节点并判断其周围的节点，将符合条件的点加入队列尾部

3. 重复上步操作，直到队列长度为0

```
0  0  0         0  0  0       0  0  0
0  _  0   ==>   0  1  0   =>  0  1  0
_  _  _         1  _  1       1  2  1
```

由于本题要求寻找元素到最近的 `0` 的距离，因此在本题中，初始点即为所有等于 `0` 的元素。`seen` 用于记录已经加入过的节点，当队列长度为0时即可得到所有元素到最近的 `0` 的距离。

```javascript
var updateMatrix = function(mat) {
    const quene = [] // BFS队列
    const ans = []
    const seen = [] // 记录已经过的节点位置
    const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    // 初始化ans数组，并将所有mat[i][j] === 0的元素位置加入队列
    for (let i = 0; i < mat.length; i++) {
        ans[i] = []
        seen[i] = []
        for (let j = 0; j < mat[0].length; j++) {
            ans[i][j] = 0
            if (mat[i][j] === 0) {
                quene.push([i, j])
                seen[i][j] = true
            }
        }
    }

    while (quene.length > 0) {
        const [x, y] = quene.shift() // 取出第一个元素
        for (let [a, b] of pos) {
            if (x + a >= 0 && x + a < mat.length
                && y + b >= 0 && y + b < mat[0].length
                && !seen[x + a][y + b]
            ) {
                ans[x + a][y + b] = ans[x][y] + 1 // 未经过的周围元素最短距离 = 当前最短距离 + 1
                seen[x + a][y + b] = true // 记录已经过位置
                quene.push([x + a, y + b]) // 加入队列尾部
            }
        }
    }
    return ans
};
```

## 动态规划

a

```javascript
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length
    const ans = []
    for (let i = 0; i < m; i++) {
        ans[i] = []
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) ans[i][j] = 0
            else {
                ans[i][j] = Infinity
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= 1) ans[i][j] = Math.min(ans[i][j], ans[i - 1][j] + 1)
            if (j >= 1) ans[i][j] = Math.min(ans[i][j], ans[i][j - 1] + 1)
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i < m - 1) ans[i][j] = Math.min(ans[i][j], ans[i + 1][j] + 1)
            if (j < n - 1) ans[i][j] = Math.min(ans[i][j], ans[i][j + 1] + 1)
        }
    }
    return ans
};
```
