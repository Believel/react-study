// 1. 标签类型 h1 div
// 2. 属性 className id
// 3. 子元素 可能是一个数组
class Element {
  constructor(tagName, attrs, children) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = children
  }
  // 把一个虚拟的DOM节点渲染成一个真实的DOM节点
  render() {
    
  }
}