/*
 * @Description: 
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-22 10:40:13
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-22 10:47:06
 */
/**
 * @param {string} str
 * @return {number}
 */
 var strToInt = function(str) {
   if (!(str && str instanceof String && str.length > 0)) return 0
   str = str.trim();
   const strArr = str.split('');
};

console.log('strToInt:', strToInt("4193 with words"))
