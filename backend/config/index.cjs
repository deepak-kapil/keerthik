const path=require('path')
const extend=require('util')._extend
const development=require('./env/development.cjs')
const defaults={
    root:path.normalize(__dirname + '/..')
}
 
Config={
    development:extend(development,defaults)
}["development"]

module.exports= Config;