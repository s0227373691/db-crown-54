# First One

![](https://i.imgur.com/IOuCpzX.png)

**index.ejs**
```html
 <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <h3>
      My name is <%= name %>
    </h3>
    <h3>
      My student id is <%= id %>
    </h3>
  </body>
```

**index.js**
```js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name: 'Elmer', id: '207410654' });
});
```
![](https://i.imgur.com/WdZOZiX.jpg)
![](https://i.imgur.com/HSaDhBv.png)
![](https://i.imgur.com/BtoLdPr.png)
![](https://i.imgur.com/i1IRJXR.png)