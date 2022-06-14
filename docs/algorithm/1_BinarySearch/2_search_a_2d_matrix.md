# 1. 搜索二维矩阵[74]

## 题目

[LeetCode](https://leetcode.cn/problems/search-a-2d-matrix/)

编写一个高效的算法来判断 `m x n` 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

+ 每行中的整数从左到右按升序排列。
+ 每行的第一个整数大于前一行的最后一个整数。

示例 1:

<img src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" title="" alt="" width="150">

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

示例 2:

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/mat2.jpg" title="" alt="" width="150">

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```

## 两次二分查找

由于本题中的矩阵元素是存在顺序的，查找有序数组中的某个元素可以很简单的想到使用二分查找的方法。依据这个矩阵的特性，可以首先对第一列进行二分查找，确定元素所在行，再对该行进行二分查找，得到元素位置。

```javascript
var searchMatrix = function(matrix, target) {
    let low = 0; high = matrix.length - 1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (matrix[mid][0] === target) {
            return true
        } else if (matrix[mid][0] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    if (high < 0) return false // target小于所有元素，直接返回false
    const row = high
    let left = 0, right = matrix[0].length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (matrix[row][mid] < target) {
            left = mid + 1
        } else if (matirx[row][mid] > target) {
            right = mid - 1
        } else return true
    }
    return false
};
```

## 一次二分查找

将整个二维矩阵按行拼接，则可以视作为一整个升序数组，并只用一次二分查找完成。

```javascript
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length
    let low = 0, high = m * n - 1
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low
        const x = matrix[Math.floor(mid / n)][mid % n]
        if (x < target) {
            low = mid + 1
        } else if (x > target) {
            high = mid - 1
        } else return true
    }
    return false
};
```

## 贪心算法

从右上角开始搜索，若值小于 `target` ，则说明本行不存在大于或等于 `target` 的值，`row` 增加；到达相应行后，若值大于 `target` ，则说明目标值只可能出现在之前的列，`col` 减少。

```javascript
var searchMatrix = function(matrix, target) {
    let row = 0
    let col = matrix[0].length - 1
    while (row < matrix.length && col > -1) {
        if (matrix[row][col] < target) {
            row += 1
        } else if (matrix[row][col] > target) {
            col -= 1
        } else return true
    }
    return false
};
```