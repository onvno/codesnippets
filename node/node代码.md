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




* gulp顺序执行：添加return

  ```javascript
  // 需要添加return,确保执行顺序：
  gulp.task('dirdist', function(){
      return gulp.src('./node_modules/kero-adapter/dist/**')
          .pipe(gulp.dest(uuiDist + '/'))
  })

  gulp.task('commit', ['dirdist'], function(){
      version.init([
          uuiDist + '/js/u-polyfill.js',
          uuiDist + '/js/u-polyfill.min.js',
          uuiDist + '/js/u.js',
          uuiDist + '/js/u.min.js',
          uuiDist + '/js/u-tree.js',
          uuiDist + '/js/u-tree.min.js',
          uuiDist + '/js/u-grid.js',
          uuiDist + '/js/u-grid.min.js',
          uuiDist + '/css/u.css',
          uuiDist + '/css/u.min.css',
          uuiDist + '/css/grid.css',
          uuiDist + '/css/grid.min.css',
          uuiDist + '/css/tree.css',
          uuiDist + '/css/tree.min.css'
      ]);
  })
  ```

  ​