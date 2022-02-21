/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-21 11:47:34
 */

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

str = "We are happy."

var replaceSpaceOne = function(s) {
  var strArr = s.split('');
  return strArr.map((res) => res === ' ' ? '%20' : res).join('')
};

var replaceSpaceTwo = function(s) {
  return s.replace(/ /g, "%20");
};

console.log('replaceSpaceOne：', replaceSpaceOne(str))
console.log('replaceSpaceOne：', replaceSpaceTwo(str))
