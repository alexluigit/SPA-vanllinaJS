import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from postlist")
  }
  async getHtml() {
    return `<h1>from postlist</h1>`
  }
}
