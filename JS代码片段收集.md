## JS代码片段收集

### 对象转换为字符串
**[Converting an object to a string](http://stackoverflow.com/questions/5612787/converting-an-object-to-a-string) **

```javascript
var obj = {
  name: 'myObj'
};

JSON.stringify(obj);
```

***

### 获取对象长度

* [Length of a JavaScript object (that is, associative array)](http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array)
* [How to get object length](http://stackoverflow.com/questions/5533192/how-to-get-object-length)

```javascript
// 不考虑兼容性Object.keys
Object.keys(a).length;

// 考虑兼容：for...in
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(myArray);
```

### 删除数组一个元素

[js删除数组里的某个元素](http://caibaojian.com/js-splice-element.html)

```
arr.splice(1,1)   //['a','c','d'] 删除起始下标为1，长度为1的一个值，len设置的1，如果为0，则数组不变

arr.splice(1,2)  //['a','d'] 删除起始下标为1，长度为2的一个值，len设置的2
```

