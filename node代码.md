# node代码

* 判断目录是否存在

  ```javascript
  var packDir = path.resolve(__dirname, '../src/data/package');
  try{
  	fs.statSync(packDir).isDirectory();
  }catch(err){
  	fs.mkdirSync(packDir);
  }
  ```

* [如何判断一个文件是否存在？（在不适用fs.exists的情况下）](https://cnodejs.org/topic/56764a00c096b56a0c1b4350)

* [Check synchronously if file/directory exists in Node.js](http://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)


