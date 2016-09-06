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

