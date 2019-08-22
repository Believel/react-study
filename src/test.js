const pathToRegexp = require('path-to-regexp')
let keys = []
const path = '/user/detail/:id/:name'
// 转化成正则表达式
const regexp = pathToRegexp(path, keys, {end: false})
keys = keys.map(key => key.name)
let url = '/user/detail/12/aa'
let [uri, ...values] = url.match(regexp)
let params = {}
params = keys.reduce((memo, key, idx) => {
  memo[key] = values[idx]
  return memo
}, {})
console.log(uri === url)