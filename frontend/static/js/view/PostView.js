import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from post")
  }
  async getHtml() {
    return `<h1>from post</h1>`
  }
}
