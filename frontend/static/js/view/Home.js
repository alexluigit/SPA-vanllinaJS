import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from home")
  }
  async getHtml() {
    return `<h1>from home</h1>`
  }
}
