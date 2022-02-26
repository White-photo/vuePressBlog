---
title: 快速排序
date: 2022-01-21
tags:
- 排序
categories:
- 数据结构与算法
---
## 概要
---
快速排序由C. A. R. Hoare在1960年提出，是八大排序算法中最常用的经典排序算法之一。其广泛应用的主要原因是高效，核心算法思想是分而治之。快速排序经常会被作为面试题进行考察，通常的考察思路是快排思想、编码实践之手写快排以及进一步对快排的优化。事实上在Java标准库中Arrays类的sort方法里源码也正是使用了优化后的快速排序（具体源码以及优化分析后续会推文讲解），掌握快排算法对于数据结构与算法入门极为重要。
## 原理
快速排序的核心思想是分治：选择数组中某个数作为基数，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数都比基数小，另外一部分的所有数都都比基数大，然后再按此方法对这两部分数据分别进行快速排序，循环递归，最终使整个数组变成有序。
## 基数选择
由于快速排序需要选定一个基数进行划分排序，关于基数选择有很多方式，而基数选择直接关系到快排的效率。事实上，选取基准元素应该遵循平衡子问题的原则：即使得划分后的两个子序列的长度尽量相同本篇以待排序数组首元素作为基数进行说明。本篇以最常见的使用数组首元素作为基数进行快速排序原理说明。
### 方法一
````
// 以第一个元素为基点
// 排序完成之后将第一个元素与中间元素调换，并且不再参与置换
function quickSort(arr, left, index) {
    let positionIndex,
    len = arr.length;
    left = typeof left  == undefined ? 0 : left;
    right = typeof right  == undefined ? len - 1 : right;
    
    if (left < right) {
        positionIndex = position(arr, left, right);
        quickSort(arr, left, positionIndex - 1);
        quickSort(arr, positionIndex + 1, right);
    }
    return arr;
}
// 左边大于基点会与右边小于基点的元素交换位置
function position(arr, left, right) {
    let povit = left;
    let index = povit + 1;
    for (let i = index; i <= arr.length; i++) {
        if (arr[i] < arr[povit]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, povit, index - 1);
    return index - 1;
}
// 交换元素位置
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
````
## 方法二
````
// 以中间元素为基点
// 定义左右两个数组接收大于基点和小于基点的元素
function quickSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let left = [],right = [];
    let pointIndex = Math.round(len/2);
    let base = arr.splice(pointIndex-1, 1);
    console.log(base[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= base[0]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    return [...left, base[0], ...right];
}
````    
## 方法三
````
// 利用filter方法简写过程，原理相同
let quickSort = ([head, ...tail]) => {
    return head == undefined ? [] : [...quickSort(tail.filter(x => x <= head)), head, ...quickSort(tail.filter(x => x >= head))];
}
````