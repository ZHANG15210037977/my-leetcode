/*
 * @Description: 青蛙跳台阶问题
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-28 17:37:00
 */

// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  let dp = []
  const numArr = `${num}`.split('')
  if (`${numArr[0]}${numArr[1]}` >= 10 && `${numArr[0]}${numArr[1]}` <= 25) {
    dp = [1,2]
  } else {
    dp = [1,1]
  }
  const len = numArr.length
  let i = 2
  while (i <= len) {
    const curi = `${numArr[i-2]}${numArr[i-1]}`
    if (curi >= 10 && curi <= 25) {
      dp[i] = dp[i - 2] + dp[i - 1]
    } else {
      dp[i] = dp[i - 2]
    }
    i++
  }
  return dp[len]
};

console.log('translateNum:', translateNum(25))
