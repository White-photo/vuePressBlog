---
title: 数组扁平化
date: 2021-12-29
tags:
- 数组
categories:
- Javascript
---
## 概要
数组扁平化是指将一个多维数组变为一维数组
```javascript
[[1, 3], [2,4], [5, [6]]] => [1, 3, 2, 4, 5, 6]
```
## 实现
### 1.Es6后新增的方法 Array.prototype.flat([depth]);
depth 可选参数 默认值为1 指扁平化的深度
flat(Infinity) 就是无论嵌套多少层数组，都会展开
```javascript
let arr = [[1, 3], [2,4], [5, [6]]];
var newArr = arr.flat(2); // || arr.flat(Infinity)
```
返回值：一个包含所有子元素的新数组;
### 2.toString() + split()
```javascript
let newarr = arr.toString().split(',');
// 返回结果为['1', '3', '2', '4', '5', '6'];
```
这个方法是有缺陷的,返回的数组元素全都是字符串类型,单一元素的数组可以采用,但是存放多种数据格式的数组转回原来的类型非常麻烦,不推荐;
### 3.reduce方法
语法： Array.prototype.reduce(function(total, currentValue, currentIndex, array), initValue);
回调函数接收四个参数，total 累加值; currentValue 当前值;currentIndex 当前索引; array 调用reduce的数组;
reduce的第二个参数 initValue total累加值的初始值;
如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始
```javascript
function myFlat(arr) {
    arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? myFlat(cur) : cur);
    })
}
```
### 4.Array.prototype.some() + ...拓展运算符;
```javascript
function myFlat(arr) {
    return arr.some(item => {
        if (Array.isArray(item)) {
            arr.concat(...item);
        }
    })
}
```
## 总结
虽然说写了4种方法,但是核心实际上只有一个;都是通过遍历数组,检验元素是否是数组，递归实现;
