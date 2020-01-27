const fs = require("fs")
exports.read=function(number){
    return new Promise(res=>{
        fs.readFile(`./data/${number}.txt`,(err,data)=>{
            if (err) {
                res(false)
            }else{
                res(JSON.parse(data.toString()))
            }
        })
    })
}
exports.write = function(array,number){
    fs.writeFile(`./data/${number}.txt`,JSON.stringify(array),()=>{})
}