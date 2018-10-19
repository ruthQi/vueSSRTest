//const Vue = require('vue');
const server = require('express')();
const serverRenderer = require('vue-server-renderer');//.createRenderer();
const fs = require('fs');
//工厂函数
//const createApp = require('./src/app.js');

const renderer = serverRenderer.createRenderer({
   template: fs.readFileSync('./index.template.html', 'utf-8')
});

server.get('*', (req, res)=>{
   //每个用户访问都会创建一个新的实例
   //const app = createApp({url: req.url});
   //传递数据
   const context = {
      title: 'hello ssr!'
   }
   renderer.renderToString(app, context, (err, html)=>{
      if(err){
         res.status(500).end('Internal Server Error');
         return;
      }
      console.log(html);
      res.end(html);
      // res.end(`
      //    <!DOCTYPE html>
      //    <html>
      //       <head><title>Hello</title></head>
      //       <body>${html}</body>
      //    </html>
      // `)
   })
});
server.listen(8080)