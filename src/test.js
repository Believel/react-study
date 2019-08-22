const pathToRegexp = require('path-to-regexp')
const keys = []
const path = '/foo/:bar'
// 转化成正则表达式
const regexp = pathToRegexp(path, keys)

console.log(regexp)