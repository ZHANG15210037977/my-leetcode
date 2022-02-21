/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:41:44
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-21 21:45:47
 */

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

str = "We are happy."


/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
   const pice = s.slice(0,n);
   const endstr = s.slice(n, s.length);
   return endstr + pice
};

console.log('replaceSpaceOne：', reverseLeftWords('lrloseumgh', 6))
