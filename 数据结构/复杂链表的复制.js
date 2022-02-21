/*
 * @Description: 剑指 Offer 06. 从尾到头打印链表
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:51:55
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-21 21:38:48
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 链表节点类
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

 // 输入数组，返回一个链表头（以每一项值为值，以先后顺序为指向构建）
 function creactLinked(targeArr) {
  const [targe, ...otherArr] = targeArr
   const heade = new Node(targe)
   if (otherArr && otherArr instanceof Array && otherArr.length > 0) return new Node(targe, creactLinked(otherArr), heade)
   return heade
 }

 var targeNode = creactLinked([1,2,3,4,5])

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
  if (!head) return null
  const hasMap = new Map()
  let cur = head
  let copyPre = null
  while(cur) {
    const copyHead = new Node(cur.val, cur.next, cur.random) // 复制当前节点
    hasMap.set(cur, copyHead) // 记录哈希表
    if (copyPre) copyPre.next = copyHead // 复制父节点存在，绑定指向
    copyPre = copyHead // 记录当前节点为父节点
    cur = cur.next // 指针后移
  }
  hasMap.forEach((value, key) => {
    value.random = hasMap.get(key.random)
  })
  return hasMap.get(head)
};

// reversePrint(linked)
console.log('copyRandomList：', copyRandomList(targeNode))
