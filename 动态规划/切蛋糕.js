/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-25 11:00:30
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-25 18:09:31
 */

// 小力开了一家蛋糕店，并针对不同重量的蛋糕设定了不同售价，分别为：
// 蛋糕重量 	0 	1 	2 	3 	4 	5 	6
//   售价 	 0 	 2 	 3 	 6 	 7 	 11  15
// 设重量为 n 蛋糕的售价为 p(n) ，切分的最高总售价为 f(n) 。

// 分析，一个为N的蛋糕，没切的时候求最大切分售价。  第一刀切下去，设分为左右两半，左边重量为i，右边重量为n-i，则只要f(i) + f(n-i)为最大，则f(n)即为最大
// 通过上述分析，问题转化为求i值，f(n-i) 和 f(i) 分别为f(n)的子问题，可以考虑使用分治法处理。 边界问题，当 n < 6 时，要去比较 不切是否比切大

// 1、分治暴力递归法
const cakeCuttingFn = (n) => {
  const cakeList = [0, 2, 3, 6, 7, 11, 15]
  if (n <= 1) return cakeList[n]
  let i = 1
  let max = 0
  while (i < n) {
    const cur = cakeCuttingFn(n - i) + cakeCuttingFn(i)
    if (cur > max) max = cur
    i++
  }
  if (cakeList[n] && cakeList[n] > max) max = cakeList[n]
  return max
}

// 2、记忆递归法
const  cakeCuttingFnStatus = (n, dp = {}) => {
  const cakeList = [0, 2, 3, 6, 7, 11, 15]
  if (n <= 1) return cakeList[n]
  if (dp[n]) return dp[n]
  let i = 1
  let max = 0
  while (i < n) {
    const cur = cakeCuttingFnStatus(n - i, dp) + cakeCuttingFnStatus(i, dp)
    if (cur > max) max = cur
    i++
  }
  if (cakeList[n] && cakeList[n] > max) return max = cakeList[n]  // 边界问题，当 n < 6 时，要去比较 不切是否比切大
  dp[n] = max
  return max
}

// 3、动态规划

const cakeCuttingFnDP = (n) => {
  const cakeList = [0, 2, 3, 6, 7, 11, 15]
  if (n <= 1) return cakeList[n]
  let curIndex = 2
  const maxList = {
    '0': 0,
    '1': 2,
  } // 缓存暂记录
  while (curIndex <= n) {
    let i = 1
    let max = 0
    while(i < curIndex) {
      const cur = maxList[curIndex - i] + maxList[i] // 因为动态规划使用的是从最小子问题开始向复杂递进，所以子问题所有解，理论上都会记录
      if (cur > max) max = cur
      i++
    }
    if (cakeList[curIndex] && cakeList[curIndex] > max) max = cakeList[curIndex] // 边界问题，当 n < 6 时，要去比较 不切是否比切大
    maxList[curIndex] = max
    curIndex++
  }
  return maxList[n]
}

console.log('cakeCuttingFnDP：', cakeCuttingFnDP(18))
