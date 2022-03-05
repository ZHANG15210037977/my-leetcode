/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-03-04 11:11:57
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-03-04 12:00:35
 */

Array.prototype.reduceX = (cb) => {
  const arr = this
  console.log('arr：', arr, this)
  let totle = arr[0] || 0
  for(let i = 0; i < arr.length; i++) {
    totle = cb(totle, arr[i], i, arr)
  }
  return totle
}

const arr = [1,2,3]
const res = arr.reduceX((pre,cur) => {return pre + cur})

console.log('res：', res)
