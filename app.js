const Koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")
const path = require("path")
const router = new Router()
const {show} = require("./contraller/contraller.js")
const render = require("koa-ejs")
let app = new Koa()
app.listen(3000,(cxt)=>{
})
app
  .use(router.routes())
  .use(router.allowedMethods());
app.use(static("public"))
render(app,{
    root:path.join(__dirname,"view"),
    layout:"template",
    viewExt:"html"
})

router.get("/:number",show)