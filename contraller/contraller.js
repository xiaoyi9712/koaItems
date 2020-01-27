const {read,write} = require("../moudel/files")
const {math} = require("../moudel/math")
exports.show = async function(cxt){
    const {number} = cxt.params
    let x = await read(number)//x是返回的结果 false/data
    const start = new Date();
    let data = null;
    if (x){//如果读的到
        data = x;
    }else{//如果读不到
       const array = math(number)
        write(array,number)
        data = array
      
    }
    await cxt.render("demo",{
        array:data,
        time:new Date() - start
    })
}
