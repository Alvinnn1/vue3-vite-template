const Koa = require('koa')
const path = require('path');
const serve = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const app = new Koa()
app.use(historyApiFallback())
app.use(serve(path.join('./', 'dist')))
app.listen(80)