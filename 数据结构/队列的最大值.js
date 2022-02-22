var MaxQueue = function(val) {
  this.val = val || []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.val.length <= 0) return -1
  return Math.max(...this.val)
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    if (!value && vlaue !== 0) return null
    return this.val.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.val.length <= 0) return -1
  return this.val.shift()
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
