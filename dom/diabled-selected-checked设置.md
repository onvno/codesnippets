## `diabled`,`selected`,`checked`属性设置

* disabled：

  ```html
  <form action="demo_form.asp">
    First name: <input type="text" name="fname"><br>
    Last name: <input type="text" name="lname" id="buttonRemove" disabled><br>
    <input type="submit" value="Submit">
  </form>
  ```

* 设置或取消

  ```javascript
  // Disabling an element
  document.getElementById('buttonRemove').setAttribute("disabled", "true");

  // Enabling back an element by removing the "disabled" attribute
  document.getElementById('buttonRemove').removeAttribute("disabled");

  // 取消也可使用下方法
  document.getElementById('buttonRemove').disabled = false;
  ```

***



* selected

  ```html
  <select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="vw">VW</option>
    <option value="audi" selected id="test">Audi</option>
  </select>
  ```

* 设置或取消

  ```
  document.getElementById('test').removeAttribute("selected");

  // 不能使用dom.selected = false,会有错误
  ```


***



* checkbox - check

  ```
  <input name="name" id="id" type="checkbox" checked="checked">
  <!--或者以下，主要浏览器支持-->
  <input name="name" id="id" type="checkbox" checked>
  <input name="name" id="id" type="checkbox" checked="">
  <input name="name" id="id" type="checkbox" checked="yes">
  <input name="name" id="id" type="checkbox" checked="blue">
  <input name="name" id="id" type="checkbox" checked="false">
  ```
  > [What's the proper value for a checked attribute of an HTML checkbox?](http://stackoverflow.com/questions/473562/javascript-to-check-whether-a-checkbox-is-being-checked-or-unchecked)

* 设置或取消

  ```
  // cancel
  dom.removeAttribute('checked');
  dom.checked = false;

  // set
  dom.setAttribute('checked','checked')
  dom.checked = true
  ```

  ​