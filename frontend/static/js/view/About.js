import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from about")
  }
  async getHtml() {
    return `<h1>about page</h1>`
  }
}
