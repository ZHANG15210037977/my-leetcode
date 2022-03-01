/*
 * @Description: 青蛙跳台阶问题
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-28 16:31:18
 */

// 青蛙跳台阶问题
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有数的和的最大值。
// 要求时间复杂度为O(n)。

// 分析：求数组中，连续子数组最大值。 设当前数组最后一个元素为A(n)，不包含A(n)的 子数组为Arr(n-1), 则当前数组最优解为Arr(n-1) 的最优解 和 A(n)的比值，符合分治法和动态规划前提（存在最小子问题最优解）

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   if (!(nums instanceof Array && nums.length > 0)) return 0
   const len = nums.length
   const dp = [nums[0]]
   let curArrMax = nums[0]
   let i = 1
   while (i < len) {
     if (dp[i-1] <= 0) { // 都为正 相加
      dp[i] = nums[i]
     } else {
      dp[i] = dp[i - 1] + nums[i]
     }
     if (dp[i] > curArrMax) curArrMax = dp[i]
     i++
   }
   return curArrMax
};

const arr = [-2,1,-3,4,-1,2,1,-5,4]

console.log('numWays:', maxSubArray(arr))
