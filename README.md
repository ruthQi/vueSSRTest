#vue + ssr + vue-router

#https://ssr.vuejs.org/zh/guide

#https://juejin.im/post/5b7d7acff265da436c51bdf2

#.vue中添加样式编译有问题
1.使用的是v13版本，
{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
               loaders:{
                  less: [
                     {loader: 'vue-style-loader'},
                     {loader: 'css-loader'},
                     {loader: 'less-loader'}
                  ]
               }
            }
         }
2.使用v15版本，以上配置不好使
#https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4

显性配置.less才好使
{
   test: /\.less?$/,
   use: [
      'vue-style-loader',
      'css-loader',
      'less-loader'
   ]
}