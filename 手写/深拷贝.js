/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-23 15:26:04
 */

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 输入：s = "We are happy."
// 输出："We%20are%20happy."


function node (val) {
  this.val = val
  this.next = null
  this.pre = null
}

const a = new node('a')
const b = new node('b')
const c = new node('c')
a.next = b
b.next = c
b.pre = a
c.pre = b
/**
 * @param {Object} obj
 * @return {Object}
 */
var deepCloneJSON = function(obj) {
   console.log('JSON.stringify(obj)：', obj)
   return JSON.parse(JSON.stringify(obj));
};

/**
 * @param {Object} obj
 * @return {Object}
 */
 var deepClone = function(obj, map = new Map()) {
  if (typeof obj !== 'object') return obj
  if (obj instanceof Array) return []
  if (map.get(obj)) return  map.get(obj) // 循环map中存在对象，则直接输出
  const result = {}
  map.set(obj, result) // 记录当前复制对象，防止循环引用
  for (const key in obj) {
    // 非原型属性则复制
    if (obj.hasOwnProperty(key)) {
      result[key] =  deepClone(obj[key], map)
    }
  }
  return result;
};

const d = deepClone(a)

console.log('deepClone：', d, d.next === b)
