/*
 * @Description: 青蛙跳台阶问题
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-28 10:15:23
 */

// 青蛙跳台阶问题
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 分析：设青蛙跳上N级台阶总共有f(n)种方法，对于最后一跳，能跳了一次，也可能跳了两次，但最后一跳只要跳了，状态就塌缩了，所以转移方程为f(n) = f(n - 1) + f(n - 2)
// f(0) = 1 f(1) = 1 f(2) = 2
/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
   const baseWaysList = {
     '0': 1,
     '1': 1,
     '2': 2
   }
   if (n <= 2) return  baseWaysList[n]
   let i = 3
   let cur = 0
   while(i <= n) {
     cur = (baseWaysList[i - 1] + baseWaysList[i - 2]) % 1000000007
     baseWaysList[i] = cur
     i++
   }
   return baseWaysList[n]
};

console.log('numWays:', numWays(0))
