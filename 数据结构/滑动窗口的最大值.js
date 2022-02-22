/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-22 09:39:10
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-22 10:11:29
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
   if (!(nums && nums instanceof Array && nums.length > 0)) return 0
   const n = nums.length - k + 1
   if (n <= 0) return Math.max(...nums)
   const maxValHasMap = new Map()
   const returnArr = []
   for(i = 0; i < n; i++) {
     const curArrSlice = nums.slice(i, k + i);
     
     let key = curArrSlice.toString()
     const stuteVal = maxValHasMap.get(key)
     if (stuteVal) {
      returnArr.push(stuteVal)
     } else {
      let maxVal = Math.max(...curArrSlice);
      returnArr.push(maxVal)
      maxValHasMap.set(key, maxVal)
     }
   }
   return returnArr
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindowSpeed = function(nums, k) {
  if (!(nums && nums instanceof Array && nums.length > 0)) return []
  const n = nums.length - k + 1
  if (n <= 0) return Math.max(...nums)
  const returnArr = []
  for(i = 0; i < n; i++) {
    const curArrSlice = nums.slice(i, k + i);
    returnArr.push(Math.max(...curArrSlice))
  }
  return returnArr
};

console.log('maxSlidingWindow：', maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
