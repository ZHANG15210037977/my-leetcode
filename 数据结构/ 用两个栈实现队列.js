/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 17:59:29
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-21 18:18:12
 */

var CQueue = function() {
  this.arr = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.arr.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!(this.arr && this.arr instanceof Array && this.arr.length > 0)) return -1;
  return this.arr.shift()
};
