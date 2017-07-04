const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();



app.use(bodyParser());

app.use(logger());

app.use(router.routes());


router.post('/', async function(ctx) {
  ctx.body = 'Morning world!';
  let name = ctx.request.body.name;
  let msg = ctx.request.body.msg;

  console.log(ctx);

  console.log('name=', name);
  console.log('msg=', msg);


});

app.listen(3000);


