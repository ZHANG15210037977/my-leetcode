/*
 * @Description: 斐波那契数列
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-25 10:51:01
 */

// 斐波那契数列
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

// 1、暴力 分治穷举
var fibonacciFn = function(n, ) {
   if (n === 0) return 0
   if (n === 1) return 1
   return fibonacciFn(n - 1) + fibonacciFn(n - 2)
};

// 2、暂存最有子解，分治处理(记忆化递归)，相对于前者，通过计算结果暂存，优化了时间复杂度（少干活儿了）
var fibonacciFnMap = function(n, map = new Map()) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (!map.get(n - 1)) {
    map.set(n - 1, fibonacciFnMap(n - 1))
  }
  if (!map.get(n - 2)) {
    map.set(n - 2, fibonacciFnMap(n - 2))
  }
  return map.get(n - 1) + map.get(n - 2)
};

// 动态规划，相对于前者，优化了空间（从前往后，少递归了）

fibonacciFnDp = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  const dp = [0, 1]
  let i = 2
  let cur = null
  while (i <= n ) {
    cur = dp[i - 1] + dp[i - 2]
    dp[i] = cur
    i++
  }
  return cur
}

console.log('fibonacciFnx:', fibonacciFnDp(7))
