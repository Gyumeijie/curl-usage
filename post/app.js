const Koa = require('koa');
const KoaBody = require('koa-body');

const app = new Koa();

// must set multipart to true
app.use(KoaBody({multipart:true}));

app.use(async ctx => {
  if (ctx.request.is('multipart/form')) {
     ctx.body = `files: ${JSON.stringify(ctx.request.body.files)}`;
     ctx.body += "\n\n";
     ctx.body += `fields: ${JSON.stringify(ctx.request.body.fields)}`;
  } else {
     ctx.body = `request body: ${JSON.stringify(ctx.request.body)}`;
  }

  ctx.body += "\n";
});

app.listen(3000);
