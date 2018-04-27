const path = require("path");
const ROOT = path.resolve(__dirname +"/../")



const rootResolve = function(dir){
    return path.resolve(ROOT,dir)
}


//todo  根据app不同设置 需要环境变量
exports.alias = {
    'vue': 'mpvue',
    '@': rootResolve(''),
    "$common":rootResolve('common'),
    "$view": rootResolve('common/view'),
    "$page": rootResolve('common/view'),
    "$util": rootResolve('common/utile')
}

