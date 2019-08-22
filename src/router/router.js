// import { HashRouter, Route,  Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import App from '../App';
import { HashRouter, Route} from './react-router-dom';

const Counter = lazy(() => import('../components/Counter'))
const DOMdiff = lazy(() => import('../components/DOMdiff'))

let Home  = (props, context) => {
  console.log(props)
  // {
  //   history : {
  //     action: "POP"
  //     block: function
  //     createHref: f
  //     go: f
  //     goBack: ƒ 
  //     goForward: ƒ 
  //     length: 13
  //     listen: ƒ 
  //     location: {pathname: "/", search: "", hash: "", state: undefined}
  //     push: ƒ 
  //     replace: ƒ 
  //   },
  //  location: {
  //      hash: ""
  //      pathname: "/"
  //      search: ""
  //      state: undefined
  //   },
  //  match: {
  //    isExact: true
  //    params: {}
  //    path: "/"
  //    url: "/"
  //  }
  // }
  return  <div>首页</div>
}
let User = lazy(() => import('./components/User'))
let Profile = () => <div>个人设置</div>

const myRouter = () => 
  <HashRouter>
    <App>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Switch> */}
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/counter" component={Counter}></Route>
          <Route exact path="/dom" component={DOMdiff}></Route>
        {/* </Switch> */}
      </Suspense>
    </App>
  </HashRouter>

export default myRouter