/*
 * @Description: 剑指 Offer 06. 从尾到头打印链表
 * @Version: 1.0
 * @Autor: zhangguijun8
 * @Date: 2022-02-21 11:51:55
 * @LastEditors: zhangguijun8
 * @LastEditTime: 2022-02-21 19:10:26
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 链表节点类
 class node {
   constructor(val, next) {
     this.val = val || null
     this.next = next || null
   }
 }

 // 输入数组，返回一个链表头（以每一项值为值，以先后顺序为指向构建）
 function creactLinked(targeArr) {
   const [targe, ...otherArr] = targeArr
   if (otherArr && otherArr instanceof Array && otherArr.length > 0) return new node(targe, creactLinked(otherArr))
   return new node(targe)
 }

 var linked = creactLinked([])
// var linked = creactLinked([1])

 // 递归
 var reversePrintHead = function(head, pre = null) {
   if (!head.next) {
     head.next = pre
     return head
   } 
   var post = head.next
   head.next = pre
   return reversePrint(post, head)
  //  return creactLinked(head);
};

// 辅助栈
var reversePrintArr = function (head) {
  if (!head) return []
  var linkValArr = []
  var cur = head
  while (cur) {
    linkValArr.push(cur.val)
    cur = cur.next
  }
  return linkValArr.reverse()
}

// 非递归，反转
var reversePrint = function(head) {
  if (!head) return []
  // 初始化
  var reverseArr = [] // 展示数组
  var pre = null // 前置节点
  var cur = head // 当前节点
  var post = head.next // 后置节点
  while (cur) {
    reverseArr.unshift(cur.val) // 记录
    post = cur.next // 后置节点更新
    cur.next = pre // 当前节点 反指
    pre = cur // 前置节点更新
    cur = post // 当前节点更新
  }
  return reverseArr
};

// 非递归，反转
var reversePrintHeadTowhile = function(head) {
  console.log('head：', head)
  if (!head) return new node(null)
  // 初始化
  var pre = null // 前置节点
  var cur = head // 当前节点
  while (cur) {
    post = cur.next // 后置节点更新
    cur.next = pre // 当前节点 反指
    pre = cur // 前置节点更新
    cur = post // 当前节点更新
  }
  return pre
};



// reversePrint(linked)
console.log('reversePrint：', reversePrintHeadTowhile())
